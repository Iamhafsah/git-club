import React from 'react';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';

interface Props{
    login: string;
    name: string;
    bio: string;
    location: string;
    avatarUrl: string;
    twitterUsername: string;
    email: string;
    followers: number;
    following: number;
    starredRepositories: number;
}

const ProfileSection:React.FC <Props> = ({
login, name, bio, location, avatarUrl,twitterUsername, email, followers,following, starredRepositories}) => {

    return (
           <section className='profile'>
               <div className='profile-top'>
                   <img src={avatarUrl} alt='user avatar'/>

                   <div className='names'>
                       <h1>{name}</h1>
                       <span>{login}</span>
                   </div>
               </div>

               <div className='profile-bottom'>
                    <span>{bio}</span>
                    <p className='edit-profile'>Edit profile</p>
                   <div className='profile-bottom-div'>
                       <div className='follower-info'>
                           <PeopleOutlineIcon className='icons'/>{followers} followers.{following} following.<StarOutlineIcon
                           className='icons'
                           /> {starredRepositories}
                        </div>
                        
                        <div>
                        {location && (
                            <div className='location'><LocationOnIcon className='icons'/>{location}</div>
                        )}
                       
                        {email && (
                                <div className='email'><MailOutlineIcon className='icons'/>{email}</div>
                        )}
                      
                        {twitterUsername && (
                                <div className= 'twitter'><TwitterIcon className='icons'/> @{twitterUsername}</div>
                        )}
                        </div>
                 </div>
               </div>
           </section>
    )
}

export default ProfileSection
