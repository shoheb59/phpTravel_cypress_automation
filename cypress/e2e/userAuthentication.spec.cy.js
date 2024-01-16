import { LocatorserAuthicate } from "../pages/userAuthentication";
const locatorUserObj = new LocatorserAuthicate();



describe('Task: 4',()=>{

    it('Task 4: Login',()=>{

        locatorUserObj.openUrl()
        locatorUserObj.loginPageNavigation()
        locatorUserObj.enTerEmail("demoUser@yopmail.com");
        locatorUserObj.enterPass('559959')
        locatorUserObj.submitLogin()
        locatorUserObj.userVerifiation()
    })
})