import { DatasetInterface } from 'interfaces/dataset';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  dataset_id?: string;
  reviewer_id?: string;
  feedback?: string;
  created_at?: any;
  updated_at?: any;

  dataset?: DatasetInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  dataset_id?: string;
  reviewer_id?: string;
  feedback?: string;
}
