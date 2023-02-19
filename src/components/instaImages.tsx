import '../index.css'
import { useState, useEffect } from 'react';

function InstagramFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`);
            const data = await response.json();
            setPosts(data.data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <img src={post.media_url} alt={post.caption} />
                </div>
            ))}
        </div>
    );
}

export default InstagramFeed;