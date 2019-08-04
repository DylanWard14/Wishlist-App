import React, {Component} from 'react';
import classes from './ItemDetails.css'
import Button from '../../UI/Forms/Button/Button';
import {connect} from 'react-redux';

export class ItemDetails extends Component {

    render () {
        let details = <p>Please selected an Item!</p>;

        if (this.props.selectedItem != null)
        {
            let URL = this.props.selectedItem.URL;
            URL = URL.split('.')[1];
            details = (
            <div>
                <h2>{this.props.selectedItem.name}</h2>
                <img src={this.props.selectedItem.image} alt=""/>
                <p>Price: <strong>${this.props.selectedItem.price}</strong></p>
                <p>Location: <a href={this.props.selectedItem.URL}>{URL}</a></p>
                <Button label="Delete" type="Cancel" clicked={this.props.delete}/>
                <Button label="Purchased" type="Success" clicked={this.props.purchase}/>
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

const mapStateToProps = (state) => {
    return {
        selectedItem: state.wishListItemReducer.selectedItem
    }
}

export default connect(mapStateToProps)(ItemDetails);