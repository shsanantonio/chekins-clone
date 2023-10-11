describe('Search', () => {
  it('should be able to search hotels', () => {
    // Start from the home page
    cy.visit('http://localhost:3000/');

    // The url should be "/"
    cy.url().should('include', '/');

    // The page should contain an h1 with "Hotel Bookings Redefined"
    cy.get('h1').contains('Hotel Bookings Redefined');

    // Click the "Going to" input field (this would open a dropdown)
    cy.get('#default-search').click();

    // Fill in "Singapore" into the "Where are you going" input field inside the dropdown
    cy.get('.input-container > input').type('Singapore');

    // Click the first item in the dropdown
    cy.get('.input-container > ul > li:nth-child(1)').click();

    // Click the Date Picker (input field)
    cy.get('.react-datepicker__input-container input').click();

    // Click the 25th day of the current month
    cy.get('.react-datepicker__day--025').click();

    // Click the 27th day of the current month
    cy.get('.react-datepicker__day--027').click();

    // Click the "Search" button
    cy.get('[aria-label="Search"]').click();

    // It should redirect to the /hotel-listing url
    cy.url().should('include', '/hotel-listing');

    // Check if the label 'Available Hotels' exists
    cy.get('#available-hotels-total').contains('Available Hotels');

    return;
  });
});
