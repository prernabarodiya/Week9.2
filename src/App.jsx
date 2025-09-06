import { useState } from 'react'
import { PostComponent } from "./post"
import samplePosts from "./samplePost";


// import './App.css'


export default function App() {

  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);

  const postComponets = posts.map(post => <PostComponent
     
    firstname={post.firstname}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
  if (index < samplePosts.length) {
    setPosts([...posts, samplePosts[index]]);
    setIndex(index + 1);
  } else {
    alert("No more sample posts to add!");
  }
}

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          {postComponets}
        </div>
      </div>
    </div>
    
    
  )
  
}

