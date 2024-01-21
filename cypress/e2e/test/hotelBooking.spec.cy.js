import { hotelSearch } from '../../pages/hotelSearchpage';
import { bookingProcess } from '../../pages/hotelBookingPage';
import bookingInfoData from "../../fixtures/bookingInfoData.json"
import { waitForDelayedElement } from '../../pages/timeout';
const hotelSearchPageObj = new hotelSearch()
const bookingProcessObj = new bookingProcess()


describe('User Can Search with specific text in the hotel section',() =>{
 

    it('Task: 2 - hotel booking',() =>
    {
        hotelSearchPageObj.openURL()
        hotelSearchPageObj.verifyHomePageTittle()
        //waitForDelayedElement(hotelSearchPageObj.languageSelection())
        hotelSearchPageObj.languageSelection()
        hotelSearchPageObj.hotelsBtnNavigation()
        hotelSearchPageObj.verifyHotelPage()
        hotelSearchPageObj.searchHotel()
        hotelSearchPageObj.verifySearchResult()
        hotelSearchPageObj.checkInDate()
        hotelSearchPageObj.checkOutDate()
        hotelSearchPageObj.submitButton()
        bookingProcessObj.handldeException();
        //waitForDelayedElement(bookingProcessObj.clickOntheHotelName)
        cy.wait(10000);
        bookingProcessObj.bookingHotelName()
        //bookingProcessObj.selectSpecificHotelName()
        //bookingProcessObj.verifyHotelname()
        bookingProcessObj.clickOntheHotelName()
        bookingProcessObj.selectRoomProcess()
        //Personal Info
        bookingProcessObj.personalInfo(bookingInfoData.personalInfo.firstName,
            bookingInfoData.personalInfo.lastName,
            bookingInfoData.personalInfo.email,
            bookingInfoData.personalInfo.phoneNumber,
            bookingInfoData.personalInfo.address)
        bookingProcessObj.travellersInfo()
        bookingProcessObj.payment()
        bookingProcessObj.confrimBooking()
        bookingProcessObj.verifySucessfullBoking()

        //cy.wait(32000)

    })


    
}) 