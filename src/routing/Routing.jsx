import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import MainLayout from "../pages/Layout";
import { MyLoader } from "../components/Loader/PageLoader";
import { CustomErrorBoundary } from "../components/Error/CustomErrorBounder";

const Home = lazy(() => import("../pages/Home"));
const CoinDetails = lazy(() => import("../pages/CoinDetails"));

function Routing() {
	return (
		<CustomErrorBoundary>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route
						path="/details/:coinId"
						element={
							<Suspense fallback={<MyLoader />}>
								<CoinDetails />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</CustomErrorBoundary>
	);
}
export default Routing;
