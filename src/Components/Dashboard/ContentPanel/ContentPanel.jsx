import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExpense } from '../../../store/actions/expenseActions';
import Records from './Records';

const ContentPanel = (props) => {
  return (
    <div className="main-container">
      <Switch>
        <Redirect from="/" exact to="/add" />
        <Route path="/add" component={add} />
        <Route path="/records" component={Records} />
        <Redirect to={'/add'} />
      </Switch>
    </div>
  );
}

const add = () => {
  return ( <p>Add</p> )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPanel);