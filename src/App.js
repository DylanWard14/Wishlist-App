import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
import WishListViewer from './components/WishListViewer/WishListViewer';
import {connect} from "react-redux";

import * as mathActions from './store/actions/math';
import * as userActions from './store/actions/user';

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
