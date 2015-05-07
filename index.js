'use strict';

require('babelify/polyfill'); // For Object.assign

var React = require('react');


class HelloWorld extends React.Component{
    render(){
        return (
            <div>Hello World</div>
        );
    }
}

module.exports = HelloWorld;
