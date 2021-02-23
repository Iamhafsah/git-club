import gql from 'graphql-tag';

export const SEARCH_FOR_REPOS = gql`
query($search_term: String!){
    search(query: $search_term, type:REPOSITORY, first: 10){
        repositoryCount,
        edges{
            node{
                ...on Repository{
                    name,
                    owner{
                        login
                    },
                    stargazers{
                        totalCount
                    },
                    descriptionHTML,
                }
            }
        }
    }
}`;


export const GET_USER_PROFILE = gql` 
query($profileName: String!){
  user(login: $profileName){
    login
    name
    bio
    location
    avatarUrl
    twitterUsername
    email
    bio
    starredRepositories{
      totalCount
    }
    followers{
        totalCount
    }
    following{
        totalCount
    }
    pinnedItems(first:6, types: [REPOSITORY, GIST]){
      edges{
        node{
          ...on Repository{
            name
            primaryLanguage{
              name
            }
          }
        }
      }
    }
    repositories (last: 6){
      totalCount
      edges{
        node{
          name
          url
          descriptionHTML
          updatedAt
          languages(first:1){
            nodes{
              name
            }
          }
        }
      }
    } 
  }
`