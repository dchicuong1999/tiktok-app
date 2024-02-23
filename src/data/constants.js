import config from '~/config';
import {
  LanguagesIcon,
  FeedbackIcon,
  ProfileIcon,
  FavoritesIcon,
  CoinsIcon,
  LiveStudioIcon,
  LiveCreatorHubIcon,
  SettingsIcon,
  DarkModeIcon,
  KeyboardIcon,
  LogoutIcon,
  ExploreIcon,
  ExploreIconActive,
  FollowingIcon,
  FollowingIconActive,
  ForYouIcon,
  ForYouIconActive,
  FriendsIcon,
  FriendsIconActive,
  LiveIcon,
  LiveIconActive,
  ProfileIconActive,
  QrIcon,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  KakaoTalkIcon,
  AppleIcon,
  GoogleIcon,
} from '~/components/Icons';

export const LOCAL_STORAGE_DEFAULT = {
  jobInput: '',
  jobEditInput: '',
  jobList: [],
};

const sharedMenuItems = [
  {
    icon: <LanguagesIcon />,
    title: 'English',
    children: {
      title: 'Languages',
      data: [
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vie',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'chi',
          title: 'Tiếng Trung',
          children: {
            title: 'Languages',
            data: [
              {
                type: 'language',
                code: 'chinaPT',
                title: 'Tiếng Trung Phồn Thể',
              },
              {
                type: 'language',
                code: 'chinaGT',
                title: 'Tiếng Trung Giản Thể',
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <DarkModeIcon />,
    title: 'Dark mode',
  },
];

export const MENU_ITEMS = [
  {
    icon: <LiveCreatorHubIcon />,
    title: 'LIVE Creator Hub',
    to: '/live-creator-hub',
  },
  ...sharedMenuItems
];

export const USER_LOGIN_MENU_ITEMS = [
  {
    icon: <ProfileIcon />,
    title: 'View profile',
    to: '/@dchicuong',
  },
  {
    icon: <FavoritesIcon />,
    title: 'Favorites',
  },
  {
    icon: <CoinsIcon />,
    title: 'Get Coins',
    to: '/coins',
  },
  {
    icon: <LiveStudioIcon />,
    title: 'LIVE Studio',
    to: '/live-studio',
  },
  {
    icon: <LiveCreatorHubIcon />,
    title: 'LIVE Creator Hub',
    to: '/live-creator-hub',
  },
  {
    icon: <SettingsIcon />,
    title: 'Settings',
    to: '/settings',
  },
  ...sharedMenuItems,
  {
    icon: <LogoutIcon />,
    title: 'Log out',
    active: 'LOG_OUT',
    separate: true,
  },
];

export const SIDEBAR_NAV_MENU = [
  {
    path: config.routes.home,
    title: 'For You',
    icon: <ForYouIcon />,
    iconActive: <ForYouIconActive />,
  },
  {
    path: config.routes.following,
    title: 'Following',
    icon: <FollowingIcon width="2.6rem" height="2.6rem" />,
    iconActive: <FollowingIconActive width="2.6rem" height="2.6rem" />,
  },
  {
    path: config.routes.friends,
    title: 'Friends',
    icon: <FriendsIcon />,
    iconActive: <FriendsIconActive />,
  },
  {
    path: config.routes.explore,
    title: 'Explore',
    icon: <ExploreIcon />,
    iconActive: <ExploreIconActive />,
    custom: 'New',
  },
  {
    path: config.routes.live,
    title: 'Live',
    icon: <LiveIcon />,
    iconActive: <LiveIconActive />,
  },
  {
    path: config.routes.profile,
    title: 'Profile',
    icon: <ProfileIcon width="2.8rem" height="2.8rem" />,
    iconActive: <ProfileIconActive width="2.8rem" height="2.8rem" />,
  },
];

export const SIDEBAR_FOOTER = {
  ABOUT_LINKS: [
    { title: 'About', to: '/About' },
    { title: 'Newsroom', to: '/Newsroom' },
    { title: 'Contact', to: '/Contact' },
    { title: 'Careers', to: '/Careers' },
  ],
  ADVERTISE_LINKS: [
    { title: 'TikTok for Good', to: '/TikTok for Good' },
    { title: 'Advertise', to: '/Advertise' },
    { title: 'TikTok LIVE Creator Networks', to: '/TikTok LIVE Creator Networks' },
    { title: 'Developers', to: '/Developers' },
    { title: 'Transparency', to: '/Transparency' },
    { title: 'TikTok Rewards', to: '/TikTok Rewards' },
    { title: 'TikTok Embeds', to: '/TikTok Embeds' },
  ],
  HELP_LINKS: [
    { title: 'Help', to: '/Help' },
    { title: 'Safety', to: '/Safety' },
    { title: 'Terms', to: '/Terms' },
    { title: 'Privacy Policy', to: '/Privacy Policy' },
    { title: 'Privacy Center', to: '/Privacy Center' },
    { title: 'Creator Portal', to: '/Creator Portal' },
    { title: 'Community Guidelines', to: '/Community Guidelines' },
  ],
};

export const FOLLOWINGS_ACCOUNT_PAGE = {
  data: [
    {
      id: 1,
      first_name: '💃 Nightlife',
      last_name: 'Girl 💃',
      nickname: 'nightlifegirl',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
      tick: false,
      is_followed: true,
      followings_count: 1,
      followers_count: 65,
      likes_count: 1000,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-30 14:07:57',
      created_at: '2022-05-05 22:34:44',
      updated_at: '2022-05-05 23:12:44',
    },
    {
      id: 2,
      first_name: 'Đào Lê',
      last_name: 'Phương Hoa',
      nickname: 'hoaahanassii',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
      tick: true,
      is_followed: true,
      followings_count: 1,
      followers_count: 76,
      likes_count: 1000,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-30 14:08:03',
      created_at: '2022-05-05 23:10:05',
      updated_at: '2022-05-05 23:11:39',
    },
    {
      id: 3,
      first_name: 'Đinh',
      last_name: 'Trang Thảo',
      nickname: 'dinhtrangthao03',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
      tick: false,
      is_followed: true,
      followings_count: 1,
      followers_count: 113,
      likes_count: 1000,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-30 14:08:08',
      created_at: '2022-05-05 23:13:28',
      updated_at: '2022-05-05 23:14:23',
    },
    {
      id: 4,
      first_name: 'Le',
      last_name: 'Bong',
      nickname: 'lebong95',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
      tick: false,
      is_followed: true,
      followings_count: 1,
      followers_count: 68,
      likes_count: 1000,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-31 13:55:59',
      created_at: '2022-05-05 23:14:57',
      updated_at: '2022-05-05 23:15:53',
    },
    {
      id: 5,
      first_name: 'CiiN',
      last_name: 'NN',
      nickname: 'cciinnn',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/5/62739690f19f3.jpg',
      tick: true,
      is_followed: true,
      followings_count: 0,
      followers_count: 60,
      likes_count: 1000,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-31 13:56:02',
      created_at: '2022-05-05 23:17:39',
      updated_at: '2022-05-05 23:19:13',
    },
    {
      id: 6,
      first_name: '',
      last_name: '',
      nickname: 'hoang123',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/',
      tick: false,
      is_followed: true,
      followings_count: 1,
      followers_count: 55,
      likes_count: 1000,
      website_url: '',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-31 13:56:03',
      created_at: '2022-08-02 17:45:07',
      updated_at: '2022-08-02 17:45:07',
    },
    {
      id: 7,
      first_name: '',
      last_name: '',
      nickname: 'hoanghp0333',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/',
      tick: true,
      is_followed: true,
      followings_count: 0,
      followers_count: 46,
      likes_count: 1000,
      website_url: '',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-31 13:56:05',
      created_at: '2022-08-02 17:48:00',
      updated_at: '2022-08-02 17:48:00',
    },
    {
      id: 8,
      first_name: 'Sơn',
      last_name: 'Đập Tra',
      nickname: 'sondnf8',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/8/65564e989e190.jpg',
      tick: false,
      is_followed: true,
      followings_count: 19,
      followers_count: 144,
      likes_count: 16,
      website_url: 'https://fullstack.edu.vn/as',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-31 13:56:07',
      created_at: '2022-08-22 00:03:34',
      updated_at: '2024-01-31 14:05:12',
    },
    {
      id: 9,
      first_name: '',
      last_name: '',
      nickname: 'nguyenhoangtrung26092006',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/',
      tick: false,
      is_followed: true,
      followings_count: 0,
      followers_count: 53,
      likes_count: 0,
      website_url: '',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-30 14:07:52',
      created_at: '2022-08-22 00:04:06',
      updated_at: '2022-08-22 00:04:06',
    },
    {
      id: 10,
      first_name: 'Tai',
      last_name: 'Vo',
      nickname: 'phuoctai91',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/10/630267063d1b4.jpg',
      tick: true,
      is_followed: true,
      followings_count: 2,
      followers_count: 113,
      likes_count: 4,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      followed_at: '2024-01-31 13:56:12',
      created_at: '2022-08-22 00:04:07',
      updated_at: '2024-01-13 21:24:58',
    },
  ],
  meta: {
    pagination: {
      total: 10,
      count: 5,
      per_page: 5,
      current_page: 1,
      total_pages: 2,
      links: {
        previous: '',
        next: 'http://tiktok.fullstack.edu.vn/api/me/followings?page=2',
      },
    },
  },
};

export const MODAL_LOGIN_ITEM = [
  { icon: <QrIcon />, title: 'Sử dụng mã QR' },
  { icon: <ProfileIcon />, title: 'Số điện thoại / Email / TikTik ID' },
  { icon: <FacebookIcon />, title: 'Đăng nhập với Facebook' },
  { icon: <GoogleIcon />, title: 'Đăng nhập với Google' },
  { icon: <TwitterIcon />, title: 'Đăng nhập với Twitter' },
  { icon: <LineIcon />, title: 'Đăng nhập với LINE' },
  { icon: <KakaoTalkIcon />, title: 'Đăng nhập với KakaoTalk' },
  { icon: <AppleIcon />, title: 'Đăng nhập với Apple' },
];
