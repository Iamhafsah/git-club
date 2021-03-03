import React from 'react'
import TimeAgo from 'timeago-react'
import {Typography} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';import StarOutlineIcon from '@material-ui/icons/StarOutline';

interface Props{
    repo: any;
}

const RepositoryItems:React.FC <Props> =({repo}) =>{
    const {node:{name, url, descriptionHTML, updatedAt, languages:{nodes:{name:repoLanguage
    }}}} = repo;


    return (
        <div className='repos'>
            <div>
                <div>
                    <a href={url}>
                    <p className="repo-name">{name}</p>
                    </a>

                    <Typography
                     className='description'
                        variant={'caption'}
                        dangerouslySetInnerHTML={{__html: descriptionHTML}}          
                    />
                </div>
                <div className='lang-div'>
                        <div>
                        <FiberManualRecordIcon className='circle-icon'/>
                        <span className='language-name'>JavaScript{repoLanguage}</span>
                        </div>
                 

                        <div className='updated-at'>Updated &nbsp;
                        <TimeAgo datetime={updatedAt}> <span>{updatedAt}</span>
                        </TimeAgo> 
                        </div>

                </div>
               
            </div>

            <div className='star-div'><StarOutlineIcon className='repo-star-icon'/>Star
            </div>
        </div>
    )
}

export default RepositoryItems
