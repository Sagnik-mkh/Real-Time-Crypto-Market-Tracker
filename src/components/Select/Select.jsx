import { DaysStore, IntervalStore } from "../../zustand/store";

function Select() {
	const { days, setDays } = DaysStore();
	const { setInterval } = IntervalStore();
	return (
		<>
			<select
				className="select select-warning w-32 rounded-3xl"
				value={days}
				onChange={(event) => {
					setDays(event.target.value);
					if (event.target.value == "1") setInterval("");
					else setInterval("daily");
				}}
			>
				<option value={"1"}>1 Day</option>
				<option value={"7"}>7 Days</option>
				<option value={"15"}>15 Days</option>
				<option value={"30"}>30 Days</option>
			</select>
		</>
	);
}
export default Select;
