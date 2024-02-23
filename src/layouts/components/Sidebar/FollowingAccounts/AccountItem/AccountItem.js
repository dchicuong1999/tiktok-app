import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';

import styles from './AccountItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { CheckIcon } from '~/components/Icons';
import PreviewItem from '../PreviewItem';
import Image from '~/components/Image';
import { memo } from 'react';

const cx = classNames.bind(styles);

const AccountItem = memo(({ data }) => {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <PreviewItem data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves
    // this by creating a new parentNode context.
    <div className={cx('wrapper')}>
      <TippyHeadless interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <span className={cx('image')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          </span>
          <div className={cx('info')}>
            <strong className={cx('info-item')}>
              <h4 className={cx('nickname')}>{data.nickname}</h4>
              <span className={cx('icon')}>{data.tick && <CheckIcon />}</span>
            </strong>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </TippyHeadless>
    </div>
  );
})

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
