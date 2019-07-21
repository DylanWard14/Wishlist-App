import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
import WishListViewer from './components/WishListViewer/WishListViewer';
import AddItem from './components/WishListViewer/addItem/addItem';

class App extends Component {
  render () {

    return (
      <div>
          <Layout>
            <WishListViewer/>
          </Layout>
      </div>
    );
  }

}

export default withRouter(App);
