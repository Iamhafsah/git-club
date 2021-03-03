import React from 'react'
import {useQuery} from "@apollo/react-hooks"
import Nav from './Nav'
import ProfileSection from './ProfileSection'
import RepoSection from './RepoSection'
import {CircularProgress} from "@material-ui/core";
import {GET_USER_PROFILE} from "../queries";


interface Props{
    input:string;
}

const HomePage: React.FC <Props> = ({input}) => {
 

    // user info 
    const {loading, error, data} = useQuery(GET_USER_PROFILE, {variables: {profileName: input}})



if(loading){
    return <div> <CircularProgress/> </div>
}
if(error){
    return <div>An error occurred. Please check your information and try again.</div>
}
if(!data.user){
    return <div>No user found</div>
}
    return (
        <div >
            
            <Nav 
            avatarUrl={data.user.avatarUrl}
            />

            <div className='home-page'>
            <ProfileSection
             login={data.user.login}
             name={data.user.name}
             bio={data.user.bio}
             location={data.user.location}
             avatarUrl={data.user.avatarUrl}
             twitterUsername={data.user.twitterUsername}
             email={data.user.email}
             followers={data.user.followers.totalCount}
             following={data.user.following.totalCount}
             starredRepositories={data.user.starredRepositories.totalCount}
            />

            <RepoSection 
            pinned={data.user.pinnedItems} repo={data.user.repositories} totalCount={data.user.repositories.totalCount} 
            /> 
            </div>

           
        </div>
    )
}

export default HomePage
