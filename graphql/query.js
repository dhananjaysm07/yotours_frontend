import { gql } from "@apollo/client";
export const GET_DESTINATIONS_QUERY = gql`
  query GetDestinations {
    getDestinations {
      id
      destinationName
      description
      bannerImage
      isPopular
      continent
      country
      bannerHeading
      fromDate
      toDate
      fromOccasion
      toOccasion
      introduction
      images {
        id
        imageUrl
      }
      tours {
        id
      }
      attractions {
        id
      }
    }
  }
`;
export const GET_FILTERED_DESTINATION = gql`
  query GetFilteredDestination(
    $page: Int!
    $loadCount: Int!
    $filter: TourFilterInput!
  ) {
    getFilteredDestination(
      page: $page
      loadCount: $loadCount
      filter: $filter
    ) {
      destinations {
        id
        destinationName
        description
        bannerImage
        isPopular
        continent
        country
        bannerHeading
        fromDate
        toDate
        fromOccasion
        toOccasion
        introduction
        images {
          id
          imageUrl
        }
        tours {
          id
        }
        attractions {
          id
        }
      }
      totalCount
    }
  }
`;
// query GetDestinations {
//   getDestinations {
//     id
//     destinationName
//     continent
//     country
//     bannerImage
//     bannerHeading
//     description
//     images {
//       id
//       imageUrl
//     }
//     tours {
//       id
//       tourTitle
//       price
//       location
//       images {
//         id
//         imageUrl
//       }
//       destination {
//         id
//         destinationName
//       }
//       tag {
//         id
//         name
//         active
//       }

//     }
//     attractions {
//       id
//       attractionTitle
//       price
//       location
//       images {
//         id
//         imageUrl
//       }
//       tag {
//         id
//         name
//         active
//       }
//     }
//     tag {
//         id
//         name
//         active
//       }

//   }
// }

export const GET_DESTINATION = gql`
  query GetDestination($getDestinationId: String!) {
    getDestination(id: $getDestinationId) {
      id
      destinationName
      bannerImage
      bannerHeading
      continent
      country
      description
      images {
        id
        imageUrl
      }
      tag {
        id
        name
        active
      }
      tours {
        id
        tourTitle
        price
        currency
        location
        tourBokunId
        tag {
          id
          name
          active
        }
      }
      attractions {
        id
        attractionTitle
        price
        location
      }
    }
  }
`;

export const GET_TOURS_QUERY = gql`
  query GetTours {
    getTours {
      id
      tourTitle

      images {
        id
        imageUrl
      }
      tourHyperlink
      tourBokunId
      location
      destination {
        id
        destinationName
      }
      price
      currency
      tag {
        id
        name
        active
      }
    }
  }
`;

export const GET_FILTERED_TOURS = gql`
  query GetFilteredTours(
    $page: Int!
    $loadCount: Int!
    $filter: TourFilterInput!
  ) {
    getFilteredTours(page: $page, loadCount: $loadCount, filter: $filter) {
      tours {
        id
        tourTitle
        images {
          id
          imageUrl
        }
        tourHyperlink
        tourBokunId
        location
        destination {
          id
          destinationName
          fromDate
          toDate
        }
        price
        currency
        tag {
          id
          name
          active
        }
      }
      totalCount
    }
  }
`;

export const GET_ATTRACTIONS_QUERY = gql`
  query GetAttractions {
    getAttractions {
      id
      attractionTitle
      images {
        id
        imageUrl
      }
      location
      attractionBokunId
      attractionHyperlink
      destination {
        id
        destinationName
      }
      price
      currency
      tag {
        id
        name
        active
      }
    }
  }
`;

export const GET_CONTENT_QUERY = gql`
  query GetContent {
    getContent {
      id
      heroHeading
      heroSubheading
      heroImage
      footerLinks
      footerLogo
      socialLinks
      tnc
      privacy
      bokunChannelId
    }
  }
`;

export const GET_THINGS_QUERY = gql`
  query GetThings {
    getThings {
      id
      thingTitle
      thingDescription
      thingHyperlink
      destination {
        id
        destinationName
      }
      images {
        id
        imageUrl
      }
      tag {
        id
        name
      }
    }
  }
`;

export const GET_ALL_TAGS = gql`
  query GetAllTags {
    getAllTags {
      name
    }
  }
`;
