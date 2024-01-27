import PropTypes from 'prop-types';
import { Header, Sidebar, Footer } from '../components';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Container from '../components/Container';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />

      <Container>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </Container>

      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout;
