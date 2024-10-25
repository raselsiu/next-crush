import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getAllComment from '@/lib/getPostComment';
import getPost from '@/lib/getPosts';
import React, { Suspense } from 'react'


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
    const commentPromise = getAllComment(id);

    // const [post, comments] = await Promise.all([postPromise, commentPromise]);



    return (
        <div>
            <h3> {post.title}</h3>
            <br />
            <p> {post.body}</p>
            <br />

            <Suspense fallback={<h1>Comments loading.......</h1>}>
                <Comments promise={commentPromise} />
            </Suspense>
        </div>
    )
}



export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }))
}

