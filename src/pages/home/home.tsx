/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "../../index.css";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../components/checkOnScreen";
import SlideShow from "../../components/slideshow";
// import Footer from "../../components/footer";
import VideoBg from "../../video/promo.mp4"
import Logo from '../../img/dsu_logo.png'

function Home() {
	const [aboutContentAnimation, setAboutContentAnimation] = useState(false);

	var refHead = useRef<any>();
	const isHeadVisible = useOnScreen(refHead);
	var refAbout = useRef<any>();
	const isAboutVisible = useOnScreen(refAbout);

	useEffect(() => {
		if (isAboutVisible) {
			setTimeout(() => {
				setAboutContentAnimation(true);
			}, 100);
		} else {
			setAboutContentAnimation(false);
		}
	});

	return (
		<div className="overflow-x-hidden">
			<div ref={refHead} className="relative h-[90vh] z-0">
				<div className={`flex justify-center items-center h-[90vh] relative ${isHeadVisible ? "opacity-100" : "opacity-25"} duration-700`}>
					<video src={VideoBg} autoPlay loop muted className="w-full h-[89vh] object-cover" />
				</div>
				<div className="absolute inset-0">
					<img src={Logo} alt="dsu-logo" className="h-[20vh]" />
				</div>
			</div>
			<div className="m-1"></div>
			<div ref={refAbout} className="flex justify-center items-center h-fit py-8 shadow-md" >
				<div className={`${isAboutVisible ? "translate-x-0 opacity-100 scale-100" : "-translate-x-full opacity-25 scale-0"} duration-500`}>
					<div className="text-6xl flex justify-center my-5">About</div>
					<div className={`text-lg text-justify flex justify-center my-5 w-[60vw] ${aboutContentAnimation ? "opacity-100 scale-100" : "opacity-25 scale-0"} duration-1000 `}>
						We present to you, Tantra - an endless possibility.
						<br />
						Tantra is an inter-university annual cultural event organised by
						Dayananda Sagar University for Dayananda Sagar Group of Institutions
						and various universities across Bangalore where people can zealously
						participate in a vivid number of events organised for them. With its
						limitless potential, Tantra promises to provide an unforgettable
						experience filled with endless possibilities.
					</div>
				</div>
			</div>
			<div className="my-5 min-h-[65vh] shadow-md">
				<SlideShow />
			</div>
			<div className="text-6xl flex justify-center my-5">Sponsors</div>
			<div className="h-[50vh] flex justify-around items-center">
				<img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/CrossMediaLogo.PNG" alt="cross media" className={`h-[225px] object-cover`} loading='lazy' />
				<img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/ApesKitchenLogo.png" alt="apes kitchen" className={`h-[225px] object-cover`} loading='lazy' />
				{/* <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/SMLEventsLogo.jpg" alt="sml events" className={`h-[225px] object-cover`} loading='lazy' /> */}
			</div>
		</div>
	);
}

export default Home;
