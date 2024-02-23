import classNames from 'classnames/bind';
import NavMenuItem from './NavMenuItem';
import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

function NavMenu({ data }) {
  return (
    <nav className={cx('wrapper')}>
      {data.map((item, index) => {
        return (
          <NavMenuItem
            key={index}
            to={item.path}
            title={item.title}
            icon={item.icon}
            iconActive={item.iconActive}
            custom={item.custom}
          />
        );
      })}
    </nav>
  );
}

export default NavMenu;
