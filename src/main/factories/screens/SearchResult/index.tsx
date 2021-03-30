import React, { useCallback } from "react";
import { SearchResult } from "../../../../presentation/screens";
import { makeLoadUserInfo } from "../../usecases";

const makeSearchResult: React.FC = () => {
  const loadUserInfo = useCallback((user: string) => {
    return makeLoadUserInfo(user);
  }, []);
  
  return <SearchResult loadUserInfo={loadUserInfo} />;
};

export default makeSearchResult;
