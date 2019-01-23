const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

const pages = require('./pages')

Given('I navigate to the HTBHF overview page', async function () {
  await pages.overview.open(pages.url)

  const h1ElementText = await pages.overview.getH1Text()
  expect(h1ElementText).to.be.equal('Overview')
})

When('I select to start the process', async function () {
  await pages.overview.clickStartButton()
})

Then('the enter name page is shown', async function () {
  await pages.enterName.waitForPageLoad()
})