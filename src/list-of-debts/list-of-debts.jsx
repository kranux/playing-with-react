import React from 'react';

export default class ListOfDebts extends React.Component {
  render() {
    return (
      <ul>
        <span>{this.props.value.map(item =>
          <li key={item.id}>
            {item.name}
            <span className="controls">
              <span
                onClick={() => this.props.showEditForm(item)}
              >Edit</span>
              |
              <span
                onClick={() => this.props.showDeleteForm(item)}
              >Delete</span>
            </span>
          </li>
          )}
          </span>
      </ul>
    );
  }
}
