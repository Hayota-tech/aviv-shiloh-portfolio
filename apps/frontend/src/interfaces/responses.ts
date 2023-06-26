export interface IProject {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string | null;
		readonly date: string;
		readonly country: string;
		readonly city: string;
		readonly order: number;
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly url: string;
					readonly caption: string;
				};
			}[];
		};
	};
}

export interface IStillProject {
	readonly id: number;
	readonly attributes: {
		readonly categories: {
			readonly data: IStillCategory[];
		};
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly url: string;
					readonly caption: string;
				};
			}[];
		};
	};
}

export interface IStillCategory {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
	};
}

export interface IVideoProject {
	readonly id: number;
	readonly attributes: {
		readonly categories: {
			readonly data: IVideoCategory[];
		};
		readonly media: {
			readonly data: {
				readonly id: number;
				readonly attributes: {
					readonly url: string;
					readonly caption: string;
				};
			}[];
		};
	};
}

export interface IVideoCategory {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
	};
}

export interface IVAboutText {
	readonly id: number;
	readonly attributes: {
		readonly title: string;
		readonly description: string;
	};
}

export interface IVExibhitions {
	readonly id: number;
	readonly attributes: {
		readonly title: string;
		readonly location: string;
		readonly link: string;
		readonly startDate: Date;
		readonly endDate: Date;
	};
}
