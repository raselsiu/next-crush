export default async function getAllComment(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 10,
        }
    });
    return result.json();
}
