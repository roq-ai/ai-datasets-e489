import axios from 'axios';
import queryString from 'query-string';
import { ContributionInterface, ContributionGetQueryInterface } from 'interfaces/contribution';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getContributions = async (
  query?: ContributionGetQueryInterface,
): Promise<PaginatedInterface<ContributionInterface>> => {
  const response = await axios.get('/api/contributions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createContribution = async (contribution: ContributionInterface) => {
  const response = await axios.post('/api/contributions', contribution);
  return response.data;
};

export const updateContributionById = async (id: string, contribution: ContributionInterface) => {
  const response = await axios.put(`/api/contributions/${id}`, contribution);
  return response.data;
};

export const getContributionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/contributions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteContributionById = async (id: string) => {
  const response = await axios.delete(`/api/contributions/${id}`);
  return response.data;
};
