import React from 'react';

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
        <div>
          <label htmlFor="nameInput">Name</label>
          <input
            id="nameInput"
            name="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          />
        </div>
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
