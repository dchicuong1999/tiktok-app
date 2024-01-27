import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';

import styles from './AccountItem.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { CheckIcon } from '~/components/Icons';
import PreviewItem from '../PreviewItem';

const cx = classNames.bind(styles);

function AccountItem() {
  const handleShowInfo = () => {};  

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <PreviewItem />
        </PopperWrapper>
      </div>
    );
  };
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      <TippyHeadless
        interactive
        delay={[800, 0]}
        placement="bottom"
        render={renderPreview}
        onClickOutside={handleShowInfo}
      >
        <div className={cx('account-item')}>
          <span className={cx('image')}>
            <img
              className={cx('avatar')}
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&x-expires=1706338800&x-signature=Q5twc0fCYDybs9aQwoKr%2Fiq8tnA%3D"
              alt="hoa"
            />
          </span>
          <div className={cx('info')}>
            <strong className={cx('info-item')}>
              <h4 className={cx('nickname')}>hoaahanassii</h4>
              <span className={cx('icon')}>
                <CheckIcon />
              </span>
            </strong>
            <p className={cx('name')}>Lê Đào Phương Hoa</p>
          </div>
        </div>
      </TippyHeadless>
    </div>
  );
}

AccountItem.propTypes = {
  children: PropTypes.node,
};

export default AccountItem;
