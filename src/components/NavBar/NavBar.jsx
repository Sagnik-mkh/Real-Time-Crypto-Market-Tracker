import { useState } from "react";
import { CurrencyStore, SearchQueryStore } from "../../zustand/store";

function NavBar({
	bgColor,
	textColor,
	dropdownItems,
	onClickHandler,
	reqtData,
	navigator,
	name
}) {
	const { setQuery } = SearchQueryStore();
	const { setCurrency } = CurrencyStore();
	const [searchBar, setSearchBar] = useState(false);
	return (
		<>
			<div className={`shadow-sm navbar ${bgColor} ${textColor}`}>
				<div className="container mx-auto navbar p-0 min-h-0.5">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<i className="fa-solid fa-bars"></i>
							</div>
							<ul
								tabIndex={0}
								className="p-2 mt-3 font-semibold shadow text-neutral-content menu menu-sm dropdown-content bg-neutral rounded-box z-1 w-52"
							>
								{dropdownItems.map((item, index) => {
									return (
										<li
											key={index}
											onClick={() =>
												setCurrency(
													`${item.toLowerCase()}`
												)
											}
											className="p-0.5 cursor-pointer hover:bg-neutral-700 rounded-md"
										>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div
						className="navbar-center"
						role="button"
						onClick={onClickHandler}
					>
						<a className="text-xl btn btn-ghost">{name}</a>
					</div>
					<div className="gap-3 navbar-end">
						<div className="dropdown dropdown-open">
							<label
								className={`input input-neutral input-sm transition-all duration-300 ease-in-out ${
									searchBar
										? "max-w-48 opacity-100"
										: "max-w-0 opacity-0"
								}`}
							>
								<i className="text-gray-500 fa-solid fa-magnifying-glass"></i>
								<input
									type="search"
									className="grow"
									placeholder="Search"
									onChange={(event) => {
										setQuery(event.target.value);
									}}
								/>
							</label>
							<ul
								className={`dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm ${
									reqtData && reqtData.length > 0
										? "flex"
										: "hidden"
								}`}
							>
								{reqtData &&
									reqtData.length > 0 &&
									reqtData.map((item, index) => {
										return (
											<li
												key={index}
												className="p-0.5 cursor-pointer hover:bg-neutral-700 rounded-md"
												onClick={() => {
													navigator(
														`/details/${item[1]}`
													);
													setQuery("");
												}}
											>
												{item[0]}
											</li>
										);
									})}
							</ul>
						</div>
						<button
							onClick={function getSearchBar() {
								setSearchBar(!searchBar);
							}}
							className="btn btn-ghost btn-circle"
						>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
