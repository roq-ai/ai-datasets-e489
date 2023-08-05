import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  feedback: yup.string().nullable(),
  dataset_id: yup.string().nullable(),
  reviewer_id: yup.string().nullable(),
});
