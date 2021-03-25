import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Element from "../Element/Element";
import styles from './App.module.css'

class App extends React.Component{

    state = {
        elements:[]
    }

    getValue = (e) => {

        e.preventDefault();

        let inp = document.querySelector('.inp');

        let itemArray = this.state.elements

        let result = this.inputRef.value;

       if(result !== ''){

           itemArray.unshift(result)

           this.setState({

               items:itemArray

           })
       }
        inp.value = '';
    }

    itemDelete(key){

        let group = this.state.elements.concat()

        console.log(group);

        group.splice(key,1)

        this.setState({

            elements: group

        })
    }

    render(){
        return(
            <div className={styles.app}>
                <form onSubmit={this.getValue.bind(this)}>
                    <label>
                        <input className='inp' ref = {(inputRef) => this.inputRef = inputRef} type="text"/>
                    </label>
                    <label>
                        <input type="submit"/>
                    </label>
                </form>
                <Element onDelete = {this.itemDelete.bind(this)}
                    name = {this.state.elements}
                />
            </div>
        )
    }
}


export default App