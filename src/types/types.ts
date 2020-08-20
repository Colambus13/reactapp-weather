export type WeatherType = {
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>,
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    name: string;
};

export type WeatherErrorType = {
    cod: string,
    message: string
};

export const isWeatherType = (obj: any): obj is WeatherType => 'weather' in obj;