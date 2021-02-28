import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'
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
                <Link to='/'>
                <li> <CollectionsBookmarkOutlinedIcon/> Repositories <span className='repo-count'>{totalCount}</span></li>
                </Link>
                <Link to='/home/pinned'>
                <li><MoveToInboxOutlinedIcon/> Pinned</li>
                </Link>
                <Link to='/home/'>
                <li> 
                <MoveToInboxOutlinedIcon/> Packages</li>
                </Link>
            </ul>

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

            <Route exact path='/'>
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
