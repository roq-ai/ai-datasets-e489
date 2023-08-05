const mapping: Record<string, string> = {
  contributions: 'contribution',
  datasets: 'dataset',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
