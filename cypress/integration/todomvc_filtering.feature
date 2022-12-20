Feature: Filtering todo items in the TodoMVC Application

    As a user, I am able to filter todo items following to their status
    
    Scenario: I am able to add a new todo item
    Given I successfully browse to the Appication
    When I type the name of the todo items and press Enter
    Then I can add a new todo item

    Scenario: I am able to filter the active todo items
    When I click on the "Active" button 
    Then I can filter the active todo items
    
    Scenario: I am able to filter the completed todo items
    When I click on the "Completed" button 
    Then I can filter the completed todo items

    Scenario: I am able to filter all todo items
    When I click on the "All" button 
    Then I can filter all todo items
