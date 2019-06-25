import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import WishList from './components/Wishlist/Wishlist';
import ItemDetails from './components/ItemDetails/ItemDetails';

class App extends Component {
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
      <div>
          <Layout>
            <WishList clicked={this.OnClickItemHandler}/>
            <ItemDetails selectedItem={this.state.selectedItem}/>
          </Layout>
      </div>
    );
  }

}

export default App;
