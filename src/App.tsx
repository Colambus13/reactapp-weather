import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import store from "./redux/redux-store";
import WeatherContainer from './components/Weather/WeatherContainer';
import Header from "./components/Header/Header";
import { Container } from "@material-ui/core";
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Container className="app-content" maxWidth="md">
                    <Switch>
                        <Route path='/' component={WeatherContainer} exact />
                    </Switch>
                </Container>
            </BrowserRouter>
        </Provider>
    );
};

export default App;