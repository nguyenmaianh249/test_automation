class FilteringPage {
    static nameofFiltering(name = "All") {
        return cy.contains(name)
    }
    static filtering(name) {
        this.nameofFiltering(name).click()
    }
    static typeOfFiltering(name, length) {
        const label = this.nameofFiltering(name).click()
        label.get('.todo-list li').should('have.length',length)
    }

}
export default FilteringPage;