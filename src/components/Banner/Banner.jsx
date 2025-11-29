function Banner({ header, subHeader }) {
	return (
		<>
			<div className="hero bannerBackground h-[50vh]">
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold text-">
							{header}
						</h1>
						<p className="mb-5">{subHeader}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
