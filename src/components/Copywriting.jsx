import React from "react";

const Copywriting = ({ header, desc, text }) => {
	return (
		<section>
			<div className="mb-4 w-fit">
				<h1 className="text-3xl font-headline font-bold text-justify">
					{header}
				</h1>
			</div>
			<div className="mb-2 w-fit">
				<p className="text-md font-bodycopy font-normal text-justify">
					{desc}
				</p>
			</div>
			<div className="mb-2 w-fit">
				<p className="text-md font-bodycopy font-normal text-justify">
					{text}
				</p>
			</div>
		</section>
	);
};

export default Copywriting;
