describe('Login Games Palette', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('404')) {
        return false;
      }
    });

    cy.visit('https://sawaddee-dev.d1vzhiz2x5qtbm.amplifyapp.com/');
  });

  it('should click login button', () => {
    cy.wait(5000);
    cy.xpath('(//*[@id="custom-btn-component"])[1]').click();
    cy.xpath('//*[@id="headlessui-dialog-panel-4"]', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    cy.log('✅ Click Login Button - Success');
  });

  it('Login Account API', () => {
    cy.wait(5000);
    cy.xpath('(//*[@id="custom-btn-component"])[1]').click();
    cy.xpath('//*[@id="headlessui-dialog-panel-4"]', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    cy.xpath('//*[@id="login"]/div/div/form/div[1]/div[1]//input').type('vrswd253547387');
    cy.xpath('//*[@id="login"]/div/div/form/div[2]/div[1]//input').type('1111');
    cy.xpath('//*[@id="login"]/div/div/form/div[4]').click(); 
    cy.log('✅ Login Account API - Success');
  });

  it('Login Phone Number',()=>{
    cy.wait(5000);
    cy.xpath('(//*[@id="custom-btn-component"])[1]').click();
    cy.xpath('//*[@id="headlessui-dialog-panel-4"]', {timeout: 10000})
    .should('exist')
    .and('be.visible')
    cy.xpath('//*[@id="login"]/div/div/form/div[1]/div[1]//input').type('0998780736');
    cy.xpath('//*[@id="login"]/div/div/form/div[2]/div[1]//input').type('1111');
    cy.xpath('//*[@id="login"]/div/div/form/div[4]').click();
    cy.log('✅ Login Phone Number - Success');
  });
  
  it('loing inpu thai',() =>{
    cy.wait(5000);
    cy.xpath('(//*[@id="custom-btn-component"])[1]').click();
    cy.xpath('//*[@id="headlessui-dialog-panel-4"]', {timeout: 10000})
    .should('exist')
    .and('be.visible')
    cy.xpath('//*[@id="login"]/div/div/form/div[1]/div[1]//input').type('ฟหกดกฟหด');
    cy.xpath('//*[@id="login"]/div/div/form/div[1]/div[2]/p', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    .and('contain.text', 'ห้ามกรอกตัวอักษรไทย');
    cy.xpath('//*[@id="login"]/div/div/form/div[2]/div[1]//input').type('1111');
    cy.xpath('//*[@id="login"]/div/div/form/div[4]').click();
     cy.xpath('//*[@id="headlessui-dialog-panel-4"]', {timeout: 10000})
    .should('exist')
    .and('be.visible')
    cy.log('❌ Login fail handled correctly');
  });

  it('loing inpu FailFlow with empty password',() =>{
    cy.wait(5000);
    cy.xpath('(//*[@id="custom-btn-component"])[1]').click();
    cy.xpath('//*[@id="headlessui-dialog-panel-4"]', {timeout: 10000})
    .should('exist')
    .and('be.visible')
    cy.xpath('//*[@id="login"]/div/div/form/div[1]/div[1]//input').type('vrswd36775865');
    cy.xpath('//*[@id="login"]/div/div/form/div[2]/div[1]//input').type('11sadf11');
    cy.xpath('//*[@id="login"]/div/div/form/div[4]').click();
     cy.xpath('//*[@id="headlessui-dialog-panel-4"]', {timeout: 10000})
    .should('exist')
    .and('be.visible')
    cy.log('❌ Login FailFlow with empty password');
  });
});
