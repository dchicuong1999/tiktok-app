import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import { useState } from 'react';
import { DownIcon, UpIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function LoginItem({ data, parentCallback, children }) {
  const itemLess = data.slice(0, 4);
  const [isShowMore, setIsShowMore] = useState(false);
  const [itemShowMore, setItemShowMore] = useState(itemLess);

  const handleShowMore = () => {
    if (!isShowMore) {
      setItemShowMore(data);
      setIsShowMore(true);
    } else {
      setItemShowMore(itemLess);
      setIsShowMore(false);
    }
  };

  // useEffect(() => {
  //   const autoShowMore = setTimeout(() => {
  //     handleShowMore();
  //   }, 3000);

  //   return () => {
  //     clearTimeout(autoShowMore)
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const handleGuestLogin = () => {
    parentCallback(true);
  };

  return (
    <div className={cx('login')}>
      <h2 className={cx('login-title')}>{children}</h2>
      <div
        className={cx('login-container', {
          showMore: isShowMore,
        })}
      >
        {itemShowMore.map((item, index) => (
          <div key={index} className={cx('login-content')}>
            <div className={cx('option')}>
              <span className={cx('icon')}>{item.icon}</span>
              <div className={cx('title')}>{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={cx('show-more')}>
        <button className={cx('select')} onClick={handleShowMore}>
          {!isShowMore ? <DownIcon /> : <UpIcon />}
        </button>

        {!isShowMore ? (
          <>
            <div className={cx('or')}>
              <div className={cx('separate')} />
              <span className={cx('text')}>Hoặc</span>
              <div className={cx('separate')} />
            </div>

            <div className={cx('guest-login')}>
              <span className={cx('text')} onClick={handleGuestLogin}>Tiếp tục với tư cách là Khách</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default LoginItem;
