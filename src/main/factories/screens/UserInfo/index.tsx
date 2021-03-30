import React, { useCallback } from "react";
import { UserInfo } from "../../../../presentation/screens";
import {
  makeLoadUserFollowersList,
  makeLoadUserFollowingList,
  makeLoadUserGistList,
  makeLoadUserRepositoryList,
} from "../../usecases";

const makeUserInfo: React.FC = () => {
  const loadUserRepositoryList = useCallback((user: string) => {
    return makeLoadUserRepositoryList(user);
  }, []);

  const loadUserGistList = useCallback((user: string) => {
    return makeLoadUserGistList(user);
  }, []);

  const loadUserFollowersList = useCallback((user: string) => {
    return makeLoadUserFollowersList(user);
  }, []);

  const loadUserFollowingList = useCallback((user: string) => {
    return makeLoadUserFollowingList(user);
  }, []);

  return (
    <UserInfo
      loadUserRepositoryList={loadUserRepositoryList}
      loadUserFollowingList={loadUserFollowingList}
      loadUserFollowersList={loadUserFollowersList}
      loadUserGistList={loadUserGistList}
    />
  );
};

export default makeUserInfo;
