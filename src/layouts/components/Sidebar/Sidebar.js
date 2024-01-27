import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import NavMenu from './NavMenu';
import FollowingAccounts from './FollowingAccounts';
import Footer from './Footer';
import { NAV_MENU_ITEM } from '~/data';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('container')}>
        <NavMenu data={NAV_MENU_ITEM} />

        <FollowingAccounts title="Following Accounts" />

        <Footer />
      </div>
      <div className={cx('sidebar')}>
        <div className={cx('scroll-sidebar')}></div>
      </div>
    </aside>
  );
}

export default Sidebar;
