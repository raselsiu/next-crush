import React from 'react'

export default async function Comments({ promise }) {
    const comments = await promise;
    return (
        <div>
            <h3>Comments</h3>
            <hr />
            <br />
            <p>{comments.map(comment => <ul key={comment.id}><li key={comment.id}>Email:  {comment.email}  Comments:  {comment.body}</li>  </ul>)}</p>
        </div>
    )
}
