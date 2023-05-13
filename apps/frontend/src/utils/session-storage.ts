export const addToSessionStorage = (key: string, value: any) => {
	try {
		if (typeof value !== 'string') {
			value = JSON.stringify(value);
		}
		sessionStorage.setItem(key, value);
	} catch (error) {
		console.error(`Error adding item to sessionStorage: ${error}`);
	}
};

export const getFromSessionStorage = (key: string): any => {
	try {
		const value = sessionStorage.getItem(key);
		try {
			return JSON.parse(value!);
		} catch (error) {
			return value;
		}
	} catch (error) {
		console.error(`Error getting item from sessionStorage: ${error}`);
		return null;
	}
};
