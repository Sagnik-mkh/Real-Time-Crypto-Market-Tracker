import { FaCircleXmark } from "react-icons/fa6";
function Alert({ color, style, text }) {
	return (
		<>
			<div className="container mx-auto m-6">
				<div role="alert" className={`alert ${color} ${style}`}>
					<FaCircleXmark />
					<span>{text}</span>
				</div>
			</div>
		</>
	);
}

export default Alert;
