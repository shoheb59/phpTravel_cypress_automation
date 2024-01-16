describe('Main Home page',() =>{
    it('Navigate to the PHPTravels Website', () =>
    {
        cy.visit("https://www.phptravels.net");
        const dd = cy.get(".nav-item.dropdown [data-bs-toggle='dropdown']").first();
        dd.click();
        cy.get(".dropdown-menu").contains('English').click();
        cy.contains('Hotels',{timeout: 12000}).click();
        cy.get('b').type('Dubai');
        cy.get('.select2-results.select2--fadein').find('#select2-hotels_city-results').contains('Dubai').click();
        cy.get("#checkin").clear().type("18-01-2025");
        cy.get("#checkout").clear().type("28-01-2025").click();
        
        // cy.get('.datepicker-days tbody .day.active').eq(0).click();
        // //cy.get('.datepicker-days tbody .day.active').eq(1).click();
        // cy.get('.datepicker-days tbody .day.active').eq(1).click().then(($el) => {
        //     // Log information about the clicked element
        //     cy.log(`Clicked on check-out date: ${$el.text()}`);
        //   });

        // cy.get("[type='submit']").click();
        // cy.contains('View More',{timeout: 17000}).click();
        
        
        })

       
        
})