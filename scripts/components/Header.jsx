/*
  Header
  <Header/>
*/

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="">
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
