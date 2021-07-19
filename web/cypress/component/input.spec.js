/// <reference types="cypress" />
import mount from 'cypress-react-unit-test';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Input from '../../src/components/Input';


context('Renderizar componente', () => {
	const baseCss  = '/__root/src/assets/styles/global.css'
	const indexCss  = '/__root/src/component/Input/style.css'
	it('deve ser renderizado com sucesso', () => {
		const name = "name"
		const label = "Nome Completo"

		mount(
			<Router>
			<Input
						 name={name}
              label={label}
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
			</Router>
			,
			{
				stylesheet: [baseCss, indexCss]
			}
		)

		cy.get('label').as('labelInput')
		cy.get('#name').as('valueInput')

		cy.get('@labelInput').should('contain', label)

		cy.get('@valueInput').should('have.value',name)
		cy.get('@valueInput').should('have.attr','type').and('equal','text')
		cy.get('@valueInput').focus()
		cy.get('@valueInput').focused().then(($elemento => {
		 	 expect($elemento).to.have.css('font','16px Archivo')
				expect($elemento).to.have.attr('type','text')//outra forma de pegar o type
		  }))


	});

});