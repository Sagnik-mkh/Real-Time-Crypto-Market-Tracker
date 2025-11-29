import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import FetchCoinDetails from "../services/FetchCoinDetails";
import { CurrencyStore } from "../zustand/store";
import { MyLoader } from "../components/Loader/PageLoader";
import Alert from "../components/Alert/Alert";
import AboutCoin from "../components/CoinInfo/AboutCoin";

function CoinDetails() {
	const { coinId } = useParams();
	const { currency } = CurrencyStore();
	const { isPending, isFetching, isError, isSuccess, error, data } = useQuery(
		{
			queryKey: ["coin", coinId],
			queryFn: () => FetchCoinDetails(coinId, currency),
			staleTime: 5 * 60 * 1000,
			cacheTimer: 10 * 60 * 1000,
		}
	);

	if (isPending || isFetching) {
		return (
			<div className="container mx-auto">
				<MyLoader />
			</div>
		);
	}

	if (isError) {
		return (
			<Alert
				text={error.message}
				color={"alert-error"}
				style={"alert-outline"}
			/>
		);
	}

	return (
		<>
			{isSuccess && (
				<AboutCoin data={data} coinId={coinId} currency={currency} />
			)}
		</>
	);
}
export default CoinDetails;
