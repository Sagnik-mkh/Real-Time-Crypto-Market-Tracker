import { create } from "zustand";

export const CurrencyStore = create((set) => ({
	currency: "usd",
	setCurrency: (newCurrency) => set({ currency: newCurrency }),
}));

export const PageStore = create((set) => ({
	page: 1,
	incPage: () => set((state) => ({ page: state.page + 1 })),
	decPage: () =>
		set((state) => ({ page: state.page == 1 ? 1 : state.page - 1 })),
}));

export const TextExpandStore = create((set) => ({
	isExpanded: false,
	setExpanded: (newIsExpanded) => set({ isExpanded: newIsExpanded }),
}));

export const DaysStore = create((set) => ({
	days: "7",
	setDays: (newDays) => set({ days: newDays }),
}));

export const IntervalStore = create((set) => ({
	interval: "daily",
	setInterval: (newInterval) => set({ interval: newInterval }),
}));

export const SearchQueryStore = create((set) => ({
	query: "",
	setQuery: (newQuery) => set({ query: newQuery }),
}));
