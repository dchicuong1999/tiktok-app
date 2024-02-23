import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function InteractiveLinks({ data }) {
  return (
    <div className={cx('contact')}>
      {data.map((item, index) => (
        <a key={index} className={cx('link')} href={item.to} target='blank'>{item.title}</a>
      ))}
    </div>
  );
}

export default InteractiveLinks;
