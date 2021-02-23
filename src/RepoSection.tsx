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
    repo: any;
    pinned:any;
  
  
}
const RepoSection:React.FC <Props>= ({repo,pinned}) => {
    return (
        <div className='repo-section'>
             <ul className='headings'>
                <Link to='/'>
                <li> <CollectionsBookmarkOutlinedIcon/> Repositories</li>
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
                {pinned.edges.map((item, i)=>(
                    <PinnedItems pinned={item} key={i}/>
                ))}
            </section>
            </Route>
            <Route exact path='/'>
            <section>
                {repo.edges.map((item, i)=> (
                    <RepositoryItems repo={item} key={i}/>
                ))}
            </section>
            </Route>
            </Switch>
            
            </Router>
        </div>
    )
}

export default RepoSection
