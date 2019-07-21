import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import WishList from './Wishlist/Wishlist';
import ItemDetails from './ItemDetails/ItemDetails';
import classes from './WishListViewer.css';
import AddItem from './addItem/addItem';

export class WishListViewer extends Component {
    state = {
      wishlist: [
        {
            name: 'Chair',
            price: '10.00',
            image: ''
        },
        {
            name: 'Table',
            price: '100.00',
            image: ''
        },
        {
            name: 'mouse',
            price: '99.00',
            image: ''
        },
      ],
        selectedItem: {
          name: '',
          price: '',
          image: ''
        },
        errorAddingItem: false
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
        this.props.history.push('/item')
      }

      OnAddItemHandler = (e, name, price) => {
        e.preventDefault();
        if(name && price) {
          this.setState((prevState, props) => ({
            wishlist: [...prevState.wishlist, {name, price, image: ''}],
            errorAddingItem: false
          }))
        }
        else {
          this.setState({
            errorAddingItem: true
          })
        }
      }

      OnCancelAddItemHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/');
      }

    render () {
      const routes = (
        <div className={classes.Content}>
          <Route path="/" render={() => <WishList wishlist={this.state.wishlist} clicked={this.OnClickItemHandler}/> } />
          <Switch>
            <Route path="/" exact render={() => <ItemDetails selectedItem={this.state.selectedItem}/>} />
            <Route path="/item" render={() => <ItemDetails selectedItem={this.state.selectedItem}/>} />
            <Route path="/addItem" render={() => <AddItem add={this.OnAddItemHandler} cancel={this.OnCancelAddItemHandler} error={this.state.errorAddingItem}/>} />
          </Switch>
        </div>
      )

        return routes;
    }
}

export default withRouter(WishListViewer);