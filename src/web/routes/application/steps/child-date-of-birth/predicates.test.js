const test = require('tape')
const { keyDoesNotContainIndex, isChildEntry } = require('./predicates')

test('keyDoesNotContainIndex()', (t) => {
  t.equal(keyDoesNotContainIndex(1)('value', 'childDob-1-day'), false)
  t.equal(keyDoesNotContainIndex(1)('value', 'childDob-11-day'), true)
  t.equal(keyDoesNotContainIndex(1)('value', 'childDob-10-day'), true)
  t.equal(keyDoesNotContainIndex(2)('value', 'childDob-1-day'), true)
  t.end()
})

test('isChildEntry()', (t) => {
  t.equal(isChildEntry('1', 'childDob-1-day'), true)
  t.equal(isChildEntry('1', 'inputCount'), false)
  t.equal(isChildEntry('', ''), false)
  t.end()
})
