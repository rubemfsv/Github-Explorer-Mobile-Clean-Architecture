import React, { useCallback } from "react";
import { SearchResult } from "../../../../presentation/screens";
import { makeLoadUserRepositoryList } from "../../usecases";

const makeSearchResult: React.FC = () => {
  const loadUserRepositoryList = useCallback((user: string) => {
    return makeLoadUserRepositoryList(user);
  }, []);

  return <SearchResult loadUserRepositoryList={loadUserRepositoryList} />;
};

export default makeSearchResult;
