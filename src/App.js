import React from 'react';
import Layout from './components/layout/Layout';
import WishList from './components/Wishlist/Wishlist';
import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  return (
    <div>
        <Layout>
          <WishList />
          <ItemDetails />
        </Layout>
    </div>
  );
}

export default App;
