/**
 * Created by Oakley Hall on 6/17/16.
 */
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Weaponized</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
});

export default Main;