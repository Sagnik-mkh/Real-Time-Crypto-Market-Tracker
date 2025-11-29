import { lazy, Suspense } from "react";
import { MyListLoader, MyImgLoader } from "../components/Loader/PageLoader";

const CoinTableContainer = lazy(() =>
	import("../components/CoinTable/CoinTableContainer")
);
const Banner = lazy(() => import("../components/Banner/Banner"));

function Home() {
	return (
		<>
			<Suspense fallback={<MyImgLoader />}>
				<Banner header={"Crypto Tracker"} subHeader={"Get all information regarding cryptocurrency"} />
			</Suspense>
			<Suspense fallback={<MyListLoader />}>
				<CoinTableContainer />
			</Suspense>
		</>
	);
}

export default Home;
