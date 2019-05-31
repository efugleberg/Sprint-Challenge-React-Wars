# Answers

1.  What is React JS and what problems does it try and solve?

    React JS is a library (or framework) who's main purpose is to build powerful applications.  We apps are huge complex, pieces of software that millions of users interact with simultaneously --> React solves the problem of providing a smooth experience for users of these apps, as well as those developing the apps.  Essentially, React is a library that uses a virtual DOM that allows developers to build components, render those components to the virtual DOM, and provide the user with a nice UI experience.

1.  What does it mean to _think_ in react?

    Thinking in React means breaking your app into components, sorting those components into a hierarchy, and then building those components so that data flows through the hierarchy to render the UI of your app.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    *Typically, Functional components are basic functions that return some sort of JSX that is rendered to the Browser.  A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.  Functional components *DO NOT* have their own state --> they just receive props and render them to the page.
    *Class components require you to extend from React.Component and create a render function which returns a React element.  Class components can have state, variables, methods, etc. If a component needs state, it must be a Class Component.  Classes require the developer to write more code than a functional component, but Class Components can handle any data that might change and is used for dynamic sources of data.


1.  Describe state.

    State is a property of the component class that is used to chagne the component, which renders changes to the UI.  It is the data that our components have access to.

1.  Describe props.

    Props allow you to pass data from a parent to a child via the props parameter.  Props are immutable data received from components.  They are the data we pass around that our users will interact with. Simply, props are received from components and are used to display data to the user.
