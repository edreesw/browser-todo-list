import "./styles/style.css"; 
import header from "./modules/header.js"; 
import sidebar from "./modules/sidebar.js"; 
import footer from "./modules/footer.js"; 

//TODO: 
//track all todoProject objects here in an array (actually might make more sense to put them in a map, with the key being the group name and the value being the group object. this way you can check to see if a given key exists when naming a new group, and quickly determine if the name is a duplicate/available.
//create a master renderer function (or class in a module file) to render the page out (or just a renderer for the to do section)
const todoGroups = new Map(); 
const mainDiv = document.getElementById("main-content"); 

function initialRender() {
    const headerElement = header(); 
    const sidebarElement = sidebar(todoGroups); 
    const footerElement = footer(); 
    const todosElement = document.createElement("main"); 
    todosElement.id = "todos-main"; 

    mainDiv.appendChild(headerElement); 
    mainDiv.appendChild(sidebarElement); 
    mainDiv.appendChild(footerElement); 
    mainDiv.appendChild(todosElement); 
}


initialRender(); 