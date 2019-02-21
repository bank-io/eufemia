/**
 * UI lib Component Example
 *
 */

import React, { PureComponent, Fragment } from 'react'
import ComponentBox from '../../../../dnb-design-system-portal/src/shared/tags/ComponentBox'
// import InputMasked from './InputMasked'
import styled from '@emotion/styled'

// https://github.com/text-mask/text-mask
// How to use masks: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

class Example extends PureComponent {
  constructor(props) {
    super(props)
    this._ref = React.createRef()
  }
  handleInputChange = ({ value }) => {
    console.log(value)
  }
  state = { showTestData: false }
  componentDidMount() {
    const showTestData = typeof window !== 'undefined' && window.IS_TEST
    this.setState({ showTestData })
  }
  showTestData(state) {
    return this.state.showTestData
      ? `wrapper_attributes={{'data-dnb-test': "input-${state}"}}`
      : ''
  }
  render() {
    return (
      <Fragment>
        <ComponentBox
          caption="Only numbers"
          noInline
          scope={{
            createNumberMask,
            handleInputChange: this.handleInputChange
          }}
        >
          {/* @jsx */ `
const numberMask = createNumberMask({
  allowDecimal: false,
  thousandsSeparatorSymbol: '.',
  prefix: '',
  suffix: ',-'
})
render(<InputMasked
  label="Amount"
  autocomplete="off"
  value="1000000"
  mask={numberMask}
  show_mask="true"
  align="right"
  on_change={handleInputChange}
/>)
          `}
        </ComponentBox>
        <ComponentBox
          caption="Only numbers, right aligned and large sized input"
          noInline
          scope={{
            createNumberMask,
            handleInputChange: this.handleInputChange
          }}
        >
          {/* @jsx */ `
const numberMask = createNumberMask({
  allowDecimal: false,
  thousandsSeparatorSymbol: '.',
  prefix: 'NOK '
})
render(<InputMasked
  label="Amount"
  autocomplete="off"
  size="large"
  mask={numberMask}
  align="right"
  placeholder="Enter a number"
  on_change={handleInputChange}
/>)
          `}
        </ComponentBox>
        <ComponentBox
          caption="Phone Number, starting with 4"
          scope={{ handleInputChange: this.handleInputChange }}
        >
          {/* @jsx */ `
<InputMasked
  label="With Mask"
  mask={[
    '+',
    /[4]/, // have to start with 4
    /[5-7]/, // can be 5,6 or 7
    ' ',
    '/',
    ' ',
    /[49]/, // have to start with 4 or 9
    /\\d/,
    /\\d/,
    ' ',
    /\\d/,
    /\\d/,
    ' ',
    /\\d/,
    /\\d/,
    /\\d/
  ]}
  show_mask="true"
  on_change={handleInputChange}
  ${this.showTestData('masked-phone')}
/>
          `}
        </ComponentBox>
      </Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: block;
  width: 100%;

  .dnb-form-group,
  .dnb-masked-input {
    margin: 1rem 0;
  }
  .dnb-form-label + .dnb-masked-input {
    margin-top: 0;
  }
`

export { Example }
export default () => (
  <Wrapper>
    <Example />
  </Wrapper>
)
