import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage';
import HomePage from '../../pages/HomePage';
import PetsPage from '../../pages/PetsPage';
import PetPage from '../../pages/PetPage';
import Header from '../Header/Header';
import styles from '../../styles.module.css';

const App = () => (
    <Fragment>
        <Header />
        <div className={styles.wrapper}>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/pets/:id" component={PetPage} />
                <Route path="/pets" component={PetsPage} />
                <Route component={HomePage} />
            </Switch>
        </div>
    </Fragment>
);

export default App;
