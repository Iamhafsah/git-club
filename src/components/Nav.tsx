import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchBar from './SearchBar'

const navItems = ["Pull requests", "Issues", "Marketplace", "Explore"]

interface Props{
    avatarUrl: string;
    value: string;
    onChange: any;
}
const Nav:React.FC <Props> =({avatarUrl, value, onChange}) => {
    return (
        <nav className='header'>
            <div className='nav-left'>
                <GitHubIcon className='github-icon'/>
               <SearchBar 
               value={value}
               onChange={onChange}/>
               
                <ul className='nav-ul'>
                    {navItems.map((item, i)=>(
                        <li className='nav-item' key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className='nav-right'>
                <NotificationsNoneIcon className='bell-icon icon'/>

                <div>
                    <AddIcon  className='add-icon icon' />
                    <ArrowDropDownIcon  className='arrow-icon icon'/>
                </div>

                <div>
                        <img src={avatarUrl} alt='little-avatar' className='little-avatar'/>
                 
                    <ArrowDropDownIcon className='arrow-icon icon'/>
                </div>
            </div>
        </nav>
    )
}

export default Nav
