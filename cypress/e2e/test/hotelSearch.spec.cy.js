import 'cypress-xpath';
import { hotelSearch } from '../../pages/hotelSearchpage';
const hotelSearchPageObj = new hotelSearch()

describe('User Can Search with specific text in the hotel section',() =>{
 

    it('Task: 1 - hotel search',() =>
    {
        hotelSearchPageObj.openURL()
        hotelSearchPageObj.verifyHomePageTittle()
        hotelSearchPageObj.languageSelection()
        hotelSearchPageObj.hotelsBtnNavigation()
        hotelSearchPageObj.verifyHotelPage()
        hotelSearchPageObj.searchHotel()
        hotelSearchPageObj.verifySearchResult()
        hotelSearchPageObj.checkInDate()
        hotelSearchPageObj.checkOutDate()
        hotelSearchPageObj.submitButton()
        hotelSearchPageObj.handldeException();

    })
}) 