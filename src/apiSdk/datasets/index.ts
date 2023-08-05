import axios from 'axios';
import queryString from 'query-string';
import { DatasetInterface, DatasetGetQueryInterface } from 'interfaces/dataset';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDatasets = async (query?: DatasetGetQueryInterface): Promise<PaginatedInterface<DatasetInterface>> => {
  const response = await axios.get('/api/datasets', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDataset = async (dataset: DatasetInterface) => {
  const response = await axios.post('/api/datasets', dataset);
  return response.data;
};

export const updateDatasetById = async (id: string, dataset: DatasetInterface) => {
  const response = await axios.put(`/api/datasets/${id}`, dataset);
  return response.data;
};

export const getDatasetById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/datasets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDatasetById = async (id: string) => {
  const response = await axios.delete(`/api/datasets/${id}`);
  return response.data;
};
