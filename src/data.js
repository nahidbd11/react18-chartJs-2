export const data = [
	{
		id: 1,
		year: 2008,
		goal: 57,
		name: "cr7",
	},
	{
		id: 2,
		year: 1995,
		goal: 21,
		name: "cr7",
	},
	{
		id: 3,
		year: 2002,
		goal: 55,
		name: "cr7",
	},
	{
		id: 4,
		year: 2008,
		goal: 35,
		name: "messi",
	},
	{
		id: 5,
		year: 1995,
		goal: 58,
		name: "messi",
	},
	{
		id: 6,
		year: 2002,
		goal: 60,
		name: "messi",
	},
];

//create chart from data

export const options = {
	responsive: true,

	animations: {
		// borderColor: {
		// 	type: "color",
		// 	duration: 1000,
		// 	easing: "linear",
		// 	from: "red",
		// 	to: "green",
		// 	loop: true,
		// },
		tension: {
			duration: 1000,
			easing: "linear",
			from: 1,
			to: 0,
			loop: true,
		},
		// x: {
		// 	from: 0,
		// 	delay: 1000,
		// },
	},
	plugins: {
		legend: {
			position: "top",
			// onHover: (e) => console.log("event working", e),
			// onLeave: (e) => console.log("event working on mouse leave", e),
		},
		title: {
			display: true,
			text: "player's goal chart",
		},
	},
	scales: {
		// x: {
		// 	min: -100,
		// 	max: 100,
		// },
		// y: {
		// 	min: -100,
		// 	max: 100,
		// },
	},
};
export const chartData = {
	labels: data
		.map((d) => d.year)
		.slice(0, 3)
		.sort(), //x-axis value
	datasets: [
		// {
		// 	label: "messi's goal",
		// 	data: data.filter((d) => d.name === "messi").map((d) => d.goal), //y-axis value for line 1
		// 	borderColor: "rgb(255, 99, 132)",
		// 	// fill: true,
		// 	backgroundColor: "rgba(255, 99, 132, 0.5)",
		// 	pointStyle: "circle",
		// 	pointRadius: 5,
		// 	animations: {
		// 		borderColor: {
		// 			type: "color",
		// 			duration: 1000,
		// 			easing: "linear",
		// 			from: "red",
		// 			to: "green",
		// 			loop: true,
		// 		},
		// 	},
		// },
		{
			label: "cr7's goal",
			data: data.filter((d) => d.name === "cr7").map((d) => d.goal), //y-axis value for line 2
			borderColor: "rgb(53, 162, 235)",
			// fill: true,
			backgroundColor: "rgba(53, 162, 235, 0.5)",
			pointStyle: "rect",
			pointRadius: 10,
		},
	],
};
