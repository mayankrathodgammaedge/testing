import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home';

test('Auto fill the automation form with random data', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.autoFillForm();
  await homePage.clickRadioMale();
  await homePage.clickDays();
  await homePage.clickSearchInput();
  await homePage.clickSelectCountry();
  await homePage.clickSelectColour();
  await homePage.clickSelectAnimal();
  await homePage.doubleClick();
  await homePage.mouseHover();
  await homePage.drag();
  await homePage.clickScroll();
  await homePage.clickSimpleAlert();
  await homePage.clickConfirmationAlert();
  await homePage.clickPromptAlert();
  await homePage.clickStartAndStopButton();
  await homePage.clickStartAndStopButton();
  await homePage.clickNewTabButton();
  await homePage.clickPopUpButton();
  await homePage.clickOnPagination();
  await homePage.clickOnTableChecbox();
  await homePage.clickUploadFileButton();
});

