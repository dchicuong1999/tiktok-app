import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import NavMenu from './NavMenu';
import FollowingAccounts from './FollowingAccounts';
import Footer from './Footer';
import { SIDEBAR_FOOTER, SIDEBAR_NAV_MENU, FOLLOWINGS_ACCOUNT_PAGE } from '~/data';
import * as userService from '~/services/userService';
import SuggestAccounts from './SuggestAccounts';

const cx = classNames.bind(styles);

const ITEM_PER_PAGE = 3;
const COUNT_SEE_ALL_PAGE = 3;
const INIT_PAGE_SUGGEST = 1; // suggest accounts
const INIT_PAGE_FOLLOWING = 1; // following accounts

function Sidebar() {
  // const [showGoToTop, setShowGoToTop] = useState(false);
  // useEffect(() => {
  //     const handleScroll = () => {
  //     console.log(window.scrollY)
  //     setShowGoToTop(window.scrollY >= 335);
  //     }

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     }
  // }, [showGoToTop])

  const [pageSuggest, setPageSuggest] = useState(INIT_PAGE_SUGGEST); // 1
  const [isShowAll, setIsShowAll] = useState(false);
  const [suggestUser, setSuggestUser] = useState([]);

  const [pageFollowing, setPageFollowing] = useState(INIT_PAGE_FOLLOWING); // 1
  const [isShowMore, setIsShowMore] = useState(false);
  const [followingUser, setFollowingUser] = useState([]);
  const followingUserRef = useRef();

  // Suggest Accounts
  useEffect(() => {
    userService
      .getSuggest({ page: pageSuggest, perPage: ITEM_PER_PAGE })
      .then((data) => setSuggestUser((prev) => [...prev, ...data]))
      .catch((error) => console.log(error));
  }, [pageSuggest]);

  useEffect(() => {
    if (isShowAll && pageSuggest < COUNT_SEE_ALL_PAGE) {
      setPageSuggest((prev) => prev + 1);
    }
  }, [pageSuggest, isShowAll]);

  // Following Accounts
  useEffect(() => {
    followingServiceGetData()
      .then((data) => setFollowingUser((prev) => [...prev, ...data]))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFollowing]);

  const followingServiceGetData = async () => {
    try {
      const data = FOLLOWINGS_ACCOUNT_PAGE.data.map((accounts) =>
        !accounts.is_followed ? false : accounts,
      );
      const accounts = data.filter((data) => data.is_followed);
      followingUserRef.current = accounts.length;

      const firstElement = ITEM_PER_PAGE * (pageFollowing - 1);
      const lastElement = pageFollowing * ITEM_PER_PAGE;

      if (lastElement > accounts.length) {
        return accounts.slice(firstElement, accounts.length);
      } else {
        return accounts.slice(firstElement, lastElement);
      }
    } catch (error) {
      throw new Error("Couldn't find search result!");
    }
  };

  const handleShowAll = () => {
    if (isShowAll) return;
    setIsShowAll(true);
  };

  // memo + callback
  const handleSeeMore = () => {
    const lastPage = Math.ceil(followingUserRef.current / ITEM_PER_PAGE);
    if (pageFollowing < lastPage) {
      setPageFollowing((prev) => prev + 1);
    } else {
      setIsShowMore(true);
    }
  };

  return (
    <aside className={cx('wrapper')}>
      <div className={cx('container')}>
        <NavMenu data={SIDEBAR_NAV_MENU} />

        <SuggestAccounts
          title="Suggest Accounts"
          itemPerPage={ITEM_PER_PAGE}
          suggestData={suggestUser}
          isShowAll={isShowAll}
          onChangeOptionShowHide={!isShowAll ? handleShowAll : () => setIsShowAll(false)}
        />

        <FollowingAccounts
          title="Following Accounts"
          itemPerPage={ITEM_PER_PAGE}
          followingData={followingUser}
          lengthFollowingData={followingUserRef.current}
          isShowMore={isShowMore}
          onChangeSeeMore={!isShowMore ? handleSeeMore : () => setIsShowMore(false)}
        />

        <Footer data={SIDEBAR_FOOTER} />
      </div>

      <div className={cx('sidebar')}>
        <span className={cx('scroll-sidebar')} />
      </div>
    </aside>
  );
}

export default Sidebar;
