import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import ActionPage from './actionPage'
Given('I successfully browse to the Appication', function() {
    ActionPage.loadHomePage();
})

Then("I should see the title of the page is 'todos'", function() {
    ActionPage.viewTitle();
})

When('I type the name of the todo items and press Enter', function() {
    ActionPage.addTodo("Clean room");
})

Then('I can add a new todo item', function() {
    ActionPage.validateAddTodo();
})

When('I click on the radio button on the left side of the todo', function() {
    ActionPage.clickRadioButton(0);
})

Then('I can mark a todo item as completed', function() {
    ActionPage.validateTodoCompleted(0,true);
})

When('I double-click on the todo content, delete the old text and type the new text', function() {
    ActionPage.editTodoItem(0);
})

Then('I can edit a todo item', function() {
    ActionPage.validateEditTodoItem();
})

When('I click on the "x" button of the todo', function(todoIndex = 0) {
    ActionPage.deleteTodoItem(0);
})

Then('I can delete a todo item', function() {
    ActionPage.validateDeleteTodoItem();
})

Given('Some todo items were checked', function() {
    ActionPage.checkTodoItemCompletedExist();
})

When('I click on the "Clear completed" button', function() {
    ActionPage.clearTodoItemCompleted();
})

Then('I can delete the todo items that are completed', function() {
    ActionPage.validateClearTodoItemCompleted();
})