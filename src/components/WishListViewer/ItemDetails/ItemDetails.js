import React, {Component} from 'react';
import classes from './ItemDetails.css'
import chair from '../../../assets/images/ChairTest.jpg'

export class ItemDetails extends Component {

    render () {
        let details = <p>Please selected an Item!</p>;

        if (this.props.selectedItem.name !== '')
        {
            details = (
            <div>
                <h2>{this.props.selectedItem.name}</h2>
                <img src={chair} alt="Cannot find image"/>
                <p><strong>${this.props.selectedItem.price}</strong></p>
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