import React from 'react';
import styles from '@/styles/Post.module.css';

const Post = ({ post }) => {
    const { Title, Content, Author } = post.attributes || {}; // Añadimos un objeto vacío como valor por defecto

    return (
        <div>
            <h2>{Title}</h2>
            <p>{Content}</p>
            <p>Author: {Author}</p>
        </div>
    );
};

export default Post;
