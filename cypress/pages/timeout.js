// helpers.js
export const waitForDelayedElement = (selector, timeout = 30000) => {
  let elementFound = false;

  cy.get(selector, { timeout, log: false })
    .should('be.visible')
    .then(() => {
      // Element found
      elementFound = true;
    })
    .then(null, (error) => {
      if (Cypress.dom.isJquery(error)) {
        // Element not found
        cy.log(`Element with selector '${selector}' not found within ${timeout}ms`);
      } else {
        // Some other error occurred
        cy.log(`An error occurred while waiting for element: ${error.message}`);
      }
    })
    .then(() => {
      // Handle the case when the element is not found or any other error occurred
      if (!elementFound) {
        // Perform any additional actions or log messages if needed
      }
    });
};

  