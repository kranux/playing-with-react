import React from 'react';

export default class CreateDebtForm extends React.Component {

    constructor(props) {
        super(props);

        this.onClickSubmit = this.onClickSubmit.bind(this);
    }
    
    onClickSubmit(e) {
        e.preventDefault();
        console.log('The link was clicked.')
    }

    render() {
        return( 
        <form>
            <div>
                <label htmlFor="nameInput">Name</label>
                <input 
                    type="text" 
                    name="name"
                    id="nameInput" 
                />
            </div>
            <div>
                <button 
                    onClick={this.onClickSubmit}
                >Submit</button>
            </div>
        </form>);
    }
}