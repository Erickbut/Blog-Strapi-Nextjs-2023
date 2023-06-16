import React from 'react';
import styles from '@/styles/Post.module.css';

const Post = ({ post }) => {
    const { Title, Content, Author } = post.attributes;

    return (
        <div className={styles['post-card']}>
            <h2 className={styles['post-title']}>{Title}</h2>
            <p className={styles['post-content']}>{Content}</p>
            <p className={styles['post-author']}>Author: {Author}</p>
        </div>
    );
};

export default Post;

