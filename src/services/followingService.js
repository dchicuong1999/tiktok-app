import * as request from '~/utils/httpRequest';

// https://tiktok.fullstack.edu.vn/api/me/followings?page=1
export const getFollowing = async ({ page }) => {
  try {
    const res = await request.get('me/followings', {
      params: {
        page,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Couldn't find search result!");
  }
};
