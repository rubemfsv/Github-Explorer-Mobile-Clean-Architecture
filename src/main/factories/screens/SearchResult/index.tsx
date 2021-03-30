import React, { useCallback } from "react";
import { SearchResult } from "../../../../presentation/screens";
import { makeLoadUserRepositoryList } from "../../usecases";

const makeSearchResult: React.FC = () => {
  return <SearchResult />;
};

export default makeSearchResult;
