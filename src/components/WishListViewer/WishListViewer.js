import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import WishList from './Wishlist/Wishlist';
import ItemDetails from './ItemDetails/ItemDetails';
import classes from './WishListViewer.css';
import AddItem from './addItem/addItem';

export class WishListViewer extends Component {
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
        this.props.history.push('/item')
      }

    render () {
      const routes = (
        <div className={classes.Content}>
          <Route path="/" render={() => <WishList clicked={this.OnClickItemHandler}/> } />
          <Switch>
            <Route path="/" exact render={() => <ItemDetails selectedItem={this.state.selectedItem}/>} />
            <Route path="/item" render={() => <ItemDetails selectedItem={this.state.selectedItem}/>} />
            <Route path="/addItem" render={() => <AddItem/>} />
          </Switch>
        </div>
      )

        return (
            <div>
              {routes}
                {/* <WishList clicked={this.OnClickItemHandler}/>
                <ItemDetails selectedItem={this.state.selectedItem}/> */}
            </div>
        );
    }
}

export default withRouter(WishListViewer);