var options = {
    thumbnailData: [
        {
            title: 'See Tutorials',
            number: 32,
            header: 'Learn React',
            description: 'React is a fantastic new language to do cool stuff which we can now! Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
            imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
        }, {
            title: 'Electron Tutorials',
            number: 52,
            header: 'Learn Electron',
            description: 'We would add deprecation warnings in X.Y releases. We would also add replacement APIs at the same time. X+1.0 would have the deprecated APIs removed. We could also add completely new APIs in minor versions',
            imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
        },
    ]
};

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

// when we ask react to render, we tell it where to render
ReactDOM.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, 
            React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps) {
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        })

        return React.createElement("div", null, 
            list
        )
    }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
            React.createElement("div", {className: "thumbnail"}, 
                React.createElement("img", {src: this.props.imageUrl}), 
                React.createElement("div", {className: "caption"}, 
                    React.createElement("h3", null, this.props.header), 
                    React.createElement("p", null, this.props.description), 
                    React.createElement("p", null, 
                        React.createElement(Badge, {title: this.props.title, number: this.props.number})
                    )
                )
            )
        )
    }
});
