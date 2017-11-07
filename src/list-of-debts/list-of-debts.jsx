import React from 'react';

export default class ListOfDebts extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Returned</td>
            <td>Name</td>
            <td>Date borrowed</td>
            <td>Due date</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {this.props.value.map(item =>
            <tr key={item.id}>
              <td>
                <input
                  checked={item.isReturned}
                  disabled="disabled"
                  type="checkbox"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.dateBorrowed}</td>
              <td>{item.dueDate}</td>
              <td className="controls">
                <span
                  onClick={() => this.props.showEditForm(item)}
                >Edit</span>
                |
                <span
                  onClick={() => this.props.showDeleteForm(item)}
                >Delete</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
