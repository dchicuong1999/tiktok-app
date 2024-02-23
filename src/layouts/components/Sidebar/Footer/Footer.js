import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import InteractiveLinks from './InteractiveLinks';

const cx = classNames.bind(styles);

function Footer({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <a
          className={cx('banner-link')}
          target='blank'
          href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v3&utm_source=tiktok_webapp_main"
        >
          <img
            className={cx('background')}
            src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
            alt=""
          />
          <div className={cx('title')}>
            {/* Tạo hiệu ứng TikTok, nhận phần thưởng */}
            <h4 className={cx('text')}>Create Tiktok effects, get a reward</h4> 
          </div>
        </a>
      </div>

      <InteractiveLinks data={data.ABOUT_LINKS} />

      <InteractiveLinks data={data.ADVERTISE_LINKS} />

      <InteractiveLinks data={data.HELP_LINKS} />

      <span className={cx('link')}>© 2024 TikTok</span>
    </div>
  );
}

export default Footer;
