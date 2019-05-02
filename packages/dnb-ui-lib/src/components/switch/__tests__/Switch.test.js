/**
 * Component Test
 *
 */

import React from 'react'
import {
  mount,
  fakeProps,
  axeComponent,
  toJson,
  loadScss
} from '../../../core/jest/jestSetup'
import Component from '../Switch'

// just to make sure we re-run the test in watch mode due to changes in theese files
import _switch from '../style/_switch.scss' // eslint-disable-line
import dnb_switch from '../style/dnb-switch.scss' // eslint-disable-line
import dnb_switch_theme_ui from '../style/themes/dnb-switch-theme-ui.scss' // eslint-disable-line

const props = fakeProps(require.resolve('../Switch'), {
  optional: true
})
props.status = null
props.readOnly = false

describe('Switch component', () => {
  // then test the state management
  const Comp = mount(<Component {...props} />)

  // mount compare the snapshot
  it('have to match snapshot', () => {
    expect(toJson(Comp)).toMatchSnapshot()
  })

  it('has correct state after "change" trigger', () => {
    // default checked value has to be false
    expect(Comp.state().checked).toBe(false)

    Comp.find('input').simulate('change') // we could send inn the event data structure like this: , { target: { checked: true } }
    expect(Comp.state().checked).toBe(true)

    Comp.find('input').simulate('change')
    expect(Comp.state().checked).toBe(false)

    // also check if getDerivedStateFromProps sets the state as expected
    Comp.setProps({ checked: true })
    expect(Comp.state().checked).toBe(true)

    const value = 'new value'
    Comp.setProps({ value })
    expect(Comp.find('input').props().value).toBe(value)
  })

  it('should validate with ARIA rules', async () => {
    const Comp = mount(<Component {...props} />)
    expect(await axeComponent(Comp)).toHaveNoViolations()
  })
})

describe('Switch scss', () => {
  it('have to match snapshot', () => {
    const scss = loadScss(require.resolve('../style/dnb-switch.scss'))
    expect(scss).toMatchSnapshot()
  })
  it('have to match default theme snapshot', () => {
    const scss = loadScss(
      require.resolve('../style/themes/dnb-switch-theme-ui.scss')
    )
    expect(scss).toMatchSnapshot()
  })
})