import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { CheckIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src={data.avatar}
        alt={data.full_name}
        fallback={images.gauGauImage}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          <span className={cx('tick')}>{data.tick && <CheckIcon />}</span>
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem;
