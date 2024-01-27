import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faAdd } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import { MessageIcon, MoreMenuIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import styles from './Header.module.scss';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
  const [userLogin, setUserLogin] = useState(false);

  const handleChangeMenu = (item) => {
    if (item.active === 'LOG_OUT') {
      setUserLogin(false);
    }

    switch (item.type) {
      case 'language':
        item.selected = true;
        break;

      default:
        break;
    }
    console.log(item);
  };

  const handleLogin = () => {
    setUserLogin(true);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        {/* Logo */}
        <Link to={config.routes.home} className={cx('logo')}>
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
                  onClick={handleLogin}
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
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          )}

          {/* Menu Items */}
          <Menu stateLogin={userLogin} onChange={handleChangeMenu}>
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
