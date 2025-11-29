export function formatLargeNumber(num) {
	if (num >= 1_000_000_000_000)
		return (num / 1_000_000_000_000).toFixed(2) + "T";
	if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
	if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
	if (num >= 1_000) return (num / 1_000).toFixed(2) + "K";
	return num.toString();
}

export function getCurrencySymbol(curr) {
	return curr === "usd" ? "$" : curr === "inr" ? "₹" : `${curr} `;
}

export function formatUnixTimestamp(msTimestamp) {
	const date = new Date(msTimestamp);

	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	const day = String(date.getDate()).padStart(2, "0");
	const month = months[date.getMonth()];
	const year = String(date.getFullYear()).slice(-2);

	return `${day}-${month}-${year}`;
}

export function formatUnixTo12Hr(unixTimestamp) {
	const date = new Date(unixTimestamp);
	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, "0");

	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12;

	return `${hours}:${minutes} ${ampm}`;
}
