import React, { useEffect, useState } from 'react';
import SkeletonArticle from './Skeleton/SkeletonArticle';

const Posts = () => {
    const [postCollection, setPostCollection] = useState(null)
    useEffect(()=> {
        setTimeout(async ()=> {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPostCollection(data)
        }, 5000)
    }, [])

    return (
        <section className="dark">
            <h2 className="border-bottom pb-1">Regular Posts</h2>
            {postCollection && postCollection.map(post =>
                <div key={post.id} className="mt-1">
                    <h3 className="capitalize">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
            {!postCollection && [1,2,3,4,5].map(n => <SkeletonArticle key={n}/>)}
        </section>
    );
};

export default Posts;