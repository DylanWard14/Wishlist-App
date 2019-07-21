import React, {Component} from 'react';
import classes from './ItemDetails.css'
import Button from '../../UI/Forms/Button/Button';

export class ItemDetails extends Component {

    render () {
        let details = <p>Please selected an Item!</p>;
        let URL = this.props.selectedItem.URL;
        URL = URL.split('.')[1];

        if (this.props.selectedItem.name !== '')
        {
            details = (
            <div>
                <h2>{this.props.selectedItem.name}</h2>
                <img src={this.props.selectedItem.image} alt=""/>
                <p>Price: <strong>${this.props.selectedItem.price}</strong></p>
                <p>Location: <a href={this.props.selectedItem.URL}>{URL}</a></p>
                <Button label="Delete" type="Cancel" clicked={this.props.delete}/>
                <Button label="Purchased" type="Success"/>
            </div>
            )
        }
        return (
            <div className={classes.ItemDetails}>
                {details}
            </div>
        );
    }
}

export default ItemDetails;