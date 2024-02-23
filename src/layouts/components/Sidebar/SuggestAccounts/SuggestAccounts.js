import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from '../FollowingAccounts/AccountItem';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function SuggestAccounts({
  title,
  itemPerPage,
  isShowAll,
  suggestData = [],
  onChangeOptionShowHide = defaultFn,
}) {
  const firstPage = (data) => {
    return data.slice(0, itemPerPage);
  };

  const renderSuggestAccounts = () => {
    return (
      <div>
        <p className={cx('title')}>{title}</p>

        {suggestData && (
          <>
            <div className={cx('content')}>
              {!isShowAll
                ? firstPage(suggestData).map((user) => <AccountItem key={user.id} data={user} />)
                : suggestData.map((user) => <AccountItem key={user.id} data={user} />)}
            </div>

            <div className={cx('more-btn')} onClick={onChangeOptionShowHide}>
              {!isShowAll ? 'Show all' : 'Show less'}
            </div>
          </>
        )}
      </div>
    );
  };

  return <div className={cx('wrapper')}>{renderSuggestAccounts()}</div>;
}

SuggestAccounts.propTypes = {
  title: PropTypes.string.isRequired,
  suggestData: PropTypes.array.isRequired,
  itemPerPage: PropTypes.number,
  isShowAll: PropTypes.bool,
  onChangeOptionShowHide: PropTypes.func,
};

export default SuggestAccounts;
