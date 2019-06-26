const { validate } = require('./validate')

const contentSummary = (req) => ({
  key: req.t('doYouHaveChildrenThreeOrUnder.summaryKey'),
  value: req.t(req.session.claim.doYouHaveChildrenThreeOrUnder)
})

const pageContent = ({ translate }) => ({
  title: translate('doYouHaveChildrenThreeOrUnder.title'),
  heading: translate('doYouHaveChildrenThreeOrUnder.heading'),
  buttonText: translate('buttons:continue'),
  yes: translate('yes'),
  no: translate('no'),
  explanation: translate('doYouHaveChildrenThreeOrUnder.explanation')
})

// Update to check response and direct to children dob page if the user selected yes.
const next = () => '/are-you-pregnant'

const doYouHaveChildrenThreeOrUnder = {
  path: '/do-you-have-children-three-or-under',
  next,
  template: 'do-you-have-children-three-or-under',
  pageContent,
  contentSummary,
  validate
}

module.exports = {
  doYouHaveChildrenThreeOrUnder
}
