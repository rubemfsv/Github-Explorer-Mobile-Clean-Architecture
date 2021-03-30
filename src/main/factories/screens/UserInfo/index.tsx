import React, { useCallback } from "react";
import { UserInfo } from "../../../../presentation/screens";
import { makeLoadUserRepositoryList } from "../../usecases";

const makeUserInfo: React.FC = () => {
  const loadUserRepositoryList = useCallback((user: string) => {
    return makeLoadUserRepositoryList(user);
  }, []);

  return <UserInfo loadUserRepositoryList={loadUserRepositoryList} />;
};

export default makeUserInfo;
