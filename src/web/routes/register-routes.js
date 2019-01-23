const csrf = require('csurf')
const { registerStartRoute } = require('./start')
const { registerConfirmRoute } = require('./application/confirm')
const { registerCheckRoutes } = require('./application/check')

const { steps } = require('./application/steps')
const { registerFormRoutes } = require('./application/register-form-routes')

const registerRoutes = (config, app) => {
  const csrfProtection = csrf({})

  registerFormRoutes(csrfProtection, steps, app)
  registerStartRoute(app)
  registerCheckRoutes(csrfProtection, config, app)
  registerConfirmRoute(app)
}

module.exports = {
  registerRoutes
}