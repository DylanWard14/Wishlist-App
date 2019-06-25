import React from 'react';
import classes from './ItemDetails.css'
import chair from '../../../assets/images/ChairTest.jpg'

const itemDetails = (props) => {
    let details = <p>Please selected an Item!</p>;

    if (props.selectedItem.name !== '')
    {
        details = (
        <div>
            <h2>{props.selectedItem.name}</h2>
            <img src={chair} alt="Cannot find image"/>
            <p><strong>${props.selectedItem.price}</strong></p>
        </div>
        )
    }
    return (
        <div className={classes.ItemDetails}>
            {details}
        </div>
    );
}

export default itemDetails;