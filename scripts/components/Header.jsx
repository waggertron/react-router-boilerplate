/*
  Header
  <Header/>
*/

import React from 'react';

const Header = ({ title, className }) => (
  <header className={className}>
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  className: React.propTypes.string,
};


export default Header;
