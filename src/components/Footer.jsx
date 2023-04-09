import React from "react";

const footerNav = [
	{
		id: 1,
		href: "https://torche.app#hero",
		title: "Beranda",
	},
	{
		id: 2,
		href: "https://torche.app#about",
		title: "About",
	},
	{
		id: 3,
		href: "https://torche.app#services",
		title: "Layanan",
	},
	{
		id: 4,
		href: "https://torche.app/courses",
		title: "Kursus",
	},
	{
		id: 5,
		href: "https://torche.app/careers",
		title: "Karir",
	},
];

const Footer = () => {
	return (
		<footer
			id="footer"
			className="w-full p-2 bg-[#0B122A] text-white relative bottom-0 -z-10"
		>
			<div className="flex flex-col flex-wrap md:flex-row md:items-start">
				<div className="my-2 md:w-5/12 md:p-2">
					<h3 className="text-3xl uppercase mb-2 font-semibold">
						Torche
					</h3>
					<p className="text-sm">
						Torche Education adalah perusahaan startup teknologi
						pendidikan yang berbasis di Indonesia, dengan fokus pada
						teknik kimia, teknik bioproses, dan mata pelajaran
						teknik proses lainnya.
					</p>
				</div>

				<div className="my-2 text-sm md:w-2/12 md:p-2">
					<h4 className="my-2 text-md font-bold uppercase">Link</h4>
					<ul className="leading-9">
						{footerNav.map((item) => (
							<li key={item.id}>
								<a href={item.href}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>

				<div className="my-2 text-sm md:5/12 md:p-2">
					<h4 className="my-2 text-md font-bold uppercase">
						Kontak Kami
					</h4>
					<p>
						<strong>
							PT. Obor Pengetahuan Indonesia untuk Masyarakat
						</strong>
						<br />
						Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27
						<br />
						Kab. Tangerang, Banten 15810
						<br />
						Indonesia <br />
						<strong>Whatsapp Business:</strong> +62 851 5521 6117
						<br />
						<strong>Email:</strong> admin@torche.app
						<br />
					</p>

					<div className="social-links">
						<a
							href="https://twitter.com/TorcheEdu"
							className="twitter"
						>
							<i className="bx bx-play"></i>
						</a>
						<a
							href="https://www.facebook.com/torche.edu"
							className="facebook"
						>
							<i className="bi bi-facebook"></i>
						</a>
						<a
							href="https://www.instagram.com/torche.app/"
							className="instagram"
						>
							<i className="bi bi-instagram"></i>
						</a>
						<a
							href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw"
							className="youtube"
						>
							<i className="bi bi-youtube"></i>
						</a>
						<a
							href="https://www.linkedin.com/company/torche-education/"
							className="linkedin"
						>
							<i className="bi bi-linkedin"></i>
						</a>
						<a
							href="https://vt.tiktok.com/ZSeu2n4ca/"
							className="tiktok"
						>
							<i className="bi bi-tiktok"></i>
						</a>
						<a
							href="https://discord.com/invite/2fYBrcK785"
							className="discord"
						>
							<i className="bi bi-discord"></i>
						</a>
						<a
							href="https://wa.me/+6285155216117"
							className="whatsapp"
						>
							<i className="bi bi-whatsapp"></i>
						</a>
						<a
							href="https://page.line.me/229wiguf"
							className="line"
						>
							<i className="bi bi-line"></i>
						</a>
					</div>
				</div>
			</div>

			{/*     <div class="container">
        <div class="copyright">
            &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved
        </div>
        <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
    </div> */}
		</footer>
	);
};

export default Footer;
