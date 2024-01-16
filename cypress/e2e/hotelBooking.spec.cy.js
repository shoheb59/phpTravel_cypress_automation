import { hotelSearch } from '../pages/hotelSearchpage';
import { bookingProcess } from '../pages/hotelBookingPage';
import bookingInfoData from "../fixtures/bookingInfoData.json"
const hotelSearchPageObj = new hotelSearch()
const bookingProcessObj = new bookingProcess()


describe('User Can Search with specific text in the hotel section',() =>{
 

    it('Task: hotel search',() =>
    {
        hotelSearchPageObj.openURL()
        hotelSearchPageObj.languageSelection()
        hotelSearchPageObj.hotelsBtnNavigation()
        hotelSearchPageObj.searchHotel()
        hotelSearchPageObj.checkInDate()
        hotelSearchPageObj.checkOutDate()
        hotelSearchPageObj.submitButton();
        bookingProcessObj.handldeException();
        cy.wait(10000);
        //hotelSearchPageObj.searchResultAssertion()
        bookingProcessObj.bookingHotelName()
        bookingProcessObj.clickViewmoreHotelButton()
        bookingProcessObj.selectRoomProcess()
        bookingProcessObj.personalInfo()
        bookingProcessObj.travellersInfo()
        bookingProcessObj.payment()
        bookingProcessObj.confrimBooking()

        //cy.wait(32000)

    })


    
}) 