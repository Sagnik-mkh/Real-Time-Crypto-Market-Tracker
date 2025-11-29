import axiosInstance from "../helpers/AxiosInstance";

async function FetchCoinHistoricData(
	id,
	currency = "usd",
	days = "7",
	interval = "daily"
) {
	try {
		const response = await axiosInstance.get(
			`/coins/${id}/market_chart?vs_currency=${currency}&interval=${interval}&days=${days}`
		);
		return response.data;
	} catch (error) {
		console.log("Error : ", error);
		throw error;
	}
}

export default FetchCoinHistoricData;
