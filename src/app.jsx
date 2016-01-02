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
