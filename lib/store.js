import { create } from "zustand";
import { DateObject } from "react-multi-date-picker";

export const useFilterStore = create((set) => ({
  filterOption: "tour",
  setFilterOption: (option) => set({ filterOption: option }),
  currencyFilter: "USD",
  setCurrencyFilter: (currency) => set({ currencyFilter: currency }),
}));

export const useSearchStore = create((set) => ({
  filterOption: "tour",
  setFilterOption: (option) => set({ filterOption: option }),
  destinationId: "",
  setDestinationId: (id) => set({ destinationId: id }),

  // Adding dates to the Zustand store
  dates: [
    new DateObject().setDay(5),
    new DateObject().setDay(14).add(1, "month"),
  ],
  setDates: (newDates) => set({ dates: newDates }),
  guestCounts: {
    Adults: 2,
    Children: 1,
    Rooms: 1,
  },

  // Setter function for guest counts
  setGuestCounts: (name, value) =>
    set((state) => ({
      guestCounts: {
        ...state.guestCounts,
        [name]: value,
      },
    })),
  selectFilteredTours: (toursData) =>
    set((state) => {
      // Here you would implement your filtering logic based on the state
      const { destinationId, guestCounts, dates } = state;
      console.log(destinationId);
      console.log(toursData);
      return toursData.filter((tour) => {
        // Implement the actual filtering logic here.
        // This is just an example based on destinationId.
        return tour.destination.id === destinationId;
        // Add more conditions based on guestCounts, dates, etc.
      });
    }),
}));

export const useTourPaginationStore = create((set) => ({
  totalPage: 0, ///Total page from the frontend perspective
  currentPage: 0,
  totalPageLoaded: 0, ////Total page from the backend perspective
  totalResult: 0,
  dataPerPage: 6,
  loadCount: 6 * 3, ////Total number of tours to load per api fetch
  tourList: [],
  setTourPaginationData: (
    totalPage,
    currentPage,
    totalPageLoaded,
    totalResult,
    tourList
  ) =>
    set((state) => {
      return {
        ...state,
        totalPage,
        currentPage,
        totalPageLoaded,
        totalResult,
        tourList,
      };
    }),
  setCurrentPage: (currentPage) =>
    set((state) => {
      return { ...state, currentPage };
    }),
  setTourData: (newData, totalPageLoaded) =>
    set((state) => {
      return {
        ...state,
        totalPageLoaded,
        tourList: [...state?.tourList, ...newData],
      };
    }),
}));

export const useTourFilterStore = create((set) => ({
  startTime: null,
  endTime: null,
  priceMax: 100000,
  location: null,
  priceMin: 0,
  continent: [],
  tagName: [],
  // setStartTime
  setPriceMin: (priceMin) => set((state) => ({ ...state, priceMin })),
  setPriceMax: (priceMax) => set((state) => ({ ...state, priceMax })),
  setLocation: (location) => set((state) => ({ ...state, location })),
  setTag: (tagName) =>
    set((state) => ({ ...state, tagName: [...state.tagName, tagName] })),
  setContinent: (continent) =>
    set((state) => ({ ...state, continent: [...state.continent, continent] })),
  removeTag: (tagName) =>
    set((state) => ({
      ...state,
      tagName: state.tagName.filter((el) => el != tagName),
    })),
  removeContinent: (continent) =>
    set((state) => ({
      ...state,
      continent: state.continent.filter((el) => el != continent),
    })),
}));

export const useDestinationPaginationStore = create((set) => ({
  totalPage: 0, ///Total page from the frontend perspective
  currentPage: 0,
  totalPageLoaded: 0, ////Total page from the backend perspective
  totalResult: 0,
  dataPerPage: 6,
  loadCount: 6 * 3, ////Total number of tours to load per api fetch
  destinationList: [],
  setDestinationPaginationData: (
    totalPage,
    currentPage,
    totalPageLoaded,
    totalResult,
    destinationList
  ) =>
    set((state) => {
      return {
        ...state,
        totalPage,
        currentPage,
        totalPageLoaded,
        totalResult,
        destinationList,
      };
    }),
  setCurrentPage: (currentPage) =>
    set((state) => {
      return { ...state, currentPage };
    }),
  setDestinationData: (newData, totalPageLoaded) =>
    set((state) => {
      return {
        ...state,
        totalPageLoaded,
        destinationList: [...state?.destinationList, ...newData],
      };
    }),
}));

export const useDestinationFilterStore = create((set) => ({
  startTime: null,
  endTime: null,
  priceMax: 100000,
  location: null,
  priceMin: 0,
  continent: [],
  tagName: [],
  // setStartTime
  setPriceMin: (priceMin) => set((state) => ({ ...state, priceMin })),
  setPriceMax: (priceMax) => set((state) => ({ ...state, priceMax })),
  setLocation: (location) => set((state) => ({ ...state, location })),
  setTag: (tagName) =>
    set((state) => ({ ...state, tagName: [...state.tagName, tagName] })),
  setContinent: (continent) =>
    set((state) => ({ ...state, continent: [...state.continent, continent] })),
  removeTag: (tagName) =>
    set((state) => ({
      ...state,
      tagName: state.tagName.filter((el) => el != tagName),
    })),
  removeContinent: (continent) =>
    set((state) => ({
      ...state,
      continent: state.continent.filter((el) => el != continent),
    })),
}));
