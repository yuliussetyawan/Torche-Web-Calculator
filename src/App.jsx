import "./App.css";
import React, { useState } from "react";
import InputForm from "../src/components/InputForm";
import Breadcrumbs from "../src/components/Breadcrumbs";
import MainLayout from "./MainLayout/MainLayout";
import BackToTop from "react-back-to-top-button";
import { RxArrowUp } from "react-icons/rx";
import { descParagraph } from "./data/CopywritingData";
import Copywriting from "./components/Copywriting";
import ModalUnits from "./components/ModalUnits"
import {
	breadCrumbsNav,
	inputDataForm,
	inputDynamicData,
	inputKinematicData,
} from "./data/InputData";

const initialValue = {
  length: "",
  flow: "",
  density: "",
  dynViscosity:"",
  kinViscosity: "",
}

export default function App() {
	let ArrowUpStyle = { color: "white" };

	const [basis, setBasis] = useState();
	const [showInput, setShowInput] = useState("kinematic");
  const [units, setUnits] = useState(initialValue)
  const [openModal, setOpenModal] = useState(false)

	const handleBasis = (e) => {
		setBasis(e.target.value);

		console.clear();
		console.log(e.target.value);

		if (e.target.value === "kinematic") {
			setShowInput("kinematic");
		} else if (e.target.value === "dynamic") {
			setShowInput("dynamic");
		} else {
			setShowInput(false);
		}
	};

	return (
		<MainLayout>
			<BackToTop
				scrollTo={0}
				showAt={100}
				speed={100}
				easing="easeInOutSine"
			>
				<span className="">
					<RxArrowUp
						style={ArrowUpStyle}
						className="w-[50px] h-[50px] bg-molecularTosca p-2 rounded-2xl border-2 border-molecularTosca transition-color duration-500 transform hover:bg-absorbBlue hover:border-absorbBlue"
					/>
				</span>
			</BackToTop>
			<div className="w-full flex flex-col  h-max mt-16">
				<Breadcrumbs breadNav={breadCrumbsNav} />
				<main className="w-full  bg-white flex flex-col-reverse md:flex-row lg:flex-row lg:h-auto">
					<div className="w-full h-max md:w-2/5 lg:w-2/5 bg-white  md:h-[inherit] p-12">
						<div className="sticky top-20 z-40">
							<form>
								{inputDataForm.map((item) => (
									<InputForm
										key={item.id}
										inputDataForm={item}
										data={item.units[0]}
									/>
								))}
								<div>
									<div className="flex">
										<select
											type="number"
											id="bepFlow"
											className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
											value={basis}
											onChange={handleBasis}
											required
										>
											<option value="kinematic">
												Kinematic
											</option>
											<option value="dynamic">
												Dynamic
											</option>
										</select>
									</div>
								</div>

								{showInput === "kinematic" &&
									inputKinematicData.map((item) => (
										<InputForm
											key={item.id}
											inputDataForm={item}
										/>
									))}

								{showInput === "dynamic" &&
									inputDynamicData.map((item) => (
										<InputForm
											key={item.id}
											inputDataForm={item}
										/>
									))}
							</form>
							<div className="mt-4 flex gap-4 items-center justify-center">
								<button className="bg-[#5885E9] px-4 py-2 rounded-2xl text-white transition-color duration-500 transform  hover:bg-[#0B122A] hover:border-[#D8D8D8]">
									Calculate
								</button>
								<button className="bg-[#5885E9] px-4 py-2 rounded-2xl text-white transition-color duration-500 transform  hover:bg-[#0B122A] hover:border-[#D8D8D8]" onClick={()=> setOpenModal(!openModal)}>
									Units
								</button>
							</div>
						</div>
					</div>

					{/*Kayaknya nanti buat copywriting nya, 
	 				dibikin data nya aja atau gimana? 
	  				biar rapi aja maksudnya*/}

					<div className="w-full md:w-3/5 lg:w-3/5 bg-green-500 md:h-[inherit] lg:h-[inherit] p-8 overflow-hidden">
						<div className="flex flex-col h-fit p-6">
							{descParagraph.map((paragraph) => {
								return (
									<Copywriting
										key={paragraph.id}
										{...paragraph}
									/>
								);
							})}
						</div>
					</div>
           {
          openModal &&  <ModalUnits openModal={openModal} setOpenModal={setOpenModal} units={units} setUnits={setUnits}/>
        }
				</main>
			</div>
		</MainLayout>
	);
}
