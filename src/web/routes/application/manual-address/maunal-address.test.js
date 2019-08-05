const test = require('tape')
const { assocPath } = require('ramda')
const { contentSummary } = require('./manual-address')

const req = {
  t: string => string,
  session: {
    claim: {
      addressLine1: 'Flat b',
      addressLine2: '221 Baker street',
      townOrCity: 'London',
      county: 'Devon',
      postcode: 'aa1 1ab'
    }
  }
}

test('Address contentSummary() should return content summary in correct format', (t) => {
  const result = contentSummary(req)
  const expected = {
    key: 'address.summaryKey',
    value: 'Flat b\n221 Baker street\nLondon\nDevon\naa1 1ab'
  }

  t.deepEqual(result, expected, 'should return content summary in correct format')
  t.end()
})

test('Address contentSummary() should return content summary in correct format without address line 2', (t) => {
  const testReq = assocPath(['session', 'claim', 'addressLine2'], '', req)
  const result = contentSummary(testReq)
  const expected = {
    key: 'address.summaryKey',
    value: 'Flat b\nLondon\nDevon\naa1 1ab'
  }

  t.deepEqual(result, expected, 'should return content summary in correct format without address line 2')
  t.end()
})

test('Address contentSummary() should return content summary in correct format without county', (t) => {
  const testReq = assocPath(['session', 'claim', 'county'], '', req)
  const result = contentSummary(testReq)
  const expected = {
    key: 'address.summaryKey',
    value: 'Flat b\n221 Baker street\nLondon\naa1 1ab'
  }

  t.deepEqual(result, expected, 'should return content summary in correct format without address line 2')
  t.end()
})

test('Address contentSummary() should return content summary in correct format with address line 2 undefined', (t) => {
  const testReq = assocPath(['session', 'claim', 'addressLine2'], undefined, req)
  const result = contentSummary(testReq)
  const expected = {
    key: 'address.summaryKey',
    value: 'Flat b\nLondon\nDevon\naa1 1ab'
  }

  t.deepEqual(result, expected, 'should return content summary in correct format with address line 2 undefined')
  t.end()
})

test('Address contentSummary() should return content summary in correct format with county undefined', (t) => {
  const testReq = assocPath(['session', 'claim', 'county'], undefined, req)
  const result = contentSummary(testReq)
  const expected = {
    key: 'address.summaryKey',
    value: 'Flat b\n221 Baker street\nLondon\naa1 1ab'
  }

  t.deepEqual(result, expected, 'should return content summary in correct format with address line 2 undefined')
  t.end()
})
