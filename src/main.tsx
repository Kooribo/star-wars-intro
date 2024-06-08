import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";

export default function App() {
	return (
		<BrowserRouter basename="/star-wars-intro">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
