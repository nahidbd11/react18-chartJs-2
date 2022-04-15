import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";

import { Chart, Line } from "react-chartjs-2";
import { chartData, options } from "../data";
function createGradient(ctx, area) {
	const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

	gradient.addColorStop(0, "red");
	gradient.addColorStop(1, "green");

	return gradient;
}
function LineChart() {
	const chartRef = useRef(null);
	const [graphData, setGraphData] = useState(chartData);
	useEffect(() => {
		const chart = chartRef.current;

		if (!chart) {
			return;
		}

		const gData = {
			...chartData,

			datasets: chartData.datasets
				.filter((d) => d.type === "line")
				.map((dataset) => ({
					...dataset,
					// borderColor: createGradient(chart.ctx, chart.chartArea),
					backgroundColor: createGradient(chart.ctx, chart.chartArea),
				})),
		};

		setGraphData(gData);
		console.log(gData);
	}, []);
	return (
		<div className="line-chart">
			LineChart
			<Chart
				type="line"
				options={{
					...options,
					borderDash: [5, 5],
					scales: {
						y: {
							min: -100,
							max: 100,
							ticks: {
								callback: (val, index) => {
									return `${val} goals`;
								},
							},
						},
						x: {
							display: true,
							title: {
								display: true,
								text: "year",
								color: "#911",
								font: {
									family: "Comic Sans MS",
									size: 20,
									weight: "bold",
									lineHeight: 1.2,
								},
								padding: { top: 20, left: 0, right: 0, bottom: 0 },
							},
						},
					},
				}}
				data={chartData}
				ref={chartRef}
			/>
		</div>
	);
}

export default LineChart;
