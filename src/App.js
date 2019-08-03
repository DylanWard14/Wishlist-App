import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
import WishListViewer from './components/WishListViewer/WishListViewer';
import {connect} from "react-redux";

import * as mathActions from './store/actions/math';
import * as userActions from './store/actions/user';

class App extends Component {
  state = {
    name: "john"
  }

  HandleOnChange(e) {
    console.log(e.target.value);
    this.setState({name: e.target.value})
  }
  render () {
    return (
      <div>
          <Layout>
            <WishListViewer/>
            <p>Username: {this.props.user.name}</p>
            <button onClick={() => this.props.updateName(this.state.name)}>Change name</button>
            <input type="text" onChange={(e) => this.HandleOnChange(e)} />

            <p>number: {this.props.math.result}</p>
            <button onClick={this.props.add}>ADD</button>
          </Layout>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => {dispatch(userActions.updateName(name))},
    add: () => {dispatch(mathActions.add(1))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
