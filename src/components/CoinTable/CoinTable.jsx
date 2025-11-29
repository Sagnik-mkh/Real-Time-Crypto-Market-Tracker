import { PageStore } from "../../zustand/store";
import { formatLargeNumber, getCurrencySymbol } from "../../Util/Util";
import Button from "../Button/Button";
import { ErrorLoader, Loader } from "../Loader/PageLoader";

function CoinTable({
	isPending,
	isFetching,
	isError,
	error,
	isSuccess,
	refetch,
	data,
	currency,
	navigator,
}) {
	const { page, incPage, decPage } = PageStore();
	return (
		<>
			<div className="custom-table">
				{/* Header */}
				<ul className="custom-table-header">
					<li className="custom-header-row">Coin</li>
					<li className="custom-header-row">Price</li>
					<li className="custom-header-row">24hr Change</li>
					<li className="p-2 text-center">Market Cap</li>
				</ul>
				{/* If Loading */}
				{(isPending || isFetching) && (
					<Loader color="btn-success" style={"btn-soft"} />
				)}
				{/* If error */}
				{isError && (
					<ErrorLoader
						onClickHandler={() => refetch()}
						errorMessage={error.message}
					/>
				)}
				{/* Data */}
				{isSuccess &&
					data.map((coin) => {
						const coinPrice = `${getCurrencySymbol(
							currency
						)}${formatLargeNumber(
							coin.current_price
						).toLocaleString()}`;
						const coinMarketCap = `${getCurrencySymbol(
							currency
						)}${formatLargeNumber(
							coin.market_cap
						).toLocaleString()}`;
						const coinChangePct = `${coin.price_change_percentage_24h.toFixed(
							2
						)}%`;
						return (
							<ul
								onClick={function goToCoinDetails() {
									navigator(`/details/${coin.id}`);
								}}
								key={coin.id}
								className="custom-table-row"
							>
								<li className="flex flex-col items-center gap-2 md:flex-row">
									<img
										src={coin.image}
										alt={coin.name}
										className="w-8 h-8"
										loading="lazy"
									/>
									<span className="hidden md:inline">
										{coin.name}
									</span>
									<span className="text-gray-500 uppercase">
										{coin.symbol}
									</span>
								</li>
								<li>{coinPrice}</li>
								<li
									className={
										coin.price_change_percentage_24h > 0
											? "text-success"
											: "text-error"
									}
								>
									{coinChangePct}
								</li>
								<li>{coinMarketCap}</li>
							</ul>
						);
					})}
				{/* Refresh */}
				<div className="flex justify-center mt-4">
					<Button
						size={"btn-sm"}
						color={"btn-info"}
						style={"btn-outline"}
						text={"Refresh"}
						onClickHandler={function refreshData() {
							refetch();
						}}
						isDisabled={isPending || isError}
					>
						<i className="mr-2 fa-solid fa-arrows-rotate"></i>
					</Button>
				</div>
				{/* Pagination */}
				<div className="flex items-center justify-center gap-4 mt-8">
					<Button
						color={"btn-secondary"}
						text={"Prev"}
						isDisabled={page === 1}
						onClickHandler={decPage}
					/>
					<span className="p-1 font-semibold">{page}</span>
					<Button
						color={"btn-secondary"}
						text={"Next"}
						onClickHandler={incPage}
					/>
				</div>
			</div>
		</>
	);
}

export default CoinTable;
