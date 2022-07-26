import React from "react";
import { StoreContext } from "Store/StoreProvider";
import { DatabaseManager } from "helpers/IndexedDB/indexedDB";

export function useDatabase(): DatabaseManager {
  const databaseManager = React.useContext(StoreContext);

  if (!databaseManager) {
    throw Error("DatabaseManager don't exist");
  }
  return databaseManager;
}
