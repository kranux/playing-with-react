import React from 'react';

export default class DeleteDialog extends React.Component {
    render() {
      const elementId = this.props.value;
      if (elementId) {
        return (
          <div>
            <p>Are you sure you want to delete
              {this.props.elements.find(e => e.id === elementId).name}?
            </p>
            <div>
              <button onClick={this.props.hideDeleteDialog}>Cancel</button>
              <button onClick={() => this.props.deleteElement(elementId)}>Delete</button>
            </div>
          </div>
        );
      }
      return null;
    }
}
