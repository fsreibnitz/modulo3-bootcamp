/// <reference types="cypress" />

const larguras =[1200,1090]

larguras.forEach(largura => {
context(`Landing page - ${largura}px`, () => {
	beforeEach(()=>{
				cy.visit('/')
				cy.viewport('ipad-mini')
				cy.log('Largura: ', largura)
	})
	it('Navegar para o cadastro de aulas', () => {
		cy.get('div a.give-classes').click()
		cy.url().should('contain','give-classes')

	});

	it('Navegar para esquisa de professores', () => {
		
		cy.get('div a.study').click()
		cy.url().should('contain','study')

	});
});
})