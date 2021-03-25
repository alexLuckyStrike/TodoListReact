import React from 'react';
import {render} from 'react-dom';
import Item from "../Item/Item";
import styles from './Element.module.css'

class Element extends React.Component{
    constructor(props) {
        super(props);
    }

    // itemDelete(key){
    //     key.target.textContent = ''
    // }

    render(){
    return(
        <ul onClick={this.props.onDelete} className={styles.element}>
            <Item
                entries = {this.props.name}>
            </Item>

        </ul>

    )
    }
}

export default Element;