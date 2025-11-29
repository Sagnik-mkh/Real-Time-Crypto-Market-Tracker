import { TextExpandStore } from "../../zustand/store";
import { getCurrencySymbol } from "../../Util/Util";
import CoinInfoContainer from "./CoinInfoContainer";
import Select from "../Select/Select";

function AboutCoin({ data, coinId, currency }) {
	const { isExpanded, setExpanded } = TextExpandStore();
	const coinDescr = isExpanded
		? data?.description.en
		: data?.description.en.substring(0, 400);
	return (
		<>
			<div className="custom-coin-info-grid">
				<div className="custom-coin-info-section-1">
					<img src={`${data?.image.large}`} alt={`${data?.name}`} />
					<h2 className="custom-about-coin-header">{data?.name}</h2>
					<p className="text-base text-justify">
						{coinDescr}
						<button
							onClick={() => setExpanded(!isExpanded)}
							className="font-semibold cursor-pointer text-info"
						>
							{isExpanded ? "Read less" : "...Read more"}
						</button>
					</p>
					<div className="text-warning">
						Market Cap Rank : {data?.market_cap_rank}
					</div>
					<div className="text-success">
						Current Price:{" "}
						{`${getCurrencySymbol(
							currency
						)}${data?.market_data.current_price[
							currency
						].toLocaleString()}`}
					</div>
				</div>
				<div className="flex flex-col justify-center w-full gap-12">
					<div className="w-[90vw] md:w-[50vw] mx-auto relative">
						<CoinInfoContainer coinId={coinId} />
					</div>
					<div className="flex justify-center">
						<Select />
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutCoin;
