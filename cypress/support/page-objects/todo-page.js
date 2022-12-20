class TodoPage {
    static newTodo = '.new-todo'
    static todoItem = '.todo-list li';
    static todoItemByIndex = '.todo-list li:nth-child'
    static navigate() {
        cy.visit('http://todomvc.com/examples/vanillajs/')
    }
    static getNewTodo() {
        return cy.get(this.newTodo)
    }
    static getTodoItem() {
        return cy.get(this.todoItem)
    }
    static getTodoItemByIndex(todoIndex, customSelector = '') {
        return cy.get(`${this.todoItemByIndex}(${todoIndex +1}) ${customSelector}`)
    }
    static addToDo(todoText) {
        this.getNewTodo().type(todoText+"{enter}")
    }
    
    static quantityTodoItemDefault() {
        this.getTodoItem().should('have.length', 3)
    }
    static validateTodoText(todoIndex, expectedText) {
        this.getTodoItemByIndex(todoIndex,'label').should('have.text', expectedText)
    }
    static validateToggleState(todoIndex, shouldBeToggled) {
        const label = this.getTodoItemByIndex(todoIndex,'label')
        label.should(`${shouldBeToggled ? '':'not.'}be.checked`)
    }
    static toggleTodo(todoIndex) {
        this.getTodoItemByIndex(todoIndex, '.toggle').click()
    }
    static validateTodoCompletedState(todoIndex, shouldBeCompleted) {
        const label = this.getTodoItemByIndex(todoIndex,'label')
        label.should(`${shouldBeCompleted ? '':'not.'}have.css`,'text-decoration-line', 'line-through')
    }
    static editOneTodo(todoIndex) {
        const label = this.getTodoItemByIndex(todoIndex,'label').dblclick().get('.edit')
        label.clear()
        label.type("do homework{enter}")
    }
    static deleteOneTodo(todoIndex) {
        this.getTodoItemByIndex(todoIndex,'.destroy').click()

    }
    static countActiveElement() {
        let count = 0
        this.getTodoItem()
        .each(($li) => {
            cy.get($li[0]).should("not.have.class","completed").then(() => {
                count+=1
            })
        }).then(() => {
            cy.get('.todo-count strong').contains(count)
        })
       
    }
    static nameofFiltering(name) {
        return cy.contains(name)
    }
    static typeOfFiltering(name, length) {
        const label = this.nameofFiltering(name).click()
        label.get('.todo-list li').should('have.length',length)
    }

}

export default TodoPage;