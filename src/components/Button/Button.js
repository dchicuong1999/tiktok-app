
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  large = false,
  small = false,
  disabled = false,
  to,
  href,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    to,
    href,
    onClick,
  };

  // Remove event
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  }

  if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    large,
    small,
    disabled,
  });

  return (
    <Comp className={classes} {...props} {...passProps}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('content')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
