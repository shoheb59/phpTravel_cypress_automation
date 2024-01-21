import { DataGenerator } from "../support/utills"
import {faker} from '@faker-js/faker'
const dataGenerator = new DataGenerator();

export class bookingProcess {

    locatorBookingProcess =
    {
        btn_HotelSelection: ".text-nowrap.card-title.d-flex.align-items-center.mt-2.mb-0",
        allElementof_A: 'a',
        btn_viewMore: ':contains("View More")',
        parent_Class_ViewMore: ".card-body.p-1.overflow-hidden",
        btn_SelectRooms: "[href= '#rooms']",
        btn_BookNow: "small.d-block",
        exception: "uncaught:exception",
        terms: "#agreechb",
        confrimBooking: "#booking"

    }
    locatorForPersonalInfo =
    {
        fName:"[name='user[first_name]']",
        LName:"[name='user[last_name]']",
        eMail: "[name='user[email]']",
        phone:"[name='user[phone]']",
        addRess:"[name='user[address]']"
    }

    locatorForTravelerInfo =
    {
        ddAdultMr:"[name='title_1']",
        adultfName:"[name='firstname_1']",
        adultLName: "[name='lastname_1']",
        ddAdultMrs: "[name='title_2']",
        adult1fName:"[name='firstname_2']",
        adult1Lname:"[name='lastname_2']"


    }
    Locatorpayment = {
        payLater: "#gateway_pay_later"
    }

    


    
    
    // selectSpecificHotelName()
    // {
    //     cy.get(this.locatorBookingProcess.btn_HotelSelection).each((element, index) => {
    //         const hotelName = Cypress.$(element).text();
    //         cy.log("all the hotel name: ", hotelName)
          
        
    //         if (hotelName.includes('Armani Hotel Dubai')) {
    //           //Move to hotel name parent
    //           cy.get(this.locatorBookingProcess.parent_Class_ViewMore)
    //           .contains('strong', 'Armani Hotel Dubai').should('have.text', 'Armani Hotel Dubai')
              
    //         }
    //       });
    // }

    // verifyHotelname()
    // {
    //     cy.get(this.locatorBookingProcess.parent_Class_ViewMore)
    //           .contains('strong', 'Armani Hotel Dubai').should('have.text', 'Armani Hotel Dubai')
    // }


    bookingHotelName()
    {
     cy.get(this.locatorBookingProcess.btn_HotelSelection).eq(1).invoke('text').then((text) => {
         cy.log('Second Element Text:', text);
       });
    }

    clickOntheHotelName(){
        
           

             //Move to hotel name parent
             const selectedHotel = cy.get(this.locatorBookingProcess.parent_Class_ViewMore).eq(1);

             const childeren =  selectedHotel.parent().children().last()
             const viewMoreButtonClick = childeren.children().last()
             viewMoreButtonClick.click()
                                    
             //.contains('strong', 'Armani Hotel Dubai')
            //  .parent()
            //  .next() 
            //  .next() //rating
            //  .next() //Usd
            //  .next()// View More Button
             //.click()    

    }
   
  

    handldeException()
    {
        cy.on(this.locatorBookingProcess.exception, (err, runnable) => {
            return false;
          });
    }

    selectRoomProcess()
    {
        cy.get(this.locatorBookingProcess.btn_SelectRooms).click();
        cy.get(this.locatorBookingProcess.btn_BookNow).eq(0).click()
    }

    personalInfo(fname,lname,email,phone,address)
    {
        const randomString = dataGenerator.generateRandomString();
        const randomTwoDigitPhoneNumber = dataGenerator.generateRandomTwoDigitPhoneNumber();

        cy.get(this.locatorForPersonalInfo.fName, {timeout: 12000, force: true}).should('be.visible').type(`${fname}${randomString}`)
        cy.get(this.locatorForPersonalInfo.LName).type(lname+randomString)
        cy.get(this.locatorForPersonalInfo.eMail).type(randomString+email)
        cy.get(this.locatorForPersonalInfo.phone).type(phone+randomTwoDigitPhoneNumber)
        cy.get(this.locatorForPersonalInfo.addRess).type(address+randomString)

    }

    travellersInfo()
    {
        const adult1FirstName = faker.person.firstName();
        const adult1LastName = faker.person.lastName();
        const adult2FirstName = faker.person.firstName();
        const adult2LastName = faker.person.lastName();

        cy.get(this.locatorForTravelerInfo.ddAdultMr).select("Mr")
        cy.get(this.locatorForTravelerInfo.adultfName).type(adult1FirstName)
        cy.get(this.locatorForTravelerInfo.adultLName).type(adult1LastName)
        cy.get(this.locatorForTravelerInfo.ddAdultMrs).select("Mrs")
        cy.get(this.locatorForTravelerInfo.adult1fName).type(adult2FirstName)
        cy.get(this.locatorForTravelerInfo.adult1Lname).type(adult2LastName)
    }

    payment()
    {
        cy.get(this.Locatorpayment.payLater,{timeout: 3000}).click()
       
    }

    confrimBooking()
    {
        cy.get(this.locatorBookingProcess.terms).click();
        cy.get(this.locatorBookingProcess.confrimBooking).click();
    }

    verifySucessfullBoking()
    {
        cy.get("[type ='submit']",{timeout: 4000}).should('have.text','\n\nRequest for Cancellation ')
    }


}