describe('Reddit cline e2e test', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('http://localhost:3000/');
  });

  it('should display the search bar and category filter', () => {
    cy.get('input[placeholder="Search Reddit"]').should('be.visible');
    cy.contains('Popular').should('be.visible');
  });

  it('should search for a term and display results', () => {
    const searchTerm = 'the';

    // Type in the search term and press Enter
    cy.get('input[placeholder="Search Reddit"]').type(`${searchTerm}{enter}`);

    // Ensure the results contain the search term

    cy.get('.post')
      .should('have.length.greaterThan', 0) // Ensure posts exist
      .each(($el) => {
        cy.wrap($el)
          .invoke('text')
          .then((text) => {
            // Log the post content to debug
            cy.log(text);
            // Verify it contains the search term
            expect(text.toLowerCase()).to.include(searchTerm.toLowerCase());
          });
      });
  });

  it('should filter posts by category using the subreddit field (case-insensitive)', () => {
    const category = 'CSS';

    // Click on the css category

    cy.contains(new RegExp(`^${category}$`, 'i')).click();
    cy.pause();
    // Ensure the posts are filtered by subreddit (case-insensitive)
    cy.get('.post').each(($el) => {
      // Wrap the element and check the subreddit field
      cy.wrap($el)
        .find('p') // Find all <p> tags within the post
        .contains(/^subreddit:/i) // Identify the <p> tag with "subreddit:"
        .invoke('text') // Get its text content
        .then((text) => {
          const subreddit = text.replace(/^subreddit:\s*/i, '').toLowerCase(); // Extract subreddit and convert to lowercase
          expect(subreddit).to.eq(category.toLowerCase()); // Assert equality
        });
    });
  });
});
