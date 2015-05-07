var React = require('react');
var Hello = require('../');

var App = React.createClass({

  render: function() {
    return (
      <Hello></Hello>
    );
  }

});

React.render(<App/>, document.getElementById('app'));
