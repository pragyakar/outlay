import React from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import addFormSchema from './addFormSchema';

const AddExpenseForm = (props) => {

  const { handleSubmit, register, errors } = useForm({ validationSchema: addFormSchema });
  const currentTimestamp = moment().format("x");

  const onSubmit = values => {    
    props.handleSubmitForm(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text"
        value={moment(+currentTimestamp).format("DD MMMM YYYY")}
        onChange={() => {}}
        disabled
        className="add-expense-input hide"
      />
      <input
        name="timestamp"
        value={currentTimestamp}
        ref={register}
        onChange={() => {}}
        hidden
      />
      {errors.timestamp && errors.timestamp.message}
      <input
        type="number"
        name="amount"
        ref={register}
        placeholder={"Amount"}
        className="add-expense-input"
        autoComplete="off"
      />
      {errors.amount && <span className="add-input-error">{errors.amount.message}</span>}
      <input
        type="text"
        name="tag"
        ref={register}
        placeholder={"Tag"}
        className="add-expense-input"
        autoComplete="off"
      />
      {errors.tag && <span className="add-input-error">{errors.tag.message}</span>}
      <input
        type="text"
        name="remarks"
        ref={register}
        placeholder={"Remarks"}
        className="add-expense-input"
        autoComplete="off"
      />
      {errors.remarks && <span className="add-input-error">{errors.remarks.message}</span>}
      <button type="submit" className="add-expense-submit">Submit</button>
    </form>
  )
};

export default AddExpenseForm;