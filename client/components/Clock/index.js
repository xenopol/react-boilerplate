// @flow

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  setTime as setTimeAction,
  addOneHour as addOneHourAction,
} from '../../store/actions/time'

const styles = {
  button: {
    cursor: 'pointer',
  },
}

type Time = {
  hours: number,
  minutes: number,
  seconds: number,
}

type Props = {
  setTime: Time => void,
  addOneHour: () => void,
  time: Time
}

class Clock extends Component <Props> {
  intervalId: IntervalID

  componentDidMount() {
    const { setTime } = this.props
    this.intervalId = setInterval(() => {
      const date = new Date()
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { time, addOneHour } = this.props
    return (
      <Fragment>
        <p>{ `${time.hours}:${time.minutes}:${time.seconds}` }</p>
        <button style={ styles.button } onClick={ addOneHour }>Add one hour</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  time: state.time,
})

const mapDispatchToProps = dispatch => ({
  setTime: time => dispatch(setTimeAction(time)),
  addOneHour: () => dispatch(addOneHourAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock)