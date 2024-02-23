import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faAdd, faUserSecret } from '@fortawesome/free-solid-svg-icons';
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

function Header({ parentCallback = () => {}, loginState, guestLoginState }) {
  const [userLogin, setUserLogin] = useState(true);

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
    parentCallback(true);
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
              <Button outline to="/upload" leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                Upload
              </Button>

              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} onClick={handleLogin}>
                Login
              </Button>
            </>
          ) : (
            <>
              <Button outline to="/upload" leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                Upload
              </Button>

              <Tippy delay={[0, 100]} content="Message" placement="bottom">
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <InboxIcon  width='3rem' height='3rem' />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          )}

          {/* Menu Items */}
          <Menu stateLogin={userLogin} onChange={handleChangeMenu}>
            {!userLogin ? (
              guestLoginState ? (
                <Tippy delay={[0, 100]} content="Anonymous" placement="bottom">
                  <button className={cx('actions-btn')}>
                    <FontAwesomeIcon width={24} height={24} icon={faUserSecret} />
                  </button>
                </Tippy>
              ) : (
                <button className={cx('actions-btn')}>
                  <MoreMenuIcon />
                </button>
              )
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
