Feature: Functions of the TodoMVC Application

    As a user, I am able to use all the functions in the app
    
    Scenario: I am able to see the title of the app 
    Given I successfully browse to the Appication
    Then I should see the title of the page is 'todos'

    Scenario: I am able to add a new todo item
    When I type the name of the todo items and press Enter
    Then I can add a new todo item
   
    Scenario: I am able to mark a todo item as completed
    When I click on the radio button on the left side of the todo 
    Then I can mark a todo item as completed
    
    Scenario: I am able to a edit todo item
    When I double-click on the todo content, delete the old text and type the new text
    Then I can edit a todo item
    
    Scenario: I am able to delete a todo item
    When I click on the "x" button of the todo
    Then I can delete a todo item

    Scenario: I am able to delete the todo items that are completed
    Given Some todo items were checked
    When I click on the "Clear completed" button
    Then I can delete the todo items that are completed






