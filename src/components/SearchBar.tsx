import React from 'react'

interface Props{
    value:string;
    onChange: any;
}
const SearchBar:React.FC <Props> = ({value, onChange}) => {
    return (
        <input 
        type='search'
        placeholder='Search or jump to...'
        value={value}
        onChange={e => onChange(e.target.value)}
        />
    )
}

export default SearchBar
