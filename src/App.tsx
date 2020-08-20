import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { getVisuallyImpaired } from "./redux/app-selectors";
import WeatherContainer from './components/Weather/WeatherContainer';
import Header from "./components/Header/Header";

import './assets/styles/global.scss';

const App: React.FC = () => {
    const isVisuallyImpaired: boolean = useSelector(getVisuallyImpaired);
    const theme = createMuiTheme({
        typography: {
            fontSize: isVisuallyImpaired ? 20 : 14,
        }
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header />
                <Container className="app-content" maxWidth="md">
                    <Switch>
                        <Route path='/' component={WeatherContainer} exact />
                    </Switch>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;