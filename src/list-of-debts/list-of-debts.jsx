import React from 'react';

import {formatTime} from '../utils';

export default class ListOfDebts extends React.Component {

  constructor(props) {
    super(props);

    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort(fieldName) {
    const sortDirection = this.props.sort[fieldName];
    this.props.changeSort(fieldName, sortDirection ? -sortDirection : 1);
  }

  renderSortMarker(fieldName) {
    const sortDirection = this.props.sort[fieldName];
    if (sortDirection) {
      return sortDirection > 0 ? '\u25B2' : '\u25BC';
    }
    return null;
  }

  renderSortableColumnHeader(label, fieldName) {
    return (
      <td
        onClick={() => this.toggleSort(fieldName)}
      >{label} {this.renderSortMarker(fieldName)}</td>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.renderSortableColumnHeader('Returned?', 'isReturned')}
            {this.renderSortableColumnHeader('Name', 'name')}
            {this.renderSortableColumnHeader('Date borrowed', 'dateBorrowed')}
            {this.renderSortableColumnHeader('Due date', 'dueDate')}
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
              <td>{formatTime(item.dateBorrowed)}</td>
              <td>{formatTime(item.dueDate)}</td>
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
