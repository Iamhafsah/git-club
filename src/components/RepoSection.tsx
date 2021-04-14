import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FindRepo from './FindRepo'
import PinnedItems from './PinnedItems'
import RepositoryItems from './RepositoryItems'
           

interface Props{
    repo?: any;
    pinned?:any;
    totalCount: number;
}

const RepoSection:React.FC <Props>= ({repo,pinned, totalCount}) => {
    return (
        <div className='repo-section'>
             <ul className='headings'>
            
                <li><ImportContactsIcon className='heading-icon'/> Overview</li>
             
                <li className='repo-active'> <CollectionsBookmarkOutlinedIcon className='heading-icon' /> Repositories <span className='repo-count'>{totalCount}</span></li>
                
                <li><MoveToInboxOutlinedIcon className='heading-icon'/> Pinned
                </li>
                
                <li> 
                <FolderOpenIcon className='heading-icon'/> Packages</li>
                
            </ul>

            <FindRepo/>

            <Router>
            <Switch>
            <Route path = '/home/pinned'>
            <section className='repo-info'>
                {pinned.edges.map((item:any, i:number)=>(
                    <PinnedItems key={i}
                    pinned={item}
                    />
                ))}
            </section>
            </Route>

            <Route exact path='/home'>
            <section>
                {repo.edges.map((item:any, i:any)=> (
                    <RepositoryItems key={i} 
                    repo= {item}   
                     />
                ))}
            </section>
            </Route>
            </Switch>
            
            </Router>
        </div>
    )
}

export default RepoSection
