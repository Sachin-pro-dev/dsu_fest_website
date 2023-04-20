/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "../../index.css";
import img0 from "../../img/home-0.jpg";
import logo from "../../img/dsu_logo.png";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../components/checkOnScreen";
import { Link } from "react-router-dom";
import SlideShow from "../../components/slideshow";
import EventItemHome from "../../components/eventItemHome";
import Footer from "../../components/footer";
import VideoBg from "../../video/promo.mp4"

function HomeMobile() {
	const [events, setEvents] = useState<any>([
		"Event 1",
		"Event 2",
		"Event 3",
		"Event 4",
		"Event 5",
		"Event 6",
		"Event 7",
		"Event 8",
		"Event 9",
		"Event 10",
	]);
	const [aboutContentAnimation, setAboutContentAnimation] = useState(false);

	var refHead = useRef<any>();
	const isHeadVisible = useOnScreen(refHead);
	var refAbout = useRef<any>();
	const isAboutVisible = useOnScreen(refAbout);
	var refevent = useRef<any>();
	const isEventVisible = useOnScreen(refevent);

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
			<div ref={refHead} className="relative h-[250px] z-0">
				<div className={`flex justify-center items-center h-[250px] relative ${isHeadVisible ? "opacity-100" : "opacity-25"} duration-700`}>
					{/* <img src={img0} className={`h-[95vh] object-cover duration-[5000ms] ${isHeadVisible ? "object-right" : "object-left"}`} alt="background" />
					<div className="absolute bg-[#000000] h-[95vh] w-screen opacity-50"></div> */}
					<video src={VideoBg} autoPlay loop muted className="h-[250px]" />
				</div>
				<div className="absolute inset-0 z-10">
					{/* <div className=" sm:flex w-screen flex-col justify-center items-center h-[95vh]  md:flex-row gap-44">
						<div className="flex justify-center">
							<img src={logo} className="w-[500px]  md:w-[600px]" alt="logo" />
						</div>
						<div className="h-[300px] bg-transparent w-[5px] rounded-md"></div>

						<div className="flex justify-center items-center">
							<div className="">
								<div className="text-8xl m-4">Tantra</div>
								<div className="text-2xl flex justify-center">
									A Grand Celebration
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<div className="m-2"></div>
			<div ref={refAbout} className="flex justify-center items-center h-fit py-8 shadow-md" >
				<div className={`${isAboutVisible ? "translate-x-0 opacity-100 scale-100" : "-translate-x-full opacity-25 scale-0"} duration-500`}>
					<div className="text-4xl flex justify-center my-5">About</div>
					<div className={`text-sm text-justify flex justify-center my-5 w-[80vw] ${aboutContentAnimation ? "opacity-100 scale-100" : "opacity-25 scale-0"} duration-1000 `}>
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
			<div ref={refevent} className="shadow-md">
				<div
					className={`m-5 ${isEventVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
						} duration-500`}
				>
					<div className="text-6xl flex justify-center my-5"> Events </div>
					<div className="grid grid-cols-1 w-full h-fit md:grid-cols-5 gap-7">
						{events.map((item: any) => (
							<EventItemHome item={item} />
						))}
					</div>
				</div>
			</div>
			<div className="">
				<SlideShow />
			</div>
			<div className="h-[50vh] flex justify-center items-center">Sponsers</div>
			< Footer />
		</div>
	);
}

export default HomeMobile;
