import 'cypress-xpath';
import { hotelSearch } from '../pages/hotelSearchpage';
const hotelSearchPageObj = new hotelSearch()

describe('User Can Search with specific text in the hotel section',() =>{
 

    it('Task: hotel search',() =>
    {
        hotelSearchPageObj.openURL()
        hotelSearchPageObj.languageSelection()
        hotelSearchPageObj.hotelsBtnNavigation()
        hotelSearchPageObj.searchHotel()
        hotelSearchPageObj.checkInDate()
        hotelSearchPageObj.checkOutDate()
        hotelSearchPageObj.submitButton()
        hotelSearchPageObj.searchResultAssertion()

    })
}) 