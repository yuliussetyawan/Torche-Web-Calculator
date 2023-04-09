export const inputDataForm = [
	{
		id: 1,
		label: "BEP Flow (Water)",
		type: "number",
		units: ["m³/s", "m³/min", "m³/hr", "lpm", "lph", "usgpm", "bbl/day"],
		step: 0,
	},
	{
		id: 2,
		label: "BEP Head (Water)",
		type: "number",
		units: ["μm", "mm", "m", "ft", "yd"],
		step: 0,
	},
	{
		id: 3,
		label: "Speed",
		type: "number",
		units: ["RPM"],
		step: 0,
	},
	{
		id: 4,
		label: "Flow (Water)",
		type: "number",
		units: ["m³/s", "m³/min", "m³/hr", "lpm", "lph", "usgpm", "bbl/day"],
		step: 0,
	},
	{
		id: 5,
		label: "Head (Water)",
		type: "number",
		units: ["μm", "mm", "m", "ft", "yd"],
		step: 0,
	},
	{
		id: 6,
		label: "Efficiency",
		type: "number",
		units: ["%"],
		step: 0,
	},
];

export const inputKinematicData = [
	{
		id: 1,
		label: "Kinematic Viscosity (Liquid)",
		type: "number",
		units: ["m²/s", "St", "cSt"],
		step: 0,
	},
];

export const inputDynamicData = [
	{
		id: 1,
		label: "Dynamic Viscosity (Liquid)",
		type: "number",
		units: ["Pa.s", "mPa.s", "CP"],
		step: 0,
	},
	{
		id: 2,
		label: "Density (Liquid)",
		type: "number",
		units: ["kg/m³", "g/cm³", "lb/ft³"],
		step: 0,
	},
];

export const breadCrumbsNav = {
	previousPath: [
		{
			id: 1,
			title: "Apps",
			href: "#",
		},
		{
			id: 2,
			title: "Chemical Engineering Calculator",
			href: "https://torche.app/che-calculator",
		},
	],
	activePath: {
		id: 1,
		title: "Kalkulator Pumps",
	},
};
