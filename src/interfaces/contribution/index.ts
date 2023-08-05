import { DatasetInterface } from 'interfaces/dataset';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContributionInterface {
  id?: string;
  dataset_id?: string;
  contributor_id?: string;
  created_at?: any;
  updated_at?: any;

  dataset?: DatasetInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ContributionGetQueryInterface extends GetQueryInterface {
  id?: string;
  dataset_id?: string;
  contributor_id?: string;
}
