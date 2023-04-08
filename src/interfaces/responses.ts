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
					readonly caption: string;
				};
			}[];
		};
	};
}
