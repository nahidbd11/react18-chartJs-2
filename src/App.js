import logo from "./logo.svg";
import "./App.css";
import LineChart from "./componet/LineChart";
import BarChart from "./componet/BarChart";
import PieChart from "./componet/PieChart";

function App() {
	return (
		<div className="App">
			<LineChart />
			<BarChart />
			<PieChart />
		</div>
	);
}

export default App;
