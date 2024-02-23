import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './OnlyHeader.module.scss';
import { Header, } from '../components';
import Container from '../components/Container';

const cx = classNames.bind(styles);

function OnlyHeader({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            
            <Container>
               {children}
            </Container>
        </div>
    );
}

OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
}

export default OnlyHeader;
