import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { CheckIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './PreviewItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function PreviewItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <span className={cx('image')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        </span>

        {data.is_followed ? (
          <Button className={cx('followed')} rounded rightIcon={<CheckIcon />}>
            Followed
          </Button>
        ) : (
          <Button primary>Follow</Button>
        )}
      </header>

      <div className={cx('content')}>
        <div className={cx('info')}>
          <strong className={cx('info-item')}>
            <h4 className={cx('nickname')}>{data.nickname}</h4>
            <span className={cx('icon')}>{data.tick && <CheckIcon />}</span>
          </strong>

          <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
        </div>

        <div className={cx('analytics')}>
          <span className={cx('followers')}>
            <strong className={cx('value')}>{data.followers_count}</strong>
            <p className={cx('label')}>Followers</p>
          </span>

          <span className={cx('likes')}>
            <strong className={cx('value')}>{data.likes_count}</strong>
            <p className={cx('label')}>Likes</p>
          </span>
        </div>
      </div>
    </div>
  );
}

PreviewItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PreviewItem;
