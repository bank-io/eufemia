/**
 * Component Test
 *
 */

import React from 'react'
import {
  mount,
  fakeProps,
  toJson,
  loadScss
} from '../../../core/jest/jestSetup'
import Component from '../InputMasked'

// just to make sure we re-run the test in watch mode due to changes in theese files
import _input_masked from '../style/_input-masked.scss' // eslint-disable-line
import dnb_input_masked from '../style/dnb-input-masked.scss' // eslint-disable-line

const props = {
  ...fakeProps(require.resolve('../InputMasked'), {
    optional: true
  }),
  mask: [/[a-z]/],
  show_mask: true,
  disabled: false,
  pipe: null
}
props.id = 'input-masked'

describe('InputMasked component', () => {
  // compare the snapshot
  it('have to match type="text" snapshot', () => {
    const Comp = mount(<Component {...props} type="text" value="test" />)
    expect(toJson(Comp)).toMatchSnapshot()
  })

  it('should format "number_mask" accordingly the defined properties', () => {
    const Comp = mount(
      <Component
        value="1000000"
        number_mask={{
          prefix: 'NOK ',
          suffix: ',- kr.'
        }}
      />
    )

    expect(Comp.find('input').instance().value).toBe('NOK 1 000 000,- kr.')
  })
})

describe('InputMasked scss', () => {
  it('have to match snapshot', () => {
    const scss = loadScss(
      require.resolve('../style/dnb-input-masked.scss')
    )
    expect(scss).toMatchSnapshot()
  })
})
