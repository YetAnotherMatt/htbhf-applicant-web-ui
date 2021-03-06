const { check } = require('express-validator')
const { getTermsAndConditions } = require('./get')
const { postTermsAndConditions } = require('./post')
const { TERMS_AND_CONDITIONS_URL, prefixPath } = require('../../paths')
const { translateValidationMessage } = require('../common/translate-validation-message')
const { handleRequestForPath, configureSessionDetails } = require('../../flow-control')

const validate = [
  check('agree').equals('agree').withMessage(translateValidationMessage('validation:acceptTermsAndConditions'))
]
const registerTermsAndConditionsRoutes = (csrfProtection, journey, config, app) => {
  app
    .route(prefixPath(journey.pathPrefix, TERMS_AND_CONDITIONS_URL))
    .all(csrfProtection, configureSessionDetails(journey), handleRequestForPath(journey))
    .get(getTermsAndConditions(journey))
    .post(validate, postTermsAndConditions(config, journey))
}

module.exports = {
  registerTermsAndConditionsRoutes
}
