import React from 'react';

import Header from '../Header/Header';
import SuggestedQuoteCounter from '../SuggestedQuoteCounter/SuggestedQuoteCounter';

import styles from './App.module.css';

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Header />
                <SuggestedQuoteCounter count={1} />
            </div>
        );
    }
}
