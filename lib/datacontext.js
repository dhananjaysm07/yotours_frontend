// DataContext.js
import React, { useContext, createContext } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_ATTRACTIONS_QUERY,
  GET_DESTINATIONS_QUERY,
  GET_TOURS_QUERY,
  GET_FILTERED_TOURS,
  GET_CONTENT_QUERY,
  GET_THINGS_QUERY,
  GET_ALL_TAGS,
  GET_FILTERED_DESTINATION,
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

  const {
    loading: tagLoading,
    error: tagError,
    data: tagNameList,
  } = useQuery(GET_ALL_TAGS);

  const {
    loading: tourFilteredLoading,
    error: tourFilteredError,
    data: tourFilteredData,
    refetch,
  } = useQuery(GET_FILTERED_TOURS, {
    variables: {
      page: 0,
      loadCount: 0,
      filter: {
        priceMin: null,
        startDate: null,
        priceMax: null,
        location: null,
        endDate: null,
        tagName: [],
        continent: [],
      },
    },
  });
  const {
    loading: destinationFilteredLoading,
    error: destinationFilteredError,
    data: destinationFilteredData,
    refetch: refetchFilteredDestination,
  } = useQuery(GET_FILTERED_DESTINATION, {
    variables: {
      page: 0,
      loadCount: 0,
      filter: {
        priceMin: null,
        startDate: null,
        priceMax: null,
        location: null,
        endDate: null,
        tagName: [],
        continent: [],
      },
    },
  });

  const contextValue = {
    destinationData,
    destinationError,
    destinationLoading,
    tourData,
    tourLoading,
    tourError,
    tourFilteredData,
    tourFilteredError,
    tourFilteredLoading,
    attractionData,
    attractionLoading,
    attractionError,
    contentData,
    contentLoading,
    contentError,
    thingsData,
    thingsLoading,
    thingsError,
    tagNameList,
    refetch,
    destinationFilteredLoading,
    destinationFilteredError,
    destinationFilteredData,
    refetchFilteredDestination,
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
