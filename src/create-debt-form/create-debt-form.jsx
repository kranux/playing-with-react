import React from 'react';

export default class CreateDebtForm extends React.Component {
    render() {
        return( 
        <form>
            <div>
                <label for="nameInput">Name</label>
                <input 
                    type="text" 
                    name="name"
                    id="nameInput" 
                />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>);
    }
}