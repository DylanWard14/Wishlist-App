import React, {Component} from 'react';
import classes from './ItemDetails.css'
import chair from '../../../assets/images/ChairTest.jpg'
import Button from '../../UI/Forms/Button/Button';

export class ItemDetails extends Component {

    render () {
        let details = <p>Please selected an Item!</p>;

        if (this.props.selectedItem.name !== '')
        {
            details = (
            <div>
                <h2>{this.props.selectedItem.name}</h2>
                <img src={chair} alt=""/>
                <p><strong>${this.props.selectedItem.price}</strong></p>
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