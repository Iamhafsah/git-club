import React from 'react'
import {Typography} from "@material-ui/core";
  import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';import StarOutlineIcon from '@material-ui/icons/StarOutline';

interface Props{
    name: string;
    url?: string;
    descriptionHTML: string;
    updatedAt: any;
    languages: string;
}
const RepositoryItems:React.FC <Props> =({
    name, url, descriptionHTML, updatedAt, languages
}) =>{
   
    return (
        <div className='repos'>
            <div>
                <div>
                    <p className="repo-name">{name}</p>
                    <Typography
                     className='description'
                        variant={'caption'}
                        dangerouslySetInnerHTML={{__html: descriptionHTML}}          
                    />
                </div>
                <div className='lang-div'>
                    <FiberManualRecordIcon className='circle-icon'/>
                   <span>{languages}</span>
                    <span>updated {updatedAt}</span>
                </div>
               
            </div>

            <div className='star-div'><StarOutlineIcon/>Star</div>
        </div>
    )
}

export default RepositoryItems
