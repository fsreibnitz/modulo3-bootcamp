/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />


context('Classes endpoin', () => {
	it('', () => {
		cy.api({
			method: "POST",
			url: `${Cypress.config().apiUrl}/classes`,
			body: {
				
					"name":"teste lala",
					"avatar":"https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png",
					"whatsapp":"489599595959",
					"bio":"lal lalal",
					"subject":"Educação Física",
					"cost":10,
					"schedule":[
						{
							"week_day":"5",
							"from":"10:21",
							"to":"12:21"
						}
					]
				}
			
		}).then((response)=> {

		})
	});
});