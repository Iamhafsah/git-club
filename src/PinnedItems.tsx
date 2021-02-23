import React from 'react'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import DragIndicatorOutlinedIcon from '@material-ui/icons/DragIndicatorOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

interface Props{
    name: string;
    primaryLanguage: string;
}

const PinnedItems:React.FC <Props> = ({
name, primaryLanguage
}) => {

    return (
        <div className='pinned-item'>
            <div className='name-lang'>
                <div className='lang-container'><CollectionsBookmarkOutlinedIcon className="repo-icon"/> 
                <span className='repo-name'>{name}</span>
                </div>
                
                <div className='lang-container lang'>
                <FiberManualRecordIcon className="circle-icon"/>    {primaryLanguage}
                 </div>
            </div>     
      
            <DragIndicatorOutlinedIcon className="dot-icon"/>
        </div>
    )
}

export default PinnedItems
