var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a desert', // What should show up on the button
  items: ['Apple Pie', 'Peach Cobbler', 'Chocolate Lava Cake',]
};

// ask react to render this class
var element = React.createElement(Dropdown, options);

// when we ask react to render, we tell it where to render
ReactDOM.render(element, document.querySelector('.container'));
