'use strict'

const SubmittablePage = require('./submittable-page')
const CONFIRM_PAGE_TITLE = 'GOV.UK - Application complete'
const PANEL_TITLE_CLASS = 'govuk-panel__title'
const PANEL_BODY_CLASS = 'govuk-panel__body'
const WARNING_TEXT_CLASS = 'govuk-warning-text__text'

/**
 * Page object for the confirmation page after submitting the claim.
 */
class Confirm extends SubmittablePage {
  async open (appURL) {
    await super.open(appURL)
    return this.waitForPageLoad()
  }

  async waitForPageLoad () {
    return this.waitForPageWithTitle(CONFIRM_PAGE_TITLE)
  }

  async getPanelTitleText () {
    const panelTitle = await this.findByClassName(PANEL_TITLE_CLASS)
    return panelTitle.getText()
  }

  async getPanelBodyText () {
    const panelBody = await this.findByClassName(PANEL_BODY_CLASS)
    return panelBody.getText()
  }

  async getWarningText () {
    const warningText = await this.findByClassName(WARNING_TEXT_CLASS)
    return warningText.getText()
  }
}

module.exports = Confirm
