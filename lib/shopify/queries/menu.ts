export const getMenuQuery = /* GraphQL */ `
  query getMenuQuery($handle: String!) {
  menu(handle: $handle) {
    items {
      title
      url
      items { # Fetch nested items
        title
        url
      }
    }
    }
  }
`;
