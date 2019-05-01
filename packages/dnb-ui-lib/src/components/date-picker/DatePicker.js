/**
 * Web DatePicker Component
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import {
//   registerElement,
//   validateDOMAttributes,
//   processChildren,
//   dispatchCustomElementEvent
// } from '../../shared/component-helper'
import DatePickerRange from './DatePickerRange'
import DatePickerInput from './DatePickerInput'

const renderProps = {
  on_change: null
}

export const propTypes = {
  mask: PropTypes.string,
  label: PropTypes.string
}

export const defaultProps = {
  mask: 'dd/mm/yyyy',
  label: null,
  ...renderProps
}

export default class DatePicker extends PureComponent {
  static tagName = 'dnb-date-picker'
  static propTypes = propTypes
  static defaultProps = defaultProps
  static renderProps = renderProps

  // static enableWebComponent() {
  //   registerElement(DatePicker.tagName, DatePicker, defaultProps)
  // }

  state = {
    pickerIsVisible: false,
    // startDay: null,
    // startMonth: null,
    // startYear: null,
    // date: null,
    startDate: null,
    endDate: null
  }

  constructor(props) {
    super(props)

    const separators = props.mask.match(/[^mdy]/g)
    this.maskList = props.mask.split(/[^mdy]/).reduce((acc, cur) => {
      acc.push(cur)
      if (separators.length > 0) {
        acc.push(separators.shift())
      }
      return acc
    }, [])

    // this.dayRef = React.createRef()
  }

  onInputChange = ({ startDate, endDate }) => {
    console.log('onInputChange', startDate, endDate)
    // const startDate = null
    // parseFloat(this.state.startMonth) > -1
    //   ? new Date(
    //       this.state.startYear,
    //       this.state.startMonth - 1,
    //       this.state.startDay
    //     )
    //   : null

    // console.log('startDate', this.state.startMonth, '|', startDate)

    this.setState({
      startDate,
      endDate
    })
  }

  onPickerChange = ({ startDate, endDate }) => {
    // const startDay = pad(format(startDate, 'D'), 2)
    // const startMonth = pad(format(startDate, 'M'), 2)
    // const startYear = format(startDate, 'YYYY')
    // const endDay = pad(format(endDate, 'D'), 2)
    // const endMonth = pad(format(endDate, 'M'), 2)
    // const endYear = format(endDate, 'YYYY')
    this.setState({
      startDate,
      endDate
      //   startDay,
      //   startMonth,
      //   startYear,
      //   endDay,
      //   endMonth,
      //   endYear,
      //   startDate,
      //   endDate
    })
    // const date = new Date(startYear, startMonth - 1, startDay)
    // console.log('date', date)
  }

  showPicker = () => {
    this.setState({
      pickerIsVisible: true
    })
  }

  hidePicker = () => {
    this.setState({
      pickerIsVisible: false
    })
  }

  togglePicker = () => {
    const pickerIsVisible = !this.state.pickerIsVisible
    this.setState({
      pickerIsVisible
    })
  }

  // setStartDay = event => {
  //   try {
  //     let startDay = event.currentTarget.value
  //     if (parseFloat(startDay) > 0 && startDay.length === 2) {
  //       startDay = pad(parseFloat(event.currentTarget.value), 2)
  //       this.setState({
  //         startDay
  //       })
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  //
  // setStartMonth = event => {
  //   try {
  //     let startMonth = event.currentTarget.value
  //     if (parseFloat(startMonth) > 0 && startMonth.length === 2) {
  //       startMonth = pad(parseFloat(event.currentTarget.value), 2)
  //       this.setState({
  //         startMonth
  //       })
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  //
  // setStartYear = event => {
  //   try {
  //     const startYear = event.currentTarget.value
  //     if (parseFloat(startYear) > 0 && startYear.length === 4) {
  //       this.setState({
  //         startYear
  //       })
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  render() {
    return (
      <span className="dnb-date-picker">
        <DatePickerInput
          label={this.props.label}
          onChange={this.onInputChange}
          onFocus={this.showPicker}
          onSubmit={this.togglePicker}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        {this.state.pickerIsVisible && (
          <DatePickerRange
            onChange={this.onPickerChange}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
        )}
      </span>
    )
  }
}