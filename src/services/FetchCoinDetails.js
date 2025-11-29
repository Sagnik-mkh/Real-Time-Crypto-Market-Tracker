import axiosInstance from "../helpers/AxiosInstance";

async function FetchCoinDetails(id) {
	try {
		const response = await axiosInstance.get(`/coins/${id}`);
		return response.data;
	} catch (error) {
		console.log("Error fetching coin data:", error);
		throw error;
	}
}

export default FetchCoinDetails;
