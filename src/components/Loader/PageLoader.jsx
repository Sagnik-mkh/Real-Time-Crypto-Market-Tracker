import ContentLoader from "react-content-loader";
import Button from "../Button/Button";

export const MyLoader = () => {
	return (
		<div className="p-4 mt-12">
			<ContentLoader
				height={140}
				speed={1}
				backgroundColor={"#333"}
				foregroundColor={"#999"}
				viewBox="0 0 380 70"
			>
				{/* Only SVG shapes */}
				<rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
				<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
				<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
			</ContentLoader>
		</div>
	);
};

export const MyListLoader = () => {
	return (
		<div className="flex items-center justify-center p-4 mt-12">
			<ContentLoader
				speed={2}
				width={340}
				height={84}
				viewBox="0 0 340 84"
				backgroundColor={"#333"}
				foregroundColor={"#999"}
			>
				<rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
				<rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
				<rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
				<rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
				<rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
				<rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
				<rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
				<rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
			</ContentLoader>
		</div>
	);
};

export const MyImgLoader = () => {
	return (
		<div className="flex items-center justify-center p-4 mt-12">
			<ContentLoader
				speed={2}
				width={400}
				height={460}
				viewBox="0 0 400 460"
				backgroundColor={"#333"}
				foregroundColor={"#999"}
			>
				<rect x="-45" y="-19" rx="2" ry="2" width="476" height="264" />
			</ContentLoader>
		</div>
	);
};

export function Loader({ color = "btn-primary", size = "btn-lg", style }) {
	return (
		<>
			<div className="flex justify-center my-8">
				<div className={`btn ${color} ${size} ${style}`}>
					<span className="loading loading-dots loading-md"></span>
					<span>Loading</span>
				</div>
			</div>
		</>
	);
}

export function ErrorLoader({ onClickHandler, errorMessage }) {
	return (
		<>
			<div className="flex justify-center my-8">
				<div className="flex flex-col items-center justify-center alert alert-error alert-soft w-fit">
					<i className="fa-solid fa-triangle-exclamation"></i>
					<span>{errorMessage}</span>
					<Button
						text={"Retry"}
						color={"btn-warning"}
						style={"btn-outline"}
						onClickHandler={onClickHandler}
					/>
				</div>
			</div>
		</>
	);
}
