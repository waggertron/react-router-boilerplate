import React from 'react';

const Echo = ({ pathId }) => {
  return (
    <div>
      <h1>{pathId}</h1>
    </div>
  );
};
Echo.propTypes = {
  pathId: React.PropTypes.string.isRequired,
};
export default Echo;
