export default function sidebar(todoGroupKeys) {
    const sidebar = document.createElement("div"); 
    sidebar.id = "sidebar"; 


    const groupButtonsCont = document.createElement("div"); 
    groupButtonsCont.classList.add("group-buttons-container"); 

    for(groupName of todoGroupKeys) {
        groupButtonsCont.appendChild(createGroupButtonRow(groupName));
    }


    const allButtonCont = document.createElement("div"); 
    allButtonCont.classList.add("all-button-container"); 
    const allButton = document.createElement("button"); 
    allButton.classList.add("all-button"); 
    allButton.textContent = "All"; 
    allButtonCont.appendChild(allButton); 
    
    const addGroupButtonCont = document.createElement("div"); 
    addGroupButtonCont.classList.add("add-group-container"); 
    const addButton = document.createElement("button"); 
    addButton.classList.add("add-group-button"); 
    addButton.textContent = "Add Group"; 
    addGroupButtonCont.appendChild(addButton); 
    
    
    sidebar.appendChild(allButtonCont); 
    sidebar.appendChild(groupButtonsCont); 
    sidebar.appendChild(addGroupButtonCont); 

    return sidebar; 
}

function createGroupButtonRow(groupName) {
    const groupRow = document.createElement("div"); 
    groupRow.classList.add("group-row"); 

    const groupButton = document.createElement("button"); 
    groupButton.classList.add("group-button"); 
    groupButton.textContent = groupName; 

    groupRow.appendChild(groupButton); 

    return groupRow; 
}