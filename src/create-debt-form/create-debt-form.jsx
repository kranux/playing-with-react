import React from 'react';

export default class CreateDebtForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: new Date().getMilliseconds(),
            name: 'initial-name'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.props.createListElement(this.state);

        this.setState({
            id: new Date().getMilliseconds(),
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