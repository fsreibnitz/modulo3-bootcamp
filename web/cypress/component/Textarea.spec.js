/// <reference types="cypress" />
import mount from 'cypress-react-unit-test';
import faker from 'faker';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Textarea from '../../src/components/Textarea';

context('Textarea Component', () => {
	const baseCss  = '/__root/src/assets/styles/global.css'
	const indexCss  = '/__root/src/component/Textarea/styles.css'
	it('Deve renderizar o componente', () => {
		const bio = faker.lorem.sentences(7)
		const label = faker.name.firstName()
		
		mount(
				<Router>
					<Textarea
						name="bio"
						label={label}
						value={bio}
						/>
				</Router>
				,
				{
					stylesheet: [baseCss, indexCss]
				}
			)
			 cy.get('label').as('labelTextarea');
			 cy.get('@labelTextarea').should('have.attr','for').and('equal','bio');
			 cy.get('@labelTextarea').should('contain', label)

			 cy.get('textarea').as('inputTextarea');
			 cy.get('@labelTextarea').should('contain', label)
			 cy.get('@inputTextarea').should('contain', bio)
			 cy.get('@labelTextarea').then(($elemento) => {
					expect($elemento).to.have.css('font','500 14px Poppins')
					expect($elemento.css('font')).to.be.equal('500 14px Poppins')
				})

		});
});