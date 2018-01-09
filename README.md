V (ery) S (imple) T (o) D (o) A (pp)

- Open a terminal like (like git bash)

- Type cd ~/oca/ hit enter

- Type cd startnow-react100-vstda  hit enter

- Open a new internet browser or tab and type localhost:3000

- In the terminal type npm start and go to the browser or the tab 

- Enjoy the application 

VSTDA (Very Simple To Do App) was done in react.

In this project the dev is  going to build a Todo app using React that allows users to enter their todo items and prioritize them based on their importance.

To complete this project the dev will need to begin working with React's state mechanisms and applying the principle of composition.
State

There are two types of data that control a component: props and state.
 props are set by the parent and they are fixed throughout the lifetime of a component. 
 For data that is going to change, we have to use state.

In general, the dev should initialize state in the constructor, and then call setState when you want to change it.
 Reviewing the documentation State and Lifecycle 

Composing applications in React is about breaking up the user interface into small (hopefully) reusable components. 
These components have a parent child relationship and data (via props) are passed from the parent component to its child components.
Remember: Do Not Modify State Directly!

this.state.comment = 'Hello'; // Wrong

this.setState({comment: 'Hello'}); // Correct