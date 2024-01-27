import classNames from 'classnames/bind';

import { CheckIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './PreviewItem.module.scss';

const cx = classNames.bind(styles);

function PreviewItem() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <span className={cx('image')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&x-expires=1706338800&x-signature=Q5twc0fCYDybs9aQwoKr%2Fiq8tnA%3D"
            alt="hoaahanassii"
          />
        </span>

        <Button primary>Follow</Button>
      </header>
      
      <div className={cx('content')}>
        <div className={cx('info')}>
          <strong className={cx('info-item')}>
            <h4 className={cx('nickname')}>hoaahanassii</h4>
            <span className={cx('icon')}>
              <CheckIcon />
            </span>
          </strong>

          <p className={cx('name')}>Lê Đào Phương Hoa</p>
        </div>

        <div className={cx('analytics')}>
          <span className={cx('followers')}>
            <strong className={cx('value')}>6.7M</strong>
            <p className={cx('label')}>Followers</p>
          </span>

          <span className={cx('likes')}>
            <strong className={cx('value')}>429.9M</strong>
            <p className={cx('label')}>Likes</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PreviewItem;
