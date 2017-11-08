import { connect } from 'react-redux';

import DebtForm from '../debt-form/debt-form';
import { addItem } from '../actions';

const mapStateToProps = ({debts}) => ({
  value: debts.form
});

const mapDispatchToProps = dispatch => ({
  elementUpdated: element => {
    dispatch(addItem(element));
  }
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DebtForm);

export default FormContainer;
