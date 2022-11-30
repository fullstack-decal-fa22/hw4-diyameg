import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [posts, setPosts] = useState([]);
    
    const createPost = (postColor) => {
    setPosts([<Block color={postColor}></Block>, ...posts]);
    console.log("CreatePost called with post color: ", postColor);
    console.log("There are ", posts.length, " posts.");
    };

    return (
        <div>
            <Menu click={createPost}></Menu>
            {posts}
        </div>
  );
};

export default Feed;