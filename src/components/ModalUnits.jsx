import React from "react"

const ModalUnits = ({setOpenModal, openModal, units, setUnits}) => {
  const handleLength = (e) => {
    const newLength = {...units, length: e.target.value}
     setUnits(newLength)
  }
  const handleFlow = (e) => {
    const newFlow = {...units, flow: e.target.value}
     setUnits(newFlow)
  }
  const handleDensity = (e) => {
    const newDensity = {...units, density: e.target.value}
     setUnits(newDensity)
  }
  const handleDynVis = (e) => {
    const newDynVis = {...units, dynViscosity: e.target.value}
     setUnits(newDynVis)
  }
  const handleKinVis = (e) => {
    const newKinVis = {...units, kinViscosity: e.target.value}
     setUnits(newKinVis)
  }
    console.log(units)
  
  return (
  <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 h-screen z-50 w-full">
      <div className="absolute w-9/12 md:8/12 lg:6/12 h-96 top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 right bg-white p-8">
        <h1 className="text-xl font-semibold">Units</h1>
        <section className="h-56 my-4 overflow-y-auto">
          <div className="my-2">
            <label className="block">length</label>
            <select className="border border-black rounded p-1 w-11/12" onChange={handleLength}>
                <option value="μm" >μm</option>
                <option value="mm">mm</option>
                <option value="m">m</option>
                <option value="ft">ft</option>
                <option value="yd">yd</option>
            </select>
          </div>
          <div className="my-2">
            <label className="block">flow</label>
            <select className="border border-black rounded p-1 w-11/12" onChange={handleFlow}>
                <option value="m³/s" >m³/s</option>
                <option value="m³/min">m³/min</option>
                <option value="m³/hr">m³/hr</option>
                <option value="lpm">lpm</option>
                <option value="lph">lph</option>
                <option value="usgpm">usgpm</option>
                <option value="bbl/day">bbl/day</option>
            </select>
          </div>
          <div className="my-2">
            <label className="block">density</label>
            <select className="border border-black rounded p-1 w-11/12" onChange={handleDensity}>
                <option value="kg/m³" >kg/m³</option>
                <option value="g/cm³">g/cm³</option>
                <option value="lb/ft³">lb/ft³</option>
            </select>
          </div>
          <div className="my-2">
            <label className="block">dynViscousity</label>
            <select className="border border-black rounded p-1 w-11/12" onChange={handleDynVis}>
                <option value="Pa.s" >Pa.s</option>
                <option value="mPa.s">mPa.s</option>
                <option value="CP">CP</option>
            </select>
          </div>
          <div className="my-2">
            <label className="block">kinViscousity</label>
            <select className="border border-black rounded p-1 w-11/12" onChange={handleKinVis}>
                <option value="m²/s" >m²/s</option>
                <option value="St">St</option>
                <option value="cSt">cSt</option>
            </select>
          </div>
        
        </section>
        <button className="border rounded p-2 bg-[#007bff] w-24 text-white mt-2" onClick={() => setOpenModal(!openModal)}>Done</button>
      </div>
  </div>)
}

export default ModalUnits