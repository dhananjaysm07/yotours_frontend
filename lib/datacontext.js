// DataContext.js
import React, { useContext, createContext, useMemo } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_ATTRACTIONS_QUERY,
  GET_DESTINATIONS_QUERY,
  GET_TOURS_QUERY,
  GET_CONTENT_QUERY,
  GET_THINGS_QUERY,
  GET_ALL_TAGS,
  GET_COUNTRIES_CONTINENTS_QUERY,
  GET_COUNTRIES_CONTINENTS_TOURS_QUERY,
  GET_COUNTRIES_CONTINENTS_ATTRACTIONS_QUERY,
  GET_CARS_QUERY,
} from "../graphql/query";
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  // const {
  //   loading: destCCLoading,
  //   error: destCCError,
  //   data: destCCData,
  // } = useQuery(GET_COUNTRIES_CONTINENTS_QUERY);

  // const {
  //   loading: tourCCLoading,
  //   error: tourCCError,
  //   data: tourCCData,
  // } = useQuery(GET_COUNTRIES_CONTINENTS_TOURS_QUERY);

  // const {
  //   loading: attCCLoading,
  //   error: attCCError,
  //   data: attCCData,
  // } = useQuery(GET_COUNTRIES_CONTINENTS_ATTRACTIONS_QUERY);
  // const {
  //   loading: destinationLoading,
  //   error: destinationError,
  //   data: destinationData,
  // } = useQuery(GET_DESTINATIONS_QUERY);
  // const {
  //   loading: tourLoading,
  //   error: tourError,
  //   data: tourData,
  // } = useQuery(GET_TOURS_QUERY);

  // const {
  //   loading: attractionLoading,
  //   error: attractionError,
  //   data: attractionData,
  // } = useQuery(GET_ATTRACTIONS_QUERY);

  // //things
  // const {
  //   loading: thingsLoading,
  //   error: thingsError,
  //   data: thingsData,
  // } = useQuery(GET_THINGS_QUERY);

  // const {
  //   loading: carsLoading,
  //   error: carsError,
  //   data: carsData,
  // } = useQuery(GET_CARS_QUERY);

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

  const contextValue = {
    // destCCLoading,
    // destCCError,
    // destCCData,
    // tourCCLoading,
    // tourCCError,
    // tourCCData,
    // attCCLoading,
    // attCCError,
    // attCCData,
    // destinationData,
    // destinationError,
    // destinationLoading,
    // tourData,
    // tourLoading,
    // tourError,
    // attractionData,
    // attractionLoading,
    // attractionError,
    contentData,
    contentLoading,
    contentError,
    // thingsData,
    // thingsLoading,
    // thingsError,
    // tagNameList,
    // carsData,
    // carsError,
    // carsLoading,
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
