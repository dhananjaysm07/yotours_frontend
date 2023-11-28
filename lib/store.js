import {create} from 'zustand';
import { DateObject } from "react-multi-date-picker";

export const useFilterStore = create((set) => ({
  filterOption: 'tour',
  setFilterOption: (option) => set({ filterOption: option }),
  currencyFilter: 'USD',
  setCurrencyFilter: (currency) => set({ currencyFilter: currency }),
}));

export const useSearchStore = create((set) => ({
  filterOption: 'tour',
  setFilterOption: (option) => set({ filterOption: option }),
  destinationId: '',
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
    selectFilteredTours: (toursData) => set((state) => {
      // Here you would implement your filtering logic based on the state
      const { destinationId, guestCounts, dates } = state;
      console.log(destinationId);
      console.log(toursData)
      return toursData.filter((tour) => {
        // Implement the actual filtering logic here.
        // This is just an example based on destinationId.
        return tour.destination.id === destinationId;
        // Add more conditions based on guestCounts, dates, etc.
      });
    }),
}));

