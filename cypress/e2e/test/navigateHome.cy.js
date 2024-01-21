
describe('Main Home page',() =>{
    it('Navigate to the PHPTravels Website', () =>
    {
        cy.visit("https://www.phptravels.net")
         // Using expect 
        cy.url().should(url => {
        expect(url).to.eq("https://www.phptravels.net");
        })
    
    }) 
}) 

