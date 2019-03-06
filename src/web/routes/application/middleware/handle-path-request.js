const { CHECK_URL, CONFIRM_URL } = require('../common/constants')
const { stateMachine, actions, states } = require('../common/state-machine')

const { IS_PATH_ALLOWED, GET_NEXT_ALLOWED_PATH } = actions

const getPathsInSequence = (steps) => [...steps.map(step => step.path), CHECK_URL, CONFIRM_URL]

const middleware = (config, pathsInSequence) => (req, res, next) => {
  // Destroy the session on navigating away from CONFIRM_URL
  if (req.session.state === states.COMPLETED && req.path !== CONFIRM_URL) {
    req.session.destroy()
    res.clearCookie('lang')
    return res.redirect(config.environment.OVERVIEW_URL)
  }

  // Initialise nextAllowedStep if none exists in session
  if (!req.session.nextAllowedStep) {
    req.session.nextAllowedStep = pathsInSequence[0]
  }

  const isPathAllowed = stateMachine.dispatch(IS_PATH_ALLOWED, req, pathsInSequence)
  const nextAllowedPath = stateMachine.dispatch(GET_NEXT_ALLOWED_PATH, req)

  // Redirect to nextAllowedPath on invalid path request
  if (!isPathAllowed) {
    return res.redirect(nextAllowedPath)
  }

  next()
}

const handleRequestForPath = (config, steps) => middleware(config, getPathsInSequence(steps))

module.exports = {
  getPathsInSequence,
  handleRequestForPath
}