import { useEffect, useState } from "react";
import { collection, getDocsFromCache, getDocsFromServer, QueryDocumentSnapshot } from "firebase/firestore";

import { db } from "./api";

interface ClassDetails {
	name: string;
	prof: string;
	code: string;
}

type ClassesInDay = [ClassDetails, ClassDetails, ClassDetails, ClassDetails, ClassDetails, ClassDetails, ClassDetails];
type Timetable = Day[];

type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

class Day {
	classes: ClassesInDay;
	name: WeekDay;

	constructor(classes: ClassesInDay, name: WeekDay) {
		this.classes = classes;
		this.name = name;
	}
}

const dayConverter = () => ({
	toFirestore: (data: Day) => data,
	fromFirestore: (snap: QueryDocumentSnapshot) =>
		snap.data() as Day
});

export default function useGetTimetable(): [Timetable | null, boolean, unknown | undefined] {
	const [data, setData] = useState<Timetable | null>(null);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState<unknown | null>(null);

	useEffect(() => {
		(async () => {
			const timetableRef = collection(db, 'timetable').withConverter(dayConverter());

			try {
				let timetable = await getDocsFromCache(timetableRef);

				if (timetable.empty) {
					timetable = await getDocsFromServer(timetableRef);
				}

				const formatted = timetable.docs.map(doc => doc.data());

				setData(formatted);
				setLoaded(true);
			} catch (err) {
				setError(err);
			}
		})()
	}, []);

	return [data, loaded, error];
}