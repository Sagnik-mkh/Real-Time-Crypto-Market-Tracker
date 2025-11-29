import { ErrorBoundary } from "react-error-boundary";
import { CustomErrorBoundaryUI } from "./CustomErrorBoundaryUI";

export function CustomErrorBoundary({ children }) {
	return (
		<ErrorBoundary
			FallbackComponent={CustomErrorBoundaryUI}
			onReset={() => window.location.reload()}
		>
			{children}
		</ErrorBoundary>
	);
}
