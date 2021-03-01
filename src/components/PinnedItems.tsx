import React from 'react'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import DragIndicatorOutlinedIcon from '@material-ui/icons/DragIndicatorOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

interface Props{
    pinned: any;
}

const PinnedItems:React.FC <Props> = ({pinned}) => {
    const {node:{name,primaryLanguage:{name:language}}} = pinned;

    return (
        <div className='pinned-item'>
            <div className='name-lang'>
                <div className='lang-container'><CollectionsBookmarkOutlinedIcon className="repo-icon"/> 
                <span className='repo-name'>{name}</span>
                </div>
                
                <div className='lang-container lang'>
                <FiberManualRecordIcon className="circle-icon"/>    {language}
                 </div>
            </div>     
      
            <DragIndicatorOutlinedIcon className="dot-icon"/>
        </div>
    )
}

export default PinnedItems
