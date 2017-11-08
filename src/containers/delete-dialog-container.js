import { connect } from 'react-redux';

import DeleteDialog from '../delete-dialog/delete-dialog';
import { deleteElement, hideDeleteDialog } from '../actions';

const mapStateToProps = ({debts}) => ({
  value: debts.delete,
  elements: debts.list
});

const mapDispatchToProps = dispatch => ({
  deleteElement: id => {
    dispatch(deleteElement(id));
  },
  hideDeleteDialog: () => {
    dispatch(hideDeleteDialog());
  }
});

const DeleteDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteDialog);

export default DeleteDialogContainer;
