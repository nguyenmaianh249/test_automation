import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import ActionPage from '../todomvc_action/actionPage'
import FilteringPage from './filteringPage';
Given('I successfully browse to the Appication', function() {
    ActionPage.loadHomePage();
})

When('I type the name of the todo items and press Enter', function() {
    ActionPage.addTodo("Clean room");
    ActionPage.addTodo("Do homework");
    ActionPage.addTodo("Learn english");
})

Then('I can add a new todo item', function() {
    ActionPage.validateAddTodo();
})
When('I click on the "Active" button', function() {
    FilteringPage.filtering("Active");
})

Then('I can filter the active todo items', function() {
    FilteringPage.nameofFiltering("Active");
    FilteringPage.typeOfFiltering("Active",2)
})

When('I click on the "Completed" button', function() {
    FilteringPage.filtering("Completed");
})

Then('I can filter the completed todo items', function() {
    FilteringPage.nameofFiltering("Completed");
    FilteringPage.typeOfFiltering("Completed",1)
})

When('I click on the "All" button', function() {
    FilteringPage.filtering("All");
})

Then('I can filter all todo items', function() {
    FilteringPage.nameofFiltering("All");
    FilteringPage.typeOfFiltering("All",3)
})