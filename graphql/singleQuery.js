import { gql } from "@apollo/client";

export const GET_SINGLE_DESTINATION = gql`
  query GetDestination($getDestinationId: String!) {
    getDestination(id: $getDestinationId) {
      id
      destinationName
      continent
      country
      bannerImage
      bannerHeading
      description
      isPopular
      fromDate
      toDate
      fromOccasion
      toOccasion
      images {
        id
        imageUrl
      }
      priority
      tag {
        id
        name
        active
      }
      tours {
        id
        active
        tourTitle

        images {
          id
          imageUrl
        }
        tourHyperlink
        tourBokunId
        location
        price
        currency
        tag {
          id
          name
          active
        }
      }
      attractions {
        id
        active
        attractionTitle
        images {
          id
          imageUrl
        }
        location
        attractionBokunId
        attractionHyperlink
        price
        currency
        tag {
          id
          name
          active
        }
      }
      introduction
      things {
        active
        id
        thingTitle
        thingDescription
        thingHyperlink
        images {
          id
          imageUrl
        }
        tag {
          id
          name
        }
      }
      cars {
        id
        active
        carTitle
        carDescription
        carHyperlink
        carBokunId
        images {
          id
          imageUrl
        }
        tag {
          id
          name
        }
        price
        currency
      }
    }
  }
`;
