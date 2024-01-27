import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import useDebounce from '~/hooks/useDebounce';
import * as searchServices from '~/services/searchService';
import SearchResult from './SearchResult';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchInputRef = useRef();

  const debouncedValue = useDebounce(searchValue, 600);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    const fetchApi = async () => {
      const result = await searchServices.search(debouncedValue);

      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleInputSearch = (e) => {
    const inputValue = e.target.value;
    
    if (!inputValue.startsWith(' ')) {
      setSearchValue(inputValue)
    }
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  const handleHideSearchResult = () => {
    setShowSearchResult(false);
  };

  const sendDataSearchResult = useCallback(() => {
    return <SearchResult data={searchResult} />
  }, [searchResult])

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves 
    // this by creating a new parentNode context. 
    <div className={cx('wrapper')}>
      <TippyHeadless
        interactive
        visible={showSearchResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {sendDataSearchResult()}
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
            onChange={handleInputSearch}
            onFocus={() => setShowSearchResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
            </button>
          )}
          {!!loading && <FontAwesomeIcon className={cx('loading-btn')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
