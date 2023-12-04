//Main page test
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
  });
});

//1A challenge test
describe('Click in 1A', () => {
  it('Visits 1A challenge', () => {
    cy.visit('/');
    cy.contains('.button', '1A >').click();
    cy.url().should('include', '/stddev');
    
    //Estado inicial de media y desviación estándar
    let initialMedia: string;
    let initialStdDev: string;
    cy.get('.button-results').within(() => {
      cy.contains('.button', 'Media').invoke('text').then((text) => {
        initialMedia = text.trim();
      });
      cy.contains('.button', 'StdDev').invoke('text').then((text) => {
        initialStdDev = text.trim();
      });
    });

    //Click en el botón de Proxy Size y comprobación de que los valores cambian
    cy.contains('.btn-title', 'Proxy Size').click();
    cy.get('.button-results').within(() => {
      cy.contains('.button', 'Media').invoke('text').should('not.eq', initialMedia);
      cy.contains('.button', 'StdDev').invoke('text').should('not.eq', initialStdDev);
    });

    //Click en el botón de Hours Dev y comprobación de que los valores cambian
    cy.contains('.btn-title', 'Hours Dev').click();
    cy.get('.button-results').within(() => {
      cy.contains('.button', 'Media').invoke('text').should('not.eq', initialMedia);
      cy.contains('.button', 'StdDev').invoke('text').should('not.eq', initialStdDev);
    });

    //Click en home y comprobación de que se vuelve a la página principal
    cy.contains('.btn', 'Home').click();
    cy.url().should('include', '/');
  });
});

//3A challenge test
describe('Click in 3A', () => {
  it('Visits 3A challenge', () => {
    cy.visit('/');
    cy.contains('.button', '3A >').click();
    cy.url().should('include', '/3A');

    //Estado inicial de los valores de B0, B1, YK, R y R2
    let initialB0, initialB1, initialYK, initialR, initialR2;
    cy.get('.button-results .button[data-text="B0"]').invoke('text').then((text) => {
      initialB0 = text.trim();
    });
    cy.get('.button-results .button[data-text="B1"]').invoke('text').then((text) => {
      initialB1 = text.trim();
    });
    cy.get('.button-results .button[data-text="YK"]').invoke('text').then((text) => {
      initialB1 = text.trim();
    });
    cy.get('.button-results .button[data-text="R"]').invoke('text').then((text) => {
      initialB1 = text.trim();
    });
    cy.get('.button-results .button[data-text="R2"]').invoke('text').then((text) => {
      initialB1 = text.trim();
    });

    // Click the "Proxy Size / Actual added" button and validate that the values have changed
    cy.get('.btn-content:contains("Proxy Size / Actual added")').click();
    cy.get('.button-results .button[data-text="B0"]').invoke('text').should('not.eq', initialB0);
    cy.get('.button-results .button[data-text="B1"]').invoke('text').should('not.eq', initialB1);
    cy.get('.button-results .button[data-text="YK"]').invoke('text').should('not.eq', initialYK);
    cy.get('.button-results .button[data-text="R"]').invoke('text').should('not.eq', initialR);
    cy.get('.button-results .button[data-text="R2"]').invoke('text').should('not.eq', initialR2);

    // Click the "Proxy Size / Actual develop" button and validate that the values have changed
    cy.get('.btn-content:contains("Proxy Size / Actual develop")').click();
    cy.get('.button-results .button[data-text="B0"]').invoke('text').should('not.eq', initialB0);
    cy.get('.button-results .button[data-text="B1"]').invoke('text').should('not.eq', initialB1);
    cy.get('.button-results .button[data-text="YK"]').invoke('text').should('not.eq', initialYK);
    cy.get('.button-results .button[data-text="R"]').invoke('text').should('not.eq', initialR);
    cy.get('.button-results .button[data-text="R2"]').invoke('text').should('not.eq', initialR2);

    // Click the "Plan added / Actual added" button and validate that the values have changed
    cy.get('.btn-content:contains("Plan added / Actual added")').click();
    cy.get('.button-results .button[data-text="B0"]').invoke('text').should('not.eq', initialB0);
    cy.get('.button-results .button[data-text="B1"]').invoke('text').should('not.eq', initialB1);
    cy.get('.button-results .button[data-text="YK"]').invoke('text').should('not.eq', initialYK);
    cy.get('.button-results .button[data-text="R"]').invoke('text').should('not.eq', initialR);
    cy.get('.button-results .button[data-text="R2"]').invoke('text').should('not.eq', initialR2);

    // Click the "Plan added / Actual develop" button and validate that the values have changed
    cy.get('.btn-content:contains("Plan added / Actual develop")').click();
    cy.get('.button-results .button[data-text="B0"]').invoke('text').should('not.eq', initialB0);
    cy.get('.button-results .button[data-text="B1"]').invoke('text').should('not.eq', initialB1);
    cy.get('.button-results .button[data-text="YK"]').invoke('text').should('not.eq', initialYK);
    cy.get('.button-results .button[data-text="R"]').invoke('text').should('not.eq', initialR);
    cy.get('.button-results .button[data-text="R2"]').invoke('text').should('not.eq', initialR2);

    //Click en home y comprobación de que se vuelve a la página principal
    cy.contains('.btn', 'Home').click();
    cy.url().should('include', '/');
  });
});

