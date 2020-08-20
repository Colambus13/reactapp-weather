import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Search as SearchIcon } from '@material-ui/icons';
import { addToFoundWeatherHistory, getFoundWeatherHistory } from '../../utils/foundWeatherHistory';
import './WeatherSearch.css';

type PropsType = {
    searchWeather: (value: string) => void
}

const SearchForm: React.FC<PropsType> = ({ searchWeather }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        searchWeather(searchValue);
        addToFoundWeatherHistory(searchValue);
    }

    const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.currentTarget.value);
    }

    return (
        <>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Find your city weather
            </Typography>

            <form onSubmit={handleSubmit}>
                <div className='weather-search-fields'>
                    <Autocomplete
                        freeSolo
                        options={getFoundWeatherHistory()}
                        className="weather-search-input"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                required
                                autoFocus
                                margin="normal"
                                label="City name..."
                                name="city_name"
                                onChange={handleCityNameChange}
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
        </>
    );
};

export default SearchForm;