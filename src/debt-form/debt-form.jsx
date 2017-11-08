import React from 'react';

import {formatTime} from '../utils';

const formItem = (label, input) => (
  <div className="form-item">
    <label>{label}</label>
    {input}
  </div>
);

export default class DebtForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.value;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.elementUpdated(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    const parsedValue = event.target.type === 'checkbox' ? Boolean(event.target.checked) : event.target.value;
    this.setState({[event.target.name]: parsedValue});
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {formItem('Name',
          <input
            id="nameInput"
            name="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          />
        )}
        <div>
          <label htmlFor="isReturnedInput">
            <input
              checked={this.state.isReturned}
              id="isReturnedInput"
              name="isReturned"
              onChange={this.handleChange}
              type="checkbox"
            /> - is returned
          </label>
        </div>
        {formItem('Date borrowed',
          <input
            id="dateBorrowedInput"
            name="dateBorrowed"
            onChange={this.handleChange}
            type="date"
            value={formatTime(this.state.dateBorrowed)}
          />
        )}
        {formItem('Due date',
          <input
            id="dueDateInput"
            name="dueDate"
            onChange={this.handleChange}
            type="date"
            value={formatTime(this.state.dueDate)}
          />
        )}
        <div>
          <input
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    );
  }
}
