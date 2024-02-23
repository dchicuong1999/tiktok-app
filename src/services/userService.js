import * as request from '~/utils/httpRequest';

// https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=2
export const getSuggest = async ({ page, perPage}) => {
  try {
    const res = await request.get('users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    });

    return res.data;
    
  } catch (error) {
    throw new Error("Couldn't find search result!");
  }
};
