import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './SuggestedQuoteCounter.module.css';

export default class SuggestedQuoteCounter extends React.Component {
    constructor(props, count) {
        super(props);
        this.count = props.count;
    }

    render() {
        const content = (
            <span className={styles.count}>Цитат на рассмотрении: {this.count}</span>
        );
        return (
            <ContentContainer content={content} additationClassList={[styles.container]} />
        );
    }
}