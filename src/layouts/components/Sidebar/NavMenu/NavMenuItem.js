import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; // Thẻ link có hỗ trợ active
import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

function NavMenuItem({ to, title, icon, iconActive }) {
  return (
    <NavLink
      className={(nav) =>
        cx('menu-item', {
          active: nav.isActive,
        })
      }
      to={to}
    >
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('icon-active')}>{iconActive}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

NavMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default NavMenuItem;
