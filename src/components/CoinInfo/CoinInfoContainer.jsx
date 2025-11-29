import { useQuery } from "@tanstack/react-query";
import CoinInfo from "./CoinInfo";
import FetchCoinHistoricData from "../../services/FetchCoinHistoricData";
import { CurrencyStore, DaysStore, IntervalStore } from "../../zustand/store";
import { MyImgLoader } from "../Loader/PageLoader";
import Alert from "../Alert/Alert";

function CoinInfoContainer({ coinId }) {
	const { currency } = CurrencyStore();
	const { days } = DaysStore();
	const { interval } = IntervalStore();
	const { isPending, isFetching, isSuccess, data, isError, error } = useQuery(
		{
			queryKey: ["coin", coinId, currency, days],
			queryFn: () =>
				FetchCoinHistoricData(coinId, currency, days, interval),
			staleTime: 5 * 60 * 1000,
			cacheTime: 10 * 60 * 1000,
		}
	);

	if (isPending || isFetching) return <MyImgLoader />;
	if (isError)
		return (
			<Alert
				text={error.message}
				color={"alert-error"}
				style={"alert-soft"}
			/>
		);

	return <>{isSuccess && <CoinInfo histData={data.prices} />}</>;
}

export default CoinInfoContainer;
