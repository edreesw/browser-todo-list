export default function header() {
    const header = document.createElement("header"); 
    const headerText = document.createElement("h1"); 
    headerText.textContent = "Todo List"; 
    header.id = "header"; 

    header.appendChild(headerText); 
    return header; 
}