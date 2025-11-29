import FetchCoinData from "../../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyStore, PageStore } from "../../zustand/store";
import { useNavigate } from "react-router";
import CoinTable from "./CoinTable";

function CoinTableContainer() {
	const { page } = PageStore();
	const { currency } = CurrencyStore();
	const { isPending, isError, isFetching, isSuccess, data, error, refetch } =
		useQuery({
			queryKey: ["coin", page, currency],
			queryFn: () => FetchCoinData(page, currency),
			staleTime: 5 * 60 * 1000,
			cacheTime: 10 * 60 * 1000,
		});
	const navigator = useNavigate();

	return (
		<CoinTable
			isPending={isPending}
			isError={isError}
			isFetching={isFetching}
			isSuccess={isSuccess}
			data={data}
			refetch={refetch}
			error={error}
			navigator={navigator}
			currency={currency}
		/>
	);
}

export default CoinTableContainer;
