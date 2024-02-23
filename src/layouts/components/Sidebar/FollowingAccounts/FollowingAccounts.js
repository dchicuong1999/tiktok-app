import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function FollowingAccounts({
  title,
  itemPerPage,
  isShowMore,
  lengthFollowingData,
  followingData = [],
  onChangeSeeMore = defaultFn,
}) {
  const [showMore, setShowMore] = useState(isShowMore); // false
  const [showLess, setShowLess] = useState(false); // false
  
  useEffect(() => {
    if (followingData.length > itemPerPage) {
      setShowMore(true);
    }

    if (followingData.length === lengthFollowingData) {
      setShowLess(true);
    }

    if (showLess) {
      setShowMore(false);
      setShowLess(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowMore, followingData]);

  const firstPage = (data) => {
    return data.slice(0, itemPerPage);
  };

  const renderFollowingAccounts = () => {
    return (
      <div>
        <p className={cx('title')}>{title}</p>

        {!followingData ? (
          <p className={cx('text')}>Accounts you follow will appear here</p>
        ) : (
          <>
            <div className={cx('content')}>
              {!showMore
                ? firstPage(followingData).map((user) => <AccountItem key={user.id} data={user} />)
                : followingData.map((user) => <AccountItem key={user.id} data={user} />)}
            </div>

            <div className={cx('more-btn')} onClick={onChangeSeeMore}>
              {!showLess ? 'Show more' : 'Show less'}
            </div>
          </>
        )}
      </div>
    );
  };

  return <div className={cx('wrapper')}>{renderFollowingAccounts()}</div>;
}

FollowingAccounts.propTypes = {
  title: PropTypes.string.isRequired,
  followingData: PropTypes.array.isRequired,
  itemPerPage: PropTypes.number,
  isShowMore: PropTypes.bool,
  lengthFollowingData: PropTypes.number,
  onChangeSeeMore: PropTypes.func,
};

export default FollowingAccounts;
