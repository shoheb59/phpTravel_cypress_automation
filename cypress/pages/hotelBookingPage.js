export class bookingProcess {
    locatorBookingProcess =
    {
        btn_HotelSelection: ".text-nowrap.card-title.d-flex.align-items-center.mt-2.mb-0",
        allElementof_A: 'a',
        btn_viewMore: ':contains("View More")',
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
        payLater: "input#gateway_pay_later"
    }

    


    
    

   bookingHotelName()
   {
    cy.get(this.locatorBookingProcess.btn_HotelSelection).eq(1).invoke('text').then((text) => {
        cy.log('Second Element Text:', text);
      });
   }

    clickViewmoreHotelButton()
    {
       
        cy.get(this.locatorBookingProcess.allElementof_A).filter(this.locatorBookingProcess.btn_viewMore).eq(1).click();

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

    personalInfo()
    {
        cy.get(this.locatorForPersonalInfo.fName).type("Hasnat")
        cy.get(this.locatorForPersonalInfo.LName).type("Shoheb")
        cy.get(this.locatorForPersonalInfo.eMail).type("yopmail.com")
        cy.get(this.locatorForPersonalInfo.phone).type("01813559954")
        cy.get(this.locatorForPersonalInfo.addRess).type("Dhaka, Bangladesh")

    }

    travellersInfo()
    {
        cy.get(this.locatorForTravelerInfo.ddAdultMr).select("Mr")
        cy.get(this.locatorForTravelerInfo.adultfName).type("Rad")
        cy.get(this.locatorForTravelerInfo.adultLName).type("Rifat")
        cy.get(this.locatorForTravelerInfo.ddAdultMrs).select("Mrs")
        cy.get(this.locatorForTravelerInfo.adult1fName).type('Loren')
        cy.get(this.locatorForTravelerInfo.adult1Lname).type('Smith')
    }

    payment()
    {
        cy.get(this.Locatorpayment).check()
       
    }

    confrimBooking()
    {
        cy.get(this.locatorBookingProcess.terms).click();
        cy.get(this.locatorBookingProcess.confrimBooking).click();
    }


}