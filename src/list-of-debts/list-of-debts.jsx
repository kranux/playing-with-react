import React from 'react';

export default class ListOfDebts extends React.Component {
    render() {
        return (
            <ul>
                <span>{this.props.value.map(item => 
                    <li key={item.id}>
                        {item.name} 
                        <span 
                            className="controls"
                            onClick={this.props.showEditForm}
                        >Edit</span>
                    </li>
                    )}
                </span>
            </ul>
        );
    }
}