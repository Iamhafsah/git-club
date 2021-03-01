import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'


const FindRepo = () => {
    return(
        <div className='top-bar'>
            <input
            type='text'
            placeholder='Find a repository...'
            className='search-repo'
            />

            <select className='repo-type'>
            <option>Type: All </option>
           </select>

           <select className='repo-language'>
            <option>Language: All </option>
           </select>

           <button className='new-repo'> <CollectionsBookmarkOutlinedIcon className='new-repo-icon' /> New</button>
        </div>
    )
}

export default FindRepo