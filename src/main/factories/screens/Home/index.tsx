import React, { useCallback } from "react";
import { Home } from "../../../../presentation/screens";
import { makeLoadUserInfo } from "../../usecases";

const makeHome: React.FC = () => {
  const loadUserInfo = useCallback((user: string) => {
    return makeLoadUserInfo(user);
  }, []);

  return <Home loadUserInfo={loadUserInfo} />;
};

export default makeHome;
