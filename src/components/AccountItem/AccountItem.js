import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d7f15c3acffb0911d6387a658396ce27~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705723200&x-signature=DyhHRS8ZyfcBzxhGuYDfsyX1iBg%3D"
        alt="dchicuong"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Duong Chi Cuong</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>dchicuong</span>
      </div>
    </div>
  );
}

export default AccountItem;
