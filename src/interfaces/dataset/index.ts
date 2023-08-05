import { ContributionInterface } from 'interfaces/contribution';
import { ReviewInterface } from 'interfaces/review';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DatasetInterface {
  id?: string;
  name: string;
  organization_id?: string;
  owner_id?: string;
  created_at?: any;
  updated_at?: any;
  contribution?: ContributionInterface[];
  review?: ReviewInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    contribution?: number;
    review?: number;
  };
}

export interface DatasetGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
  owner_id?: string;
}
