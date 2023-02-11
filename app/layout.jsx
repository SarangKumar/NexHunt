import "../styles/globals.css";
import { AnalyticsWrapper } from "../components/Analytics";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
			<AnalyticsWrapper />
		</html>
	);
}
