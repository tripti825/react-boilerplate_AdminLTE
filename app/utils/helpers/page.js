export const BASE_URL = '/';

export const createRouteWithPage = (activePage, codes) => {
  const pageRoute = getRouteByPageType(activePage);

  const url = createGlobalUrl(codes);

  return `${url}/${pageRoute}`;
};

export const createGlobalUrl = (codes) => {
  let url = `${BASE_URL}/${encodeURIComponent(codes.country)}`;

  if (codes.state) {
    url += `/${encodeURIComponent(codes.state)}`;
  }

  url += `/${encodeURIComponent(codes.city)}`;

  if (codes.region) {
    url = `${url}/${encodeURIComponent(codes.region)}`;
  }


  return url;
};

export const getRouteByPageType = (type) => {
  const pages = Object.values(PAGES);

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].type === type) {
      return pages[i].route;
    }
  }

  return null;
};