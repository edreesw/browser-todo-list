export default class TodoItem {
    title; 
    description; 
    dueDate; 
    priority; 
    isComplete = false; 

    constructor(title, description, dueDate=null, priority=3) {
        this.title = title; 
        this.description = description; 
        this.dueDate = dueDate; 
        this.priority = priority; 
    }

    toggleCompletion() {
        this.isComplete = !this.isComplete; 
    }

    getTitle() {
        return this.title; 
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority; 
    }

}