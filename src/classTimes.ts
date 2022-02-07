type FormattedTime = `${number}:${number}`;

export class DayTime {
	asSeconds: number;
	asString: FormattedTime;

	constructor(asString: FormattedTime) {
		this.asString = asString;
		const [hours, minutes] = asString.split(':').map(Number);
		this.asSeconds = hours * 60 * 60 + minutes * 60;
	}

	inRange(start: DayTime, end: DayTime): boolean {
		return this.asSeconds >= start.asSeconds && this.asSeconds <= end.asSeconds;
	}

	static getCurrentTime(): DayTime {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		return new DayTime(`${hours}:${minutes}`);
	}
}

const classTimes: DayTime[][] = [
	[new DayTime('08:10'), new DayTime('08:55')],
	[new DayTime('09:10'), new DayTime('09:55')],
	[new DayTime('10:00'), new DayTime('10:45')],
	[new DayTime('10:50'), new DayTime('11:35')],
	[new DayTime('11:55'), new DayTime('12:40')],
	[new DayTime('13:00'), new DayTime('13:40')],
	[new DayTime('13:45'), new DayTime('14:25')],
];

export default classTimes;