
import { Link } from 'react-router-dom';

import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h1>Sidebar</h1>

      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/following">Following</Link>
      </li>

      <li>
        <Link to="/profile">Profile</Link>
      </li>

      <li>
        <Link to="/upload">Upload</Link>
      </li>

      <li>
        <Link to="/search">Search</Link>
      </li>
    </aside>
  );
}

export default Sidebar;
