import React from 'react';
import styles from '@/styles/Post.module.css';

const Post = ({ post }) => {
    const { attributes } = post || {}; // Añadimos un objeto vacío como valor por defecto

    if (!attributes) {
        return null; // Si no hay atributos, no se renderiza nada
    }

    const { Title, Content, Author } = attributes;

    return (
        <div className={styles.post}>
            <h2>{Title}</h2>
            <p>{Content}</p>
            <p>Author: {Author}</p>
        </div>
    );
};

export default Post;
