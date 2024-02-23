import * as request from '~/utils/httpRequest';

// https://tiktok.fullstack.edu.vn/api/users/search?q=key&type=less
export const search = async (q, type = 'less') => {
  try {
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });

    return res.data;
    
  } catch (error) {
    throw new Error("Couldn't find search result!");
  }
};
