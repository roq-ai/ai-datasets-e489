import * as yup from 'yup';

export const datasetValidationSchema = yup.object().shape({
  name: yup.string().required(),
  organization_id: yup.string().nullable(),
  owner_id: yup.string().nullable(),
});
