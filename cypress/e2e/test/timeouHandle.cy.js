import { waitForDelayedElement } from '../../pages/timeout';
describe('Your Test Suite', () => {
    it('should wait for a delayed element', () => {
      // Call waitForDelayedElement with the selector of the element you're waiting for
      waitForDelayedElement('.your-element-selector');
  
      // Continue with the rest of your test
      cy.get('.your-other-element').click();
      // Add more test steps as needed
    });
  });