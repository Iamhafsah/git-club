import React from 'react'
import {useQuery} from "@apollo/react-hooks"
import ProfileSection from './ProfileSection'
import RepoSection from './RepoSection'
import {CircularProgress} from "@material-ui/core";
import {GET_USER_PROFILE} from "./queries";


interface Props{
    input:string;
}
const HomePage: React.FC <Props> = ({input}) => {
const {loading, error, data} = useQuery(GET_USER_PROFILE, {variables: {profileName: 'ireade'}})

if(loading){
    return <div> <CircularProgress/> </div>
}
if(error){
    return <div>{error}</div>
}
if(!data.user){
    return <div>No user found</div>
}
    return (
        <div className='home-page'>
            <ProfileSection repo={data.user}/>
            <RepoSection pinned={data.user.pinnedItems} repo={data.user.repositories}/>
        </div>
    )
}

export default HomePage
