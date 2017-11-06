import React from 'react';
import uuid from 'uuid/v1';

export default class CreateDebtForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.value;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.props.createListElement(this.state);

        this.setState({
            id: uuid(),
            name: 'initial-name'
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
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
                <input 
                    type="submit"
                    value="Submit"
                />
            </div>
        </form>
        );
    }
}