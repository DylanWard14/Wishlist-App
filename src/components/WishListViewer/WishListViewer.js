import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import WishList from './Wishlist/Wishlist';
import ItemDetails from './ItemDetails/ItemDetails';
import classes from './WishListViewer.css';
import AddItem from './addItem/addItem';
import axios from 'axios';

import {connect} from 'react-redux';
import * as wishlistActions from '../../store/actions/wishListItem';

export class WishListViewer extends Component {
    state = {
      wishlist: [
      ],
        selectedItem: {
          name: '',
          price: '',
          URL: '',
          image: ''
        },
        errorAddingItem: false
      }

      componentDidMount() {
        this.props.onInitWishlist();
      }
    
      OnClickItemHandler = (name, price, image, URL) => {
        let updatedWishlist = this.props.wishlist.map((wish) => {
          if (wish.name === name)
          {
            return {...wish, selected: true}
          }
          else
          {
            return {...wish, selected: false}
          }
        })

        this.setState({
          wishlist: [...updatedWishlist],
          selectedItem: {
            name,
            price,
            image, 
            URL
          }
        })

        this.props.history.push('/item')
      }

      OnAddItemHandler = (e, name, price, URL, image) => {
        e.preventDefault();
        if(name && price && URL && image) {
          // Upload information to the server.
          axios.post('https://wishify-bd917.firebaseio.com/Wishes.json', {
            name, price,URL, image
          })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })

          this.setState((prevState, props) => ({
            wishlist: [...prevState.wishlist, {name, price, URL, image}],
            errorAddingItem: false
          }))
        }
        else {
          console.log(name,price,URL,image)
          this.setState({
            errorAddingItem: true
          })
        }
      }

      OnCancelAddItemHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/');
      }

      OnDeleteItemHandler = (e) => {
        e.preventDefault();
        console.log('deleting');
        let updatedWishlist = this.state.wishlist.filter((item) => {
          // Currently filtering by name as when database is set up each item will have a unique id value
          return item.name !== this.state.selectedItem.name
        })
        this.setState((prevState, props) => ({
          wishlist: [...updatedWishlist]
        }))
      }

      OnPurchaseHandler = (e) => {
        e.preventDefault();
        let item = this.state.wishlist.findIndex(x => x.name === this.state.selectedItem.name)
        let UpdatedWishlist = [...this.state.wishlist];
        UpdatedWishlist[item].purchased = true;
        console.log(item);

        this.setState((prevState, props) => ({
          wishlist: [...UpdatedWishlist]
        }))
      }

    render () {
      const routes = (
        <div className={classes.Content}>
          <Route path="/" render={() => <WishList wishlist={this.props.wishlist} clicked={(item) => this.props.onSelectItem(item)}/> } />
          <Switch>
            <Route path="/" exact render={() => <ItemDetails selectedItem={this.state.selectedItem} delete={this.OnDeleteItemHandle} purchase={this.OnPurchaseHandler}/>} />
            <Route path="/item" render={() => <ItemDetails selectedItem={this.state.selectedItem} delete={this.OnDeleteItemHandler} purchase={this.OnPurchaseHandler}/>} />
            <Route path="/addItem" render={() => <AddItem add={this.OnAddItemHandler} cancel={this.OnCancelAddItemHandler} error={this.state.errorAddingItem}/>} />
          </Switch>
        </div>
      )

        return routes;
    }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishListItemReducer.wishlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitWishlist: () => dispatch(wishlistActions.initWishlist())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WishListViewer));