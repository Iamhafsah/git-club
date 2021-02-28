import React from 'react'
import SearchResult from './SearchResult'
import {useQuery} from "@apollo/react-hooks"
import {SEARCH_FOR_REPOS} from "./queries";

interface Props{
    searchTerm:string;
}

const SearchResultList:React.FC <Props> = ({searchTerm}) => {

    // the search result
    const {loading, error, data} = useQuery(SEARCH_FOR_REPOS, {variables:{search_term: searchTerm}});

    if (loading){
        return <div>Loading</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <div>
           {data.search.edges.map((item:any, i:any)=>(
               <SearchResult name={item}key={i}/>
           ))}
        </div>
    )
}

export default SearchResultList
