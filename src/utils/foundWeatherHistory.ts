const FOUND_WEATHER_KEY = 'foundWeather';

export const getFoundWeatherHistory = (): string[] => (
	JSON.parse(localStorage.getItem(FOUND_WEATHER_KEY) as string) || []
);

export const addToFoundWeatherHistory = (value: string): void => {
	let foundWeather = getFoundWeatherHistory();
	foundWeather.unshift(value);
	localStorage.setItem(FOUND_WEATHER_KEY, JSON.stringify(foundWeather.slice(0, 20)));
};