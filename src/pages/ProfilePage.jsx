import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from  'react-router-dom'

function ProfilePage() {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div className='text-3xl flex gap-4 m-10'>
          <div className='flex flex-col gap-6 text-3xl'>
            ProfilePage
            {profiles.map((profile) => (
                <NavLink className={
                    ({isActive}) => {
                        return isActive ? 'text-red-500' : ''
                    }
                }
                 key={profile} to={`/profiles/${profile}`}>
                   Profile {profile}
                </NavLink>
            ))}
        </div>   
            <Outlet />
        </div>

       
    );
}

export default ProfilePage;
