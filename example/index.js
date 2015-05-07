var React = require('react');
var Hello = require('../');

class App extends React.Component{
    render(){
        return (
            <Hello></Hello>
        );
    }
}
React.render(<App/>, document.getElementById('app'));
