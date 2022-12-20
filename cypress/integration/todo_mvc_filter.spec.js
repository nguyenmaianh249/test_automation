import TodoPage from "../support/page-objects/todo-page"

describe('filtering', () => {
    beforeEach(() => {
    TodoPage.navigate()

    TodoPage.addToDo("Clean room")
    TodoPage.addToDo("Learn JS")
    TodoPage.addToDo("Use cypress")

    })
    it('should filter "Active" todos', () => {
      TodoPage.typeOfFiltering("Active",2)
    })
    it('should filter "Completed" todos', () => {
      TodoPage.typeOfFiltering("Completed",1)
    })
    it('should filter "All" todos', () => {
      TodoPage.typeOfFiltering("All",3)
    })
})