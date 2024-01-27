import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ title }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('title')}>{title}</p>

      <div className={cx('content')}>
        <AccountItem />
        <AccountItem />
        <AccountItem />
      </div>

      <div className={cx('more-btn')}>See more</div>
    </div>
  );
}

FollowingAccounts.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FollowingAccounts;
