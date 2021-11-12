import React, { useEffect, useState } from 'react';
import SkeletonProfile from './Skeleton/SkeletonProfile';

const User = () => {
    const [user, setUser] = useState(null)
    useEffect(()=> {
        setTimeout(async ()=> {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const data = await res.json()
            setUser(data)
        }, 5000)
    }, [])
    return (
        <section>
            <div>
                <h2 className="border-bottom pb-1 dark capitalize">user</h2>
                {user && <div>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <a href={user.website} className="link">{user.website}</a>
                </div>}
                {!user && <SkeletonProfile/>}
            </div>
        </section>
    );
};

export default User;