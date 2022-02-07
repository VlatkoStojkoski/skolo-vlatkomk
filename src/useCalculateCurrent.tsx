import { useEffect, useState } from "react";
import classTimes, { DayTime } from "./classTimes";

export default function useCalculateCurrent(): [[number, number] | null, boolean, unknown | null] {
	const [current, setCurrent] = useState<[number, number] | null>(null);

	useEffect(() => {
		const currentTime = DayTime.getCurrentTime();
		const [currentRange] = classTimes.filter(([start, end]) => currentTime.inRange(start, end));
		const rangeIndex = classTimes.indexOf(currentRange);

		const currentDate = new Date();
		const currentDay = currentDate.getDay();

		setCurrent([currentDay - 1, rangeIndex]);
	}, [])

	return [current, true, null];
};