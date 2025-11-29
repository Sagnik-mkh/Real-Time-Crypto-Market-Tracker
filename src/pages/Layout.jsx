import { Outlet, useNavigate } from "react-router";
import NavBarContainer from "../components/NavBar/NavBarContainer";

function MainLayout() {
	const navigator = useNavigate();
	return (
		<>
			<NavBarContainer
				name={"Crypto Tracker"}
				dropdownItems={["USD", "INR", "EUR"]}
				onClickHandler={() => navigator("/")}
				bgColor={"bg-info"}
				textColor={"text-info-content"}
			/>
			<Outlet />
		</>
	);
}

export default MainLayout;
