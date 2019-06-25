import React, {Component} from 'react';
import WishList from './Wishlist/Wishlist';
import ItemDetails from './ItemDetails/ItemDetails';
import classes from './WishListViewer.css';

class WishListViewer extends Component {
    state = {
        selectedItem: {
          name: '',
          price: '',
          image: ''
        }
      }
    
      OnClickItemHandler = (name, price, image) => {
        console.log(image);
        this.setState({
          selectedItem: {
            name,
            price,
            image
          }
        })
      }
    render () {
        return (
            <div className={classes.Content}>
                <WishList clicked={this.OnClickItemHandler}/>
                <ItemDetails selectedItem={this.state.selectedItem}/>
            </div>
        );
    }
}

export default WishListViewer;