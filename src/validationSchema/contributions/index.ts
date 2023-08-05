import * as yup from 'yup';

export const contributionValidationSchema = yup.object().shape({
  dataset_id: yup.string().nullable(),
  contributor_id: yup.string().nullable(),
});
