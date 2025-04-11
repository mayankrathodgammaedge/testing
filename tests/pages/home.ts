import { Page } from '@playwright/test';
import { DataGenerator } from './utils';

export class HomePage {
  constructor(private page: Page) { }

  async navigate() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async fillForm(name: string, email: string, phone: string, address: string) {
    await this.page.fill('#name', name);
    await this.page.fill('#email', email);
    await this.page.fill('#phone', phone);
    await this.page.fill('#textarea', address);
  }

  async autoFillForm() {
    const name = DataGenerator.getRandomName();
    const email = DataGenerator.getRandomEmail();
    const phone = DataGenerator.getRandomPhone();
    const address = DataGenerator.getRandomAddress();

    await this.fillForm(name, email, phone, address);
  }

  async clickSearchInput(){
    await this.page.locator('#Wikipedia1_wikipedia-search-input').click();
    await this.page.locator('#Wikipedia1_wikipedia-search-input').fill('virat');
    await this.page.locator('input[type="submit"]').click(); 
  }

  async clickRadioMale() {
    await this.page.locator('input[name="gender"][value="male"]').check();
  }

  async clickDays() {
    await this.page.locator('#sunday').check();
    await this.page.locator('#monday').check();
    await this.page.locator('#tuesday').check();
    await this.page.locator('#wednesday').check();
    await this.page.locator('#thursday').check();
    await this.page.locator('#friday').check();
    await this.page.locator('#saturday').check();
  }

  async clickSelectCountry() {
    await this.page.locator('#country').selectOption({ value: 'india' });
  }

  
  async clickSelectColour() {
    await this.page.locator('#colors').selectOption({ value: 'red' });
  }

  async clickSelectAnimal() {
    await this.page.locator('#animals').selectOption({ value: 'elephant' });
  }

  async doubleClick() {
    await this.page.getByRole('button', { name: "Copy Text" }).dblclick();
  }

  async mouseHover() {
    await this.page.getByRole('button', { name: "Point Me" })
  }

  async drag() {
    await this.page.locator('#draggable').dragTo(this.page.getByText('Drop here'))
  }

  async clickSimpleAlert() {
    this.page.once('dialog', async (dialog) => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });
    await this.page.getByRole('button', { name: 'Simple Alert' }).click();
  }

  async clickConfirmationAlert(){
    this.page.once('dialog',async (dialog)=>{
      console.log('Confirmation Alert', dialog.message());
      await dialog.accept();
    })
    await this.page.getByRole('button', {name: "Confirmation Alert"}).click();
  }

  async clickPromptAlert(){
    this.page.once('dialog',async (dialog)=>{
      console.log('Prompt Alert', dialog.message());
      await dialog.accept();
    })
    await this.page.getByRole('button', {name: "Prompt Alert"}).click();
  }

  async clickNewTabButton() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('button', { name: 'New Tab' }).click(),
    ]);
  
    await newPage.waitForLoadState();
    console.log('New Tab URL:', newPage.url());
  
    // newPage.click(...) or check title
    // await newPage.getByText('Some text').click();
  
    await newPage.close();
  }
  

  async clickPopUpButton() {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('button', { name: 'Popup Window' }).click(),
    ]);
  
    await popup.waitForLoadState();
    console.log('Popup Window URL:', popup.url());
    await popup.close();
  }
  
  async clickScroll(){
    await this.page.getByPlaceholder('Select an item').click();
    await this.page.mouse.wheel(0, 200);
  }

  async clickStartAndStopButton() {
    await this.page.getByRole('button', { name: "START" }).click();
    await this.page.getByRole('button', { name: "STOP" }).click();
  }

  async clickOnPagination(){
    await this.page.getByRole('link', { name: '1', exact: true }).click();
    await this.page.getByRole('link',{ name: '2', exact: true }).click();
    await this.page.getByRole('link',{ name: '3', exact: true }).click();
    await this.page.getByRole('link',{ name: '4', exact: true }).click();
  }

  async clickOnTableChecbox(){
    await this.page.getByRole('row', { name: '1 Smartphone $' }).getByRole('checkbox').check();
    await this.page.getByRole('row', { name: 'Laptop $19.99' }).getByRole('checkbox').check();
    await this.page.getByRole('row', { name: 'Tablet $5.99' }).getByRole('checkbox').check();
    await this.page.getByRole('row', { name: 'Smartwatch $7.99' }).getByRole('checkbox').check();
    await this.page.getByRole('row', { name: 'Wireless Earbuds $8.99' }).getByRole('checkbox').check();
  }

  async clickOnDatePicker(){
    await this.page.locator('#datepicker').click();
    await this.page.locator('#datepicker').fill('23/02/98');
    await this.page.locator('').click();
  }

  async clickUploadFileButton(){
    await this.page.getByRole('button', { name: "Upload Single File" }).click();
  }
}
