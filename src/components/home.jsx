import { useState, useEffect } from "react";
import BlogList from "./blog-list";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      const Blogs = async () => {
        try {
          const res  = await fetch("http://localhost:8000/blogs")

          if (!res.ok) {
            throw new Error('Could not fetch the data for that resource')
          }
          
          const data = await res.json()
          setBlogs(data)
          setError(null)
        } catch (err) { 
          setIsPending(false)
          setError(err.message)
        } finally {
          setIsPending(false)
        }
      }

      Blogs()

      return () => {

      }
    }, 1000)
    }, [])

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    </div>
  );
}
 
export default Home;