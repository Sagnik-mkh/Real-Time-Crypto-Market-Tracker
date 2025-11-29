import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { CurrencyStore, DaysStore } from "../../zustand/store";
import { formatUnixTimestamp, formatUnixTo12Hr } from "../../Util/Util";

Chart.register(CategoryScale);

function CoinInfo({ histData }) {
	const { days } = DaysStore();
	const { currency } = CurrencyStore();
	return (
		<>
			<Line
				options={{
					responsive: true,
					maintainAspectRatio: true,
					aspectRatio: 2,
					scales: {
						x: {
							ticks: {
								color: "gray",
								autoSkip: true,
								maxTicksLimit: 10,
							},
						},
						y: {
							ticks: { color: "gray" },
						},
					},
				}}
				datasetIdKey="id"
				data={{
					labels: histData.map((item) => {
						return days == "1"
							? formatUnixTo12Hr(item[0])
							: formatUnixTimestamp(item[0]);
					}),
					datasets: [
						{
							id: 1,
							label: `Price in ${currency} for past ${days} ${
								days == "1" ? "day" : "days"
							}`,
							data: histData.map((item) => {
								return item[1];
							}),
						},
					],
				}}
			/>
		</>
	);
}

export default CoinInfo;
