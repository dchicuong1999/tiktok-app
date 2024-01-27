import { memo } from "react";
import AccountItem from "../AccountItem";

const SearchResult = memo(({ data }) => {
  return (
    data.map((result) => (
      <AccountItem key={result.id} data={result} />
    ))
  );
})

export default SearchResult;
