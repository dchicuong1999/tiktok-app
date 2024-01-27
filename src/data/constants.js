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
} from '~/components/Icons';

export const LOCAL_STORAGE_DEFAULT = {
  jobInput: '',
  jobEditInput: '',
  jobList: [],
};

export const MENU_ITEMS = [
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
  ...MENU_ITEMS,
  {
    icon: <DarkModeIcon />,
    title: 'Dark mode',
  },
  {
    icon: <LogoutIcon />,
    title: 'Log out',
    active: 'LOG_OUT',
    separate: true,
  },
];

export const NAV_MENU_ITEM = [
  {
    path: config.routes.home,
    title: 'For You',
    icon: <ForYouIcon />,
    iconActive: <ForYouIconActive />,
  },
  {
    path: config.routes.following,
    title: 'Following',
    icon: <FollowingIcon />,
    iconActive: <FollowingIconActive />,
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
    icon: <ProfileIcon />,
    iconActive: <ProfileIconActive />,
  },
];
