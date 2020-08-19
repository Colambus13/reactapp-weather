import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Search as SearchIcon } from '@material-ui/icons';
import { addToFoundWeatherHistory, getFoundWeatherHistory } from '../../utils/foundWeatherHistory';
import './WeatherSearch.css';

type PropsType = {
    searchWeather: (value: string) => void
};

export const WeatherSearchForm: React.FC<PropsType> = React.memo((props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        props.searchWeather(searchValue);
        addToFoundWeatherHistory(searchValue);
    }

    const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.currentTarget.value);
    }

    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Find your city weather
            </Typography>

            <form onSubmit={handleSubmit}>
                <div className='weather-search-fields'>
                    <Autocomplete 
                        freeSolo
                        options={getFoundWeatherHistory()}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                margin="normal"
                                required
                                label="City name..."
                                name="city_name"
                                onChange={handleCityNameChange}
                                autoFocus
                                className="weather-search-input"
                            />
                        )}
                    />
                    <Box className="weather-search-btn-wrapper" >
                        <Button type="submit" variant="contained" color="primary">
                            <SearchIcon />
                        </Button>
                    </Box>
                </div>
            </form>
        </div>
    );
});