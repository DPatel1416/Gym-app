// Import the necessary libraries from React for creating and rendering the app
import React from "react";
import ReactDOM from "react-dom";
// Import the BrowserRouter component from react-router-dom for enabling routing
import { BrowserRouter } from "react-router-dom";
// Import the main App component from the App.js file
import App from "./App";

// Create a root element using ReactDOM.createRoot and target the element with the id of "root" in the HTML document
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in the BrowserRouter component into the root element, effectively starting the React application
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
