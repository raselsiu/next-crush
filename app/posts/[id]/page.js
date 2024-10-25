import getPost from '@/lib/getPosts';
import React from 'react'



// Using MetaData
export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
    }
}

// End





export default async function PostPage({ params }) {

    const { id } = await params;

    const post = await getPost(id);

    console.log(post)

    return (
        <div>
            <h3> {post.title}</h3>
            <br />

            <p> {post.body}</p>
        </div>
    )
}
