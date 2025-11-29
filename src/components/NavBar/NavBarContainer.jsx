import { SearchQueryStore } from "../../zustand/store";
import { useQuery } from "@tanstack/react-query";
import FetchCoinSearch from "../../services/FetchCoinSearch";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";

function NavBarContainer({
	name,
	dropdownItems = ["USD", "INR"],
	onClickHandler,
	bgColor,
	textColor,
}) {
	const { query } = SearchQueryStore();
	const { data } = useQuery({
		queryKey: ["coin", query.slice(0, 3)],
		queryFn: () => FetchCoinSearch(query.slice(0, 3)),
		enabled: !!query,
		staleTime: 15 * 60 * 1000,
		cacheTime: 20 * 60 * 1000,
	});
	const reqtData = data?.coins
		.filter((coin) => {
			return coin.name.toLowerCase().includes(query.toLowerCase());
		})
		.slice(0, 3)
		.map((coin) => {
			return [coin.name, coin.id];
		});
	const navigator = useNavigate();

	return (
		<NavBar
			bgColor={bgColor}
			textColor={textColor}
			dropdownItems={dropdownItems}
			onClickHandler={onClickHandler}
			reqtData={reqtData}
			navigator={navigator}
			name={name}
		/>
	);
}

export default NavBarContainer;
