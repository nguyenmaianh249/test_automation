import TodoPage from "../support/page-objects/todo-page"

describe('todo actions', () => {

  beforeEach(() => {
    TodoPage.navigate()

    TodoPage.addToDo("Clean room")
    TodoPage.addToDo("wash dishes")
    TodoPage.addToDo("learn cypress")
  })
  it('displays one todo item by default', () => {
    TodoPage.quantityTodoItemDefault()
  })
  it('should add a new todo to the list', () => {
    TodoPage.validateTodoText(0, "Clean room")
    TodoPage.validateToggleState(0, false)
    TodoPage.validateTodoText(1, "wash dishes")
    TodoPage.validateToggleState(1, false)
    TodoPage.validateTodoText(2, "learn cypress")
    TodoPage.validateToggleState(2, false)

  })
  it('should mark a todo as completed', () => {
    TodoPage.toggleTodo(0)
    TodoPage.validateTodoCompletedState(0, true)
  })
  it('should edit a todo', () => {
    TodoPage.editOneTodo(0)
  })
  it('should count active todos', () => {
    TodoPage.countActiveElement()
  })
  it('should clear completed todo', () => {
    TodoPage.validateTodoCompletedState(0, true)
  })
  it('should delete a todo', () => {
    TodoPage.deleteOneTodo(0)
  })
})