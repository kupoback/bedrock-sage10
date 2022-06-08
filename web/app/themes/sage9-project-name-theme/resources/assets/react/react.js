import ReactDOM from "react-dom";

// Example Component Registration
import HelloWorld from "./Components/HelloWorld"
const helloWorldComponent = document.getElementById('react');
if (helloWorldComponent) {
    ReactDOM.render(
        <HelloWorld />,
        helloWorldComponent
    );
}
