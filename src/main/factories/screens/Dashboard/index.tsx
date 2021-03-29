import React, { useCallback } from "react";
import { Dashboard } from "../../../../presentation/screens";
import { makeLoadUserRepositoryList } from "../../usecases";

const makeDashboard: React.FC = () => {
  const loadUserRepositoryList = useCallback((id: string) => {
    return makeLoadUserRepositoryList(id);
  }, []);

  return <Dashboard loadUserRepositoryList={loadUserRepositoryList} />;
};

export default makeDashboard;
