import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function ArticleDetail() {
   const { id } = useParams()
   const url = ` http://localhost:3000/articles/${id}`
   const { data: article, error, isPending } = useFetch(url)
   return (
      <div className='article-container'>
         {isPending && <h3>Loading...</h3>}
         {error && <h3>Not Found</h3>}

         {article && <div className='card'>
            <img src={article.image} alt={article.title} height={300} />
            <h3>Title: {article.title}</h3>
            <p>{article.body}</p>
            <h4>
               Author: <i>{article.author}</i>
            </h4>
         </div>}
      </div>
   )
}

export default ArticleDetail