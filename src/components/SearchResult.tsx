import React from 'react'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';


interface Props{
    name:string;
}

const SearchResult:React.FC <Props>= ({name}) => {


    return (
        <div className='search-result'>
          <CollectionsBookmarkOutlinedIcon/>  {name}
        </div>
    )
}

export default SearchResult
