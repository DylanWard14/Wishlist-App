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
            URL: 'https://www.kmart.com.au/product/occasional-chair/1171316',
            image: 'https://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/9/42428459-1-f.jpg'
        },
        {
            name: 'Table',
            price: '100.00',
            URL: 'https://www.kmart.com.au/product/black-stone-side-table/2313308',
            image: 'https://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/6/42698586-1-f.jpg'
        },
        {
            name: 'Mouse',
            price: '99.00',
            URL: 'https://www.jbhifi.com.au/computers-tablets/accessories/logitech/logitech-mx-master-2s-wireless-mouse-graphite/453489/',
            image: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/219749-L-LO.jpg'
        },
      ],
        selectedItem: {
          name: '',
          price: '',
          URL: '',
          image: ''
        },
        errorAddingItem: false
      }
    
      OnClickItemHandler = (name, price, image, URL) => {
        let updatedWishlist = this.state.wishlist.map((wish) => {
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
          <Route path="/" render={() => <WishList wishlist={this.state.wishlist} clicked={this.OnClickItemHandler}/> } />
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

export default withRouter(WishListViewer);