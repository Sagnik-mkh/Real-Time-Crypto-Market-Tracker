import axiosInstance from "../helpers/AxiosInstance";

async function FetchCoinSearch(coinName) {
	try {
		const response = await axiosInstance.get(`/search?query=${coinName}`);
		return response.data;
	} catch (error) {
		console.log("Error in API call :", error);
		throw error;
	}
}

export default FetchCoinSearch;
