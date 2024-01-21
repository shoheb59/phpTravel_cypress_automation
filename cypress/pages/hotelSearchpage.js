export class hotelSearch{


    
    homePageLocator = {
        headerTitle: "head title"
    }
    
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
        verifyLocation: "#select2-hotels_city-container",
        btn_checkIn: "#checkin",
        btn_checkOut: "#checkout",
        //checkIn_active_Date: ".datepicker-days tbody .day.active",
        checkIn_active_Date: "01-01-2031",
        checkOut_active_Date:"02-01-2031",
        //checkOut_active_Date: ".datepicker-days tbody .day.active",
        search_submitButton: "[type='submit']",
        text_Assertion: ".card-text.text-capitalize.mb-0",
        text_expectedResult: "dsfadsf"


    }

    
    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    verifyHomePageTittle()
    {
        cy.get(this.homePageLocator.headerTitle,{timeout: 3000}).should('have.text', 'PHPTRAVELS')
    }
    
    languageSelection ()
    {
       const dd_EnglishLanguage =  cy.get(this.hotelPageLocators.dd_language,{timeout: 2000}).should('be.visible').first();
       dd_EnglishLanguage.click();
       cy.get(this.hotelPageLocators.dropDown_Menu).contains(this.hotelPageLocators.dd_option).should('have.text', '\n English').click();
    }
    hotelsBtnNavigation()
    {
        cy.contains(this.hotelPageLocators.btn_hotel,{timeout: 12000}).click();

    }
    verifyHotelPage()
    {
        cy.url().should('include', 'https://www.phptravels.net/hotels');

    }
    searchHotel()
    {
        cy.get(this.hotelPageLocators.txtField_search).type(this.hotelPageLocators.txt_search)
        cy.get(this.hotelPageLocators.searchListBox,{timeout: 12000}).find(this.hotelPageLocators.searchList,{timeout: 12000})
        .contains(this.hotelPageLocators.selectSearchItem).click();
    }
    verifySearchResult()
    {
        cy.get(this.hotelPageLocators.verifyLocation).should('have.text','Dubai United Arab Emirates')
    }

    checkInDate(){
        cy.get(this.hotelPageLocators.btn_checkIn).clear()
        .type(this.hotelPageLocators.checkIn_active_Date).click()
    }
    verifyCheckInDate()
    {
        //cy.get(this.homePageLocator.btn_checkIn).should('have.value', '01-01-2031');
        //cy.get('[value="01-01-2031"]').should('have.value', '01-01-2031');
        cy.get('#checkin')
        .should(($input) => {
          const value = $input.val();
          expect(value).to.equal('01-01-2031');
        });



    }
    checkOutDate()
    {
        //cy.get(this.hotelPageLocators.checkOut_active_Date).eq(1).click();
        cy.get(this.hotelPageLocators.btn_checkOut).clear()
        .type(this.hotelPageLocators.checkOut_active_Date).click()
               
    }
    verifyCheckOutDate()
    {
        cy.get(this.homePageLocator.btn_checkOut).should('have.value', '03-01-2031');
    }
    submitButton()
    {
        cy.get(this.hotelPageLocators.search_submitButton).click()
    }



}