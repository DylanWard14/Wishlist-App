import React, {Component} from 'react';
import classes from './addItem.css'
import Input from '../../UI/Forms/Input/Input';
import Button from '../../UI/Forms/Button/Button';

class addItem extends Component {
    state = {
        newItem: {
            name: '',
            price: '',
            URL: '',
            image: ''
        }
    }

    ItemNameChangeHandler = (e) => {
        const name = e.target.value;
        this.setState((prevState, props) => ({
            newItem: {
                ...prevState.newItem,
                name: name
            }
          }))
    }

    ItemPriceChangeHandler = (e) => {
        const price = e.target.value;
        this.setState((prevState, props) => ({
            newItem: {
                ...prevState.newItem,
                price: price
            }
          }))
    }

    render () {
        let error = (
            <div className={classes.Error}>
                <p>Please ensure all fields are completed</p>
            </div>
        )
        if (!this.props.error) {
            error = null;
        }
        return (
            <div className={classes.AddItem}>
                <h2>Add Item</h2>
                <form>
                    <Input label="Item Name: " inputType="text" name="ItemName" placeholder="Item Name..." changeHandler={this.ItemNameChangeHandler} required={true}/>
                    <Input label="Item Price: " inputType="number" name="ItemPrice" placeholder="Item Price..." changeHandler={this.ItemPriceChangeHandler} required={true}/>
                    <Input label="Item URL: " inputType="text" name="ItemURL" placeholder="Item URL..."/>
                    <div className={classes.FormControl}>
                        <Button label="Add" type="Success" clicked={(e) => this.props.add(e, this.state.newItem.name, this.state.newItem.price)}/>
                        <Button label="Cancel" type="Cancel" clicked={this.props.cancel}/>
                    </div>
                    {error}
                    
                </form>
            </div>
        )
    }
}

export default addItem;