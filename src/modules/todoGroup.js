export default class TodoGroup {
    //TODO: instead of an array, use an map so you can use key/value pairs with the task title/object for quick retrieval and access. can use the key/title as a dom element attribute and use that to retrieve the object. 
    todoList = []; 
    groupName; 

    constructor(name) {
        this.groupName = name; 
    }

    addTodoItem(todoItem) {
        todoList.push(todoItem); 
    }

    getTodoList() {
        return this.todoList; 
    }

    getGroupName() {
        return this.groupName; 
    }
}