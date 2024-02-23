import classNames from 'classnames/bind';

import styles from './LoginModal.module.scss';
import LoginItem from './LoginItem';
import { MODAL_LOGIN_ITEM } from '~/data';

const cx = classNames.bind(styles);

function LoginModal({ parentCallback, }) {
  return (
    <div className={cx('modal')}>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <LoginItem data={MODAL_LOGIN_ITEM} parentCallback={parentCallback} >Đăng nhập vào TikTok</LoginItem>

          <div className={cx('policy')}>
            <p className={cx('text')}>
              Bằng việc tiếp tục với tài khoản có vị trí tại{' '}
              <a className={cx('area')} href="/#" target="blank">
                Vietnam
              </a>
              , bạn đồng ý với{' '}
              <a className={cx('policy-link')} href="https://www.tiktok.com/legal/page/row/terms-of-service/vi" target="blank">
                Điều khoản Sử dụng
              </a>
              , đồng thời xác nhận rằng bạn đã đọc{' '}
              <a className={cx('policy-link')} href="https://www.tiktok.com/legal/page/row/privacy-policy/vi" target="blank">
                Chính sách Quyền riêng tư
              </a>{' '}
              của chúng tôi.
            </p>
          </div>

          <div className={cx('register')}>
            <h4>Bạn chưa có tài khoản?</h4>
            <a href="/#" className={cx('register-link')}>
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
