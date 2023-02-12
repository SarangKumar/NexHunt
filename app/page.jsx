"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import PreEvent from "../components/PreEvent";

import { eventStart } from "../components/Time";

export default function Login() {
	// const router = useRouter();
	
	const [event, setEvent] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const difference = eventStart - now;

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
				setEvent(true);
			}

			// if(!event){router.push('/')}

		}, 1000);
		return () => clearInterval(interval);
	}, []);


	// const click = () => {
	// 	router.push({
	// 	  pathname: "/test",
	// 	  search: "?name=something",
	// 	});
	//   };


	return event ? (
		<div>
			<LoginCard />
			{/* <button onClick={click}>click me</button> */}
			<Footer />
		</div>
	) : (
		<PreEvent days={days} hours={hours} minutes={minutes} seconds={seconds} />
	);
}
