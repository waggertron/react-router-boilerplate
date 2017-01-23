/*
  App
*/
import React from 'react';
// import Catalyst from 'react-catalyst';
// import reactMixin from 'react-mixin';
// import autobind from 'autobind-decorator';
import Header from './Header.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // base.syncState(this.props.params.pathId + '/something', {

    // });

    // var localStorageRef = localStorage.getItem('order-' + this.props.params.pathId);

    // if (localStorageRef) {
    //   // update our component state to reflect what is in localStorage
    //   this.setState({
    //     order: JSON.parse(localStorageRef)
    //   });
    // }

  }

  componentWillUpdate(nextProps, nextState) {
    // localStorage.setItem('order-' + this.props.params.pathId, JSON.stringify(nextState.order));
  }




  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header title="Your title here" className="" />
          <ul className="" />
        </div>
      </div>
    );
  }
}

// reactMixin.onClass(App, Catalyst.LinkedStateMixin);

export default App;
