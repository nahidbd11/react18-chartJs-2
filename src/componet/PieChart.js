import React from "react";
import { Chart, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import { data, options } from "../data";
function PieChart() {
	const chartData = {
		labels: data
			.map((d) => d.year)
			.slice(0, 3)
			.sort(), //x-axis value
		datasets: [
			{
				label: "cr7's goal",
				data: data.filter((d) => d.name === "cr7").map((d) => d.goal), //y-axis value for line 2
				borderColor: "rgb(53, 162, 235)",
				// fill: true,
				backgroundColor: ["yellow", "red", "blue"],
				pointStyle: "rect",
				pointRadius: 10,
			},
		],
	};

	return (
		<div className="line-chart">
			<Chart
				type="pie"
				options={{
					animation: {
						duration: 3000,
						delay: 2000,
						loop: true,
					},
				}}
				data={chartData}
			/>
		</div>
	);
}

export default PieChart;
