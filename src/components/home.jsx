import { useState, useEffect } from "react";
import BlogList from "./blog-list";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const Blogs = async () => {
        const res  = await fetch("http://localhost:8000/blogs")
        const data = await res.json()
        setBlogs(data)
        }

        Blogs()

        return () => {
    
        }
    }, [])

  return (
    <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    </div>
  );
}
 
export default Home;