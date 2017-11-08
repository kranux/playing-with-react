import { connect } from 'react-redux';

import ListOfDebts from '../list-of-debts/list-of-debts';
import { changeSort, showDeleteForm } from '../actions';

function sortList(list, order) {
  const sortField = Object.keys(order)[0];
  const orderDirection = order[sortField];
  return list.sort( (a, b) =>
    orderDirection > 0 ? a[sortField] > b[sortField] : a[sortField] < b[sortField]);
}

const mapStateToProps = ({debts}) => {
  return {
    value: sortList(debts.list, debts.sort),
    sort: debts.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSort: (name, order) => {
      dispatch(changeSort(name, order));
    },
    showDeleteForm: element => {
      dispatch(showDeleteForm(element.id))
    }
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfDebts);

export default ListContainer;
