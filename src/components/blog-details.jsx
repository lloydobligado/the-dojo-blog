import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch(' http://localhost:8000/blogs/' + id)
  const history = useHistory()

  const handleClick = () => {
    async function deleteBlog(blogId) {
      try {
        const response = await fetch(`http://localhost:8000/blogs/${blogId}`, {
          method: 'DELETE'
        });
    
        if (response.ok) {
          console.log('blog deleted');
          history.push('/');
        } else {
          throw new Error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
    
    deleteBlog(blog.id);
  }
  
  return (
    <div className="blog-details">
        { isPending && <div>Loading...</div>}
        { error && <div> { error } </div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>{ blog. author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
    </div>
  )
}

export default BlogDetails