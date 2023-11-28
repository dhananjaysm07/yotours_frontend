// DataContext.js
import React, { useContext, createContext } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_ATTRACTIONS_QUERY,
  GET_DESTINATIONS_QUERY,
  GET_TOURS_QUERY,
  GET_CONTENT_QUERY,
  GET_THINGS_QUERY,
} from "../graphql/query";
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const {
    loading: destinationLoading,
    error: destinationError,
    data: destinationData,
  } = useQuery(GET_DESTINATIONS_QUERY);
  const {
    loading: tourLoading,
    error: tourError,
    data: tourData,
  } = useQuery(GET_TOURS_QUERY);
  const {
    loading: attractionLoading,
    error: attractionError,
    data: attractionData,
  } = useQuery(GET_ATTRACTIONS_QUERY);

  //things
  const {
    loading: thingsLoading,
    error: thingsError,
    data: thingsData,
  } = useQuery(GET_THINGS_QUERY);

  const {
    loading: contentLoading,
    error: contentError,
    data: contentData,
  } = useQuery(GET_CONTENT_QUERY);

  const contextValue = {
    destinationData,
    destinationError,
    destinationLoading,
    tourData,
    tourLoading,
    tourError,
    attractionData,
    attractionLoading,
    attractionError,
    contentData,
    contentLoading,
    contentError,
    thingsData,
    thingsLoading,
    thingsError,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
