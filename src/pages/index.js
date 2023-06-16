import React from 'react';
import Post from './Post';
import axios from 'axios';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:1337/api/posts');
    const { data } = response.data.data;

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Home;
