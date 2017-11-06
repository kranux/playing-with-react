import React from 'react';

export default class CreateDebtForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = props.value;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        this.props.createListElement(this.state);

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
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
                    <input 
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        );
    }
}