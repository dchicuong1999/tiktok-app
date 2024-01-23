import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import useDebounce from '~/hooks/useDebounce';
import * as searchServices from '~/api-services/searchServices';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchInputRef = useRef();

  const debounced = useDebounce(searchValue, 600);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    
    setLoading(true);
    const fetchApi = async () => {
      const result = await searchServices.search(debounced);

      setSearchResult(result);
      
      setLoading(false);
    };
    
    fetchApi();
    
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  const handleHideSearchResult = () => {
    setShowSearchResult(false);
  };

  return (
    <div>
      <TippyHeadless
        interactive
        visible={showSearchResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideSearchResult}
      >
        <div className={cx('search')}>
          <input
            value={searchValue}
            ref={searchInputRef}
            placeholder="Search accounts anh videos..."
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowSearchResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
            </button>
          )}
          {!!loading && <FontAwesomeIcon className={cx('loading-btn')} icon={faSpinner} />}

          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
