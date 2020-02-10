import React from 'react';
import { getTodaysExpenses } from '../../../../DataFunctions/calculations';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AdviceBox = (props) => {
  
  const { expenses } = props;
  const currentExpenditure = getTodaysExpenses(expenses); 

  const advice = (expense) => {
    if (expense <= 0) {
      return "You've got some money to spare.";
    } else if (expense > 0 && expense < 500) {
      return "Some healthy spending going on.";
    } else if (expense > 500 && expense < 1000) {
      return "Seems like you should be spending a little less.";
    } else if (expense > 1000) {
      return "You gotta stop spending today.";
    } else {
      return "";
    }
  }

  return (
    <div className="container">
      <p className="txt-welcome">Welcome back, pragyakar.</p>
      <p className="txt-info">You have spent 
        {" "}
        <span className="txt-money">NRs.{" "}{currentExpenditure}</span>
        {" "} today.
        <br />
        {advice(currentExpenditure)}
      </p>
      <Link to="/reports">
        <span className="report-button">
          View Full Report 
          <FontAwesomeIcon icon={"arrow-alt-circle-right"} />
        </span>
      </Link>
    </div>
  );
}

export default AdviceBox;