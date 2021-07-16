/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />


context('Connections endpoint', () => {
	it('', () => {
		// http://localhost:3333/connections
		// GET 200

		cy.api({
			method:"GET",
			url: `${Cypress.config().apiUrl}/connections`
		}).then((response)=> {
			expect(response.status).to.eq(200)
			expect(response.duration).lt(20)
			expect(response.body).to.have.property('total')
			.to.be.a('number')
			.greaterThan(5)

			expect(response.body.total)
			.an('number')
			.satisfy((totalValue)=> {return totalValue >= 5})
		
		// content-type: application/json; charset=utf-8
		expect(response.headers)
		.to.have.property('content-type')
		.an('string')
		.equal('application/json; charset=utf-8')
		})
	});
});