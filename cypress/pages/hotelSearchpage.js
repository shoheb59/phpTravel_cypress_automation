export class hotelSearch{


    hotelPageLocators = 
    {
        dd_language : ".nav-item.dropdown [data-bs-toggle='dropdown']",
        dd_option: "English",
        dropDown_Menu: ".dropdown-menu",
        btn_hotel: "Hotels",
        txtField_search: "b",
        txt_search: "Dubai",
        searchListBox: ".select2-results.select2--fadein",
        searchList: "#select2-hotels_city-results",
        selectSearchItem: "Dubai",
        btn_checkIn: "#checkin",
        btn_checkOut: "#checkout",
        //checkIn_active_Date: ".datepicker-days tbody .day.active",
        checkIn_active_Date: "18-01-2025",
        checkOut_active_Date:"28-01-2025",
        //checkOut_active_Date: ".datepicker-days tbody .day.active",
        search_submitButton: "[type='submit']",
        text_Assertion: ".card-text.text-capitalize.mb-0",
        text_expectedResult: "dsfadsf"


    }

    
    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    
    languageSelection ()
    {
       const dd =  cy.get(this.hotelPageLocators.dd_language).first();
       dd.click();
       cy.get(this.hotelPageLocators.dropDown_Menu).contains(this.hotelPageLocators.dd_option).click();
    }
    hotelsBtnNavigation()
    {
        cy.contains(this.hotelPageLocators.btn_hotel,{timeout: 12000}).click();

    }
    searchHotel()
    {
        cy.get(this.hotelPageLocators.txtField_search).type(this.hotelPageLocators.txt_search)
        cy.get(this.hotelPageLocators.searchListBox,{timeout: 12000}).find(this.hotelPageLocators.searchList,{timeout: 12000})
        .contains(this.hotelPageLocators.selectSearchItem).click();
    }

    checkInDate(){
        cy.get(this.hotelPageLocators.btn_checkIn).clear()
        .type(this.hotelPageLocators.checkIn_active_Date).click()
    }
    checkOutDate()
    {
        //cy.get(this.hotelPageLocators.checkOut_active_Date).eq(1).click();
        cy.get(this.hotelPageLocators.btn_checkOut).clear()
        .type(this.hotelPageLocators.checkOut_active_Date).click()
        
        
    }
    submitButton()
    {
        cy.get(this.hotelPageLocators.search_submitButton).click()
    }

    searchResultAssertion()
    {
        cy.contains("Filter Results").should('be.visible')
        cy.contains("Filter Results").should('eq','Filter Results')
        cy.get('small').invoke('text').should('eq', 'Dubai');
        //cy.get(this.hotelPageLocators.text_Assertion).contains(this.hotelPageLocators.text_expectedResult).should('exist')
        
        
    }



}