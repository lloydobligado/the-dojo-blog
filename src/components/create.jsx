import React, { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = {title, author, body}
    
    setIsPending(true)

    async function addNewBlog(blog) {
      try {
        const response = await fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        });
    
        if (response.ok) {
          console.log('new blog added');
          setIsPending(false)
        } else {
          throw new Error('Failed to add new blog');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
    
    addNewBlog(blog);    
    
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
      <label>Blog Title:</label>
        <input 
          type="text" 
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea 
          value={ body }
          onChange={(e) => setBody(e.target.value)}
          required
        >
        </textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create