//5A challenge test
describe('Click in 5A', () => {
  it('Visits 5A challenge', () => {
    cy.visit('/');
    cy.contains('.button', '5A >').click();
    cy.url().should('include', '/5A');

    //Estado inicial de p
    let initialP;
    cy.get('.button-results .button[data-text="Result"]').invoke('text').then((text) => {
      initialP = text.trim();
    });

   //Test Should return toBeCloseTo p=16.0 if dof=0, x0=0, x1=4, num_seg=4, and f(x)=2x'
    cy.get('.form-control input[type="number"]').eq(0).clear().type('0');
    cy.get('.form-control input[type="number"]').eq(1).clear().type('0');
    cy.get('.form-control input[type="number"]').eq(2).clear().type('4');
    cy.get('.form-control input[type="number"]').eq(3).clear().type('4');
    cy.get('.btn-content:contains("2x")').click();
    cy.get('.button-results .button[data-text="Result"]').invoke('text').should('include', '15.9');

    //Test Should return toBeCloseTo p=0.3333 if dof=0, x0=0, x1=1, num_seg=4, and f(x)=x^2'
    cy.get('.form-control input[type="number"]').eq(0).clear().type('0');
    cy.get('.form-control input[type="number"]').eq(1).clear().type('0');
    cy.get('.form-control input[type="number"]').eq(2).clear().type('1');
    cy.get('.form-control input[type="number"]').eq(3).clear().type('4');
    cy.get('.btn-content:contains("x^2")').click();
    cy.get('.button-results .button[data-text="Result"]').invoke('text').should('include', '0.333');

    //Test Should return toBeGreaterThan p=1.379 if dof=0, x0=1, x1=4, num_seg=6, and f(x)=1/x'
    cy.get('.form-control input[type="number"]').eq(0).clear().type('0');
    cy.get('.form-control input[type="number"]').eq(1).clear().type('1');
    cy.get('.form-control input[type="number"]').eq(2).clear().type('4');
    cy.get('.form-control input[type="number"]').eq(3).clear().type('6');
    cy.get('.btn-content:contains("1/x")').click();
    cy.get('.button-results .button[data-text="Result"]').invoke('text').should('include', '1.388');

    //Test Should return toBeLessThan 0.35006 if dof=9, x0=0, x1=1.1, num_seg=10 and f(x)=T'
    cy.get('.form-control input[type="number"]').eq(0).clear().type('9');
    cy.get('.form-control input[type="number"]').eq(1).clear().type('0');
    cy.get('.form-control input[type="number"]').eq(2).clear().type('1.1');
    cy.get('.form-control input[type="number"]').eq(3).clear().type('10');
    cy.get('.btn-content:contains("T")').click();
    cy.get('.button-results .button[data-text="Result"]').invoke('text').should('include', '0.349');

    //Click en home y comprobación de que se vuelve a la página principal
    cy.contains('.btn', 'Home').click();
    cy.url().should('include', '/');
    });
})
