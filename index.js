'use strict';

//require('babelify/polyfill'); // For Object.assign

var React = require('react');


var HelloWorld = React.createClass({
    render : function() {
        return (
            <div>Hello World</div>
        );
    }
});

module.exports = HelloWorld;
