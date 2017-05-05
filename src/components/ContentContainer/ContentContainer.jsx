import React from 'react';
import styles from './ContentContainer.module.css';

export default class ContentContainer extends React.Component {
    constructor(props, content, additationClassList) {
        super(props);
        this.content = props.content;
        this.additationClassList = props.additationClassList || []; 
    }

    render() {

        const addedClassList = this.additationClassList
            .map(selector => ` ${selector}`)
            .join('');

        return (
            <div className={styles.contentContainer + addedClassList}>{this.content}</div>
        );
    }
}
