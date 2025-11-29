import { FaCircleXmark } from "react-icons/fa6";
import Button from "../Button/Button";

export function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
	return (
		<>
			<div className="container mx-auto">
				<div role="alert" className="alert alert-error">
					<FaCircleXmark />
					<span>{error.message}</span>
					<Button
						text={"Try Again"}
						color={"btn-neutral"}
						style={"btn-outline"}
						size={"btn-md"}
						onClickHandler={resetErrorBoundary}
					/>
				</div>
			</div>
		</>
	);
}
