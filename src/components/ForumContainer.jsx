import React, { useEffect, useState } from 'react';
import ForumTopic from "./ForumTopic";
import '../stylesheets/ForumContainer.css'
import axios from 'axios';

const ForumContainer = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
    .then(response => {
      setPosts(response.data);
      console.log(posts)
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  }, []);

  return (
    <div className="forum-container">
      {posts.map(post => (
        <ForumTopic 
          key={post.id}
          topicTitle={post.title}
          topicContent={post.content}
          topicDate={post.date}
        />
      ))}
    </div>
  )
}

export default ForumContainer
