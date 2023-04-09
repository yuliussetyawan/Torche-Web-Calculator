import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/logo.webp";

const Header = () => {
	const [active, setActive] = useState(false);

	return (
		<header
			id="header"
			className="fixed z-50 top-0 left-0 right-0 bg-[#0B122A] text-white h-16 flex items-center"
		>
			<div
				className={`w-full flex justify-between px-2 py-4 items-center md:px-12`}
			>
				<div>
					<img src={Logo} alt="logo" width="100px" />
				</div>
				<nav
					id="navbar"
					className={`${
						active
							? "navbar absolute w-full h-screen bg-[rgba(0,0,0,0.4)] left-0 bottom-0 top-0 right-0 z-20"
							: ""
					}`}
				>
					{active ? (
						<div className="text-right">
							{" "}
							<RxCross2
								onClick={() => setActive(!active)}
								className="text-right"
							/>{" "}
						</div>
					) : (
						<></>
					)}
					<ul
						className={`${
							active
								? "absolute z-40 h-[80vh] top-[45%] right-[50%] translate-x-1/2 -translate-y-1/2 w-11/12 bg-[#0B122A] p-8 gap-10 flex flex-col"
								: "hidden"
						} lg:flex lg:flex-row lg:gap-6`}
					>
						<li>
							<a href="https://torche.app/">Beranda</a>
						</li>
						<li>
							<a href="https://torche.app/#about">Tentang Kami</a>
						</li>
						<li>
							<a href="https://torche.app/#services">Layanan</a>
						</li>
						<li>
							<a href="https://torche.app/tutors">Tutor</a>
						</li>
						<li>
							<a href="https://torche.app/events">Event</a>
						</li>
						<li className="dropdown">
							<a href="#">
								<span>Kursus</span>{" "}
								<i className="bi bi-chevron-down"></i>
							</a>
							{/*               <ul>
                <li>
                  <a href="https://torche.app/courses">Mata Kuliah</a>                     </li>
                <li>
                  <a   href="https://torche.app/registration">Mendaftar kelas</a>
                </li>
                <li>
                  <a href="https://torche.app/pricing">Harga</a>
                </li>
              </ul> */}
						</li>
						<li className="dropdown">
							<a className="nav-link scrollto active" href="#">
								<span>Apps</span>{" "}
								<i className="bi bi-chevron-down"></i>
							</a>
							{/*               <ul>
                <li><a href="https://torche.app/che-calculator">Web Calculator</a></li>
              </ul> */}
						</li>
						<li>
							<a href="https://torche.app/careers">Karir</a>
						</li>
					</ul>
				</nav>
				{active ? (
					<></>
				) : (
					<GiHamburgerMenu
						onClick={() => setActive(!active)}
						className="lg:hidden"
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
