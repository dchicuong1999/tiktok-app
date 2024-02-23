import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { MENU_ITEMS, USER_LOGIN_MENU_ITEMS } from '~/data';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ stateLogin = false, hideOnClick = false, children, onChange = defaultFn }) {
  const checkStateLogin = () =>
    !stateLogin ? [{ data: MENU_ITEMS }] : [{ data: USER_LOGIN_MENU_ITEMS }];

  const [history, setHistory] = useState(() => checkStateLogin());

  useEffect(() => {
    setHistory(checkStateLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateLogin]);

  const titleChildren = useRef();

  const currentMenu = history[history.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;

      const handleRenderChildrenItems = () => {
        if (isParent) {
          setHistory((prev) => {
            titleChildren.current = item.children.title;
            return [...prev, item.children];
          });
        } else {
          onChange(item); // Header layouts
        }
      };

      return <MenuItem key={index} data={item} onClick={handleRenderChildrenItems} />;
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.splice(0, prev.length - 1));
  };

  const renderMenu = (attrs) => (
    <div className={cx('content')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <HeaderMenu title={titleChildren.current} onBack={handleBack} />}
        {<div className={cx('menu-item-list')}>{renderItems()}</div>}
      </PopperWrapper>
    </div>
  );

  // Back to first page
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={renderMenu}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  stateLogin: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
