import React, { ReactNode } from "react";
import { DatabaseManager } from "helpers/IndexedDB/indexedDB";

interface IProps {
  children: ReactNode;
}

export const StoreContext = React.createContext<DatabaseManager | null>(null);

StoreContext.displayName = "RootStore";

export const StoreProvider: React.FC<IProps> = ({ children }) => {
  return (
    <StoreContext.Provider
      value={new DatabaseManager("todo-list-database", ["todo", "done"])}
    >
      {children}
    </StoreContext.Provider>
  );
};
