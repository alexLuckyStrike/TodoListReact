import React from 'react';
import styles from  './Item.module.css'


function Item(props){
    let group = props.entries;
    return(
    group.map(function(item,index){
       return <li key ={index} className={styles.item}>{item}</li>
    })
    )
}

export default Item;