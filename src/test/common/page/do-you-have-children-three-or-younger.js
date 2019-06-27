'use strict'

const SubmittablePageWithRadioButtons = require('./submittable-page-with-radio-buttons')

const DO_YOU_HAVE_CHILDREN_THREE_OR_UNDER_ERROR_LINK_CSS = 'a[href="#do-you-have-children-three-or-younger-error"]'
const DO_YOU_HAVE_CHILDREN_THREE_OR_UNDER_FIELD_ERROR_ID = 'doYouHaveChildrenThreeOrYounger-error'

const PAGE_TITLES = {
  en: 'GOV.UK - Do you have any children who are three years old or younger?',
  cy: 'GOV.UK - Urna condimentum mattis?'
}

/**
 * Page object for DoYouHaveChildrenThreeOrYounger page where the claimant enters whether they have any children three years old or younger or not.
 */
class DoYouHaveChildrenThreeOrYounger extends SubmittablePageWithRadioButtons {
  async waitForPageLoad (lang = 'en') {
    return super.waitForPageWithTitle(PAGE_TITLES[lang])
  }

  getPath () {
    return '/do-you-have-children-three-or-younger'
  }

  getPageName () {
    return 'do you have children three or younger'
  }

  getFieldErrorId () {
    return DO_YOU_HAVE_CHILDREN_THREE_OR_UNDER_FIELD_ERROR_ID
  }

  getErrorLinkCss () {
    return DO_YOU_HAVE_CHILDREN_THREE_OR_UNDER_ERROR_LINK_CSS
  }
}

module.exports = DoYouHaveChildrenThreeOrYounger
