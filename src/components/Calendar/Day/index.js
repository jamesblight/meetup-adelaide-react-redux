import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import './style.css';

class Day extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    outsideMonth: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired
  }

  render() {
    const className = classNames(
      'Day',
      { 'Day--outsideMonth': this.props.outsideMonth },
      { 'is-selected': this.props.selected }
    );

    return (
      <td className={className}>
        <div className="Day-content">
          { moment(this.props.date).date() }
        </div>
      </td>
    )
  }
}

export default Day;
