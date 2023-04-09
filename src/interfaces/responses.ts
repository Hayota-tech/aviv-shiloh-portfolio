export interface IProject {
	readonly id: number;
	readonly attributes: {
		readonly name: string;
		readonly description: string;
		readonly date: string;
		readonly country: string;
		readonly city: string;
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
