import React from 'react';
import '../stylesheets/ForumTopic.css'


const ForumTopic = ({ topicTitle, topicContent, topicDate }) => {
  return (
    <div className="topic-container">
      <p className="topic-title">{topicTitle}</p>
      <hr />
      <p className="topic-content">{topicContent}</p>
      <p className="topic-date">{topicDate}</p>
    </div>
  )
}

export default ForumTopic
