import * as yup from 'yup';

const addFormSchema = yup.object().shape({
  timestamp: yup
    .number()
    .typeError("Type Error")
    .required("Need the timestamp"),
  amount: yup
    .number()
    .typeError("Need the amount")
    .required("Need the amount"),
  tag: yup
    .string()
    .required("Need a tag"),
  remarks: yup
    .string()
});

export default addFormSchema;