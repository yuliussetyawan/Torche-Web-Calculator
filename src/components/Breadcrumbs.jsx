import React from "react";

const Breadcrumbs = ({ breadNav }) => {
	const { previousPath, activePath } = breadNav;

	return (
		<div className="flex justify-between flex-col px-1 bg-[#f5faff] md:flex-row lg:flex-row lg:px-12 lg:py-2">
			<h2 className="my-2 text-xl">Web Calculator</h2>
			<ol className="flex items-center text-[#007bff]">
				{previousPath.map((item) => (
					<React.Fragment key={item.id}>
						<li className="text-xs font-medium md:text-base lg:text-base">
							<a href={item.href}>{item.title}</a>
						</li>
						<span className="mx-2 text-gray-400">/</span>
					</React.Fragment>
				))}
				<li className="text-gray-400 text-xs font-medium md:text-base lg:text-base">
					{activePath.title}
				</li>
			</ol>
		</div>
	);
};

export default Breadcrumbs;
