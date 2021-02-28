import React from 'react'
import {Typography} from "@material-ui/core";
  import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';import StarOutlineIcon from '@material-ui/icons/StarOutline';

interface Props{
    repo: any;
}

const RepositoryItems:React.FC <Props> =({repo}) =>{
    const {node:{name, url, descriptionHTML, updatedAt, languages:{nodes:{name:repoLanguage}} }} = repo;
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
                   <span>{repoLanguage}</span>
                    <span>updated {updatedAt}</span>
                </div>
               
            </div>

            <div className='star-div'><StarOutlineIcon/>Star</div>
        </div>
    )
}

export default RepositoryItems
