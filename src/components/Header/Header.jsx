import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './Header.module.css';

export default class Header extends React.Component {
    render() {
        const content = (
            <h1 className={styles.heading}>
                <a href='#'>
                    <span className={styles.accent}>L</span>og<span className={styles.accent}>L</span>ist
                </a>
            </h1>
        );
        return (
            <ContentContainer content={content} additationClassList={[styles.header]} />
        );
    }
}
