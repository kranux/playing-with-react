import React from 'react';

export default class ListOfDebts extends React.Component {
    render() {
        return (
            <ul>
                {this.props.value.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        );
    }
}