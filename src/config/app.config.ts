interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Dataset Administrator'],
  customerRoles: ['Dataset Consumer'],
  tenantRoles: ['Dataset Owner', 'Dataset Contributor', 'Dataset Reviewer', 'Dataset Administrator'],
  tenantName: 'Organization',
  applicationName: 'AI Datasets',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
