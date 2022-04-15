import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { Chart, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import { chartData, options } from "../data";

function createGradient(ctx, area) {
	const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

	// gradient.addColorStop(0, "#333");
	gradient.addColorStop(0, "rgba(58,123,213,1)");

	gradient.addColorStop(1, "rgba(0,210,255,0.3)");

	return gradient;
}

function BarChart() {
	const chartRef = useRef(null);
	const [graphData, setGraphData] = useState(chartData);
	const onClickchart = (e) => {
		const { current: chart } = chartRef;
		console.log(chart);
		const { dataIndex } = getDatasetAtEvent(chart, e);
		console.log(dataIndex);
		console.log(getDatasetAtEvent(chart, e));
		console.log(getElementAtEvent(chart, e)[0].element.$context.raw);
	};

	useEffect(() => {
		const chart = chartRef.current;

		if (!chart) {
			return;
		}

		const gData = {
			...chartData,
			datasets: chartData.datasets.map((dataset) => ({
				...dataset,
				borderColor: createGradient(chart.ctx, chart.chartArea),
				backgroundColor: createGradient(chart.ctx, chart.chartArea),
			})),
		};

		setGraphData(gData);
		console.log(gData);
	}, []);
	return (
		<div className="line-chart">
			BarChart
			<Chart
				type="bar"
				options={{
					animations: {
						y: {
							delay: ($context) => {
								return $context.dataIndex * 300 + $context.dataIndex * 100;
							},
							loop: true,
						},
					},
				}}
				data={graphData}
				onClick={onClickchart}
				ref={chartRef}
			/>
		</div>
	);
}

export default BarChart;
