import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { Switch, Route } from 'react-router-dom';
import WeatherSearchContainer from './components/WeatherSearch/WeatherSearchContainer';
import Header from "./components/Header/Header";
import { Container } from "@material-ui/core";
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Container className="app-wrapper-content" maxWidth="md">
                        <Switch>
                            <Route path='/' component={WeatherSearchContainer} exact />
                        </Switch>
                    </Container>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;