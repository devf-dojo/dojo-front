/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('Check headers text', () => {
    const app = shallow(<App />)

    expect(app.find('h1').text()).toEqual('Dojo Dev.f')
    expect(app.find('h3').text()).toEqual('El siguiente paso en tu carrera de desarrollador')
  })
})
