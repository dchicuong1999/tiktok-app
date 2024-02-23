import PropTypes from 'prop-types';
// import { Header, Sidebar, } from '../components';
import { Header } from '../components';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Container from '../components/Container';
import LoginModal from '../components/LoginModal';
import { useState } from 'react';

const cx = classNames.bind(styles); 

function MainLayout({ children }) {
  const [userChooseLoginMethod, setUserChooseLoginMethod] = useState(false);
  const [guestLogin, setGuestLogin] = useState(false);

  const sendStateLogin = (childData) => {
    setUserChooseLoginMethod(childData);
  };

  const sendStateGuestLogin = (childData) => {
    setGuestLogin(childData);
    setUserChooseLoginMethod(false);
  };

  return (
    <div className={cx('wrapper')}>
      <Header
        parentCallback={sendStateLogin}
        loginState={userChooseLoginMethod}
        guestLoginState={guestLogin}
      />

      <Container>
        {/* <Sidebar /> */}

        <div className={cx('content')}>{children}</div>
      </Container>

      {userChooseLoginMethod && <LoginModal parentCallback={sendStateGuestLogin} />}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
