class ActionPage {
    static newTodo = '.new-todo'
    static todoItem = '.todo-list li';
    static todoItemByIndex = '.todo-list li:nth-child'
    static getNewTodo() {
        return cy.get(this.newTodo)
    }
    static getTodoItem() {
        return cy.get(this.todoItem)
    }
    static getTodoItemByIndex(todoIndex, customSelector = '') {
        return cy.get(`${this.todoItemByIndex}(${todoIndex +1}) ${customSelector}`)
    }
    static loadHomePage() {
        cy.visit('http://todomvc.com/examples/react/')
    }
    static viewTitle() {
        cy.get('.header').contains("todos")
    }
    static addTodo(todoText) {
        this.getNewTodo().type(`${todoText}{enter}`)
    }
    static validateAddTodo() {
        cy.get(".main").find('.todo-list').then(todo_list => {
            const listCount = Cypress.$(todo_list).length;
            expect(todo_list).to.have.length(listCount)
        })
        this.getTodoItemByIndex(0).should('have.text', "Clean room")    
    }
    static clickRadioButton(todoIndex) {
        this.getTodoItemByIndex(todoIndex,'.toggle').click()
    }
    static validateTodoCompleted(todoIndex, shouldBeCompleted) {
        const label = this.getTodoItemByIndex(todoIndex,'label')
        label.should(`${shouldBeCompleted ? '':'not.'}have.css`,'text-decoration', 'line-through solid rgb(217, 217, 217)')
    }
    static editTodoItem(todoIndex) {
        const label = this.getTodoItemByIndex(todoIndex,'label').dblclick().get('.edit')
        label.clear();
        label.type("do homework{enter}")
    }
    static validateEditTodoItem() {
        this.getTodoItemByIndex(0).should('have.text', "do homework")
    }
    static deleteTodoItem(todoIndex) {
        this.getTodoItemByIndex(todoIndex,'.destroy').click()
    }
    static validateDeleteTodoItem() {
        this.getTodoItemByIndex(0).should('not.exist')
    }
    static checkTodoItemCompletedExist() {
        cy.get('.todo-list').find('li.completed').should('be.exist')
    }
    static clearTodoItemCompleted() {
        cy.get('.clear-completed').click()
    }
    static validateClearTodoItemCompleted() {
        this.getTodoItemByIndex(0).should('not.exist')
    }
}

export default ActionPage;