import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faAdd, } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import styles from './Header.module.scss';
import {
  LanguagesIcon,
  MessageIcon,
  MoreMenuIcon,
  FeedbackIcon,
  ProfileIcon,
  FavoritesIcon,
  CoinsIcon,
  LiveStudioIcon,
  LiveCreatorHubIcon,
  SettingsIcon,
  DarkModeIcon,
  KeyboardIcon,
  InboxIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguagesIcon />,
    title: 'English',
    children: {
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

const USER_LOGIN_MENU_ITEMS = [
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
    icon: <KeyboardIcon />,
    title: 'Log out',
    separate: true,
  },
];

function Header() {
  const [userLogin, setUserLogin] = useState(true);

  const handleChangeMenu = (item) => {
    switch (item.type) {
      case 'language':
        item.selected = true;
        break;

      default:
        break;
    }
    console.log(item);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        {/* Logo */}
        <Link to="/">
          <img src={images.logoTiktok} alt="Logo-Tiktok" />
        </Link>

        {/* Search */}
        <Search />

        {/* Actions */}
        <div className={cx('actions')}>
          {!userLogin ? (
            <>
              {/* Chưa login */}
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <Button outline to="/upload" leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                  Upload
                </Button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Login" placement="bottom">
                <Button
                  primary
                  leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                  onClick={() => {
                    setUserLogin(!userLogin);
                  }}
                >
                  Login
                </Button>
              </Tippy>
            </>
          ) : (
            <>
              {/* Đã login */}
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <Button outline to="/upload" leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                  Upload
                </Button>
              </Tippy>

              <Tippy delay={[0, 100]} content="Message" placement="bottom">
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <InboxIcon width="3rem" height="3rem" />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          )}

          {/* Menu Items */}
          <Menu
            menuItems={!userLogin ? MENU_ITEMS : USER_LOGIN_MENU_ITEMS}
            onChange={handleChangeMenu}
          >
            {!userLogin ? (
              <button className={cx('actions-btn')}>
                <MoreMenuIcon className={cx('menu-btn')} />
              </button>
            ) : (
              <Image
                className={cx('user-avatar')}
                src=""
                alt="dchicuong"
                fallback={images.gauGauImage}
              />
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
