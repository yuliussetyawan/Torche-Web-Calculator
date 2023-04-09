import React from "react";
import { inputDataForm } from "../data/InputData";

const InputForm = ({ inputDataForm }) => {
	const { label, type, units, step } = inputDataForm;
	return (
		<div>
			<div className="flex">
				<select className="inline-flex h-[50px] w-[100px] items-center justify-center text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300">
					{units.map((item) => (
						<option value={item}>{item}</option>
					))}
				</select>
				<input
					type={type}
					className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
					placeholder={label}
					step={step}
					required
				></input>
			</div>
		</div>
	);
};

export default InputForm;
