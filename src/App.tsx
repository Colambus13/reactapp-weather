import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import store from "./redux/redux-store";
import WeatherContainer from './components/Weather/WeatherContainer';
import Header from "./components/Header/Header";
import { Container, ThemeProvider, createMuiTheme } from "@material-ui/core";
import './assets/styles/global.scss';

const App: React.FC = () => {

    const visuallyImpairedTheme = createMuiTheme({
        typography: {
            //fontSize: 14,
            // 14, 20
        }
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={visuallyImpairedTheme}>
                    <Header />
                    <Container className="app-content" maxWidth="md">
                        <Switch>
                            <Route path='/' component={WeatherContainer} exact />
                        </Switch>
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;