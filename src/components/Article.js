import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Article() {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        document.title = "All Articles"
        fetch("https://sp-learning-blog-api.herokuapp.com/api/article/")
            .then(result => result.json())
            .then(res => {
                setArticle(res)
                setIsLoading(false)
                setError(null)
            })
            .catch(error => {
                setIsLoading(false)
                setError(error.message)
            })
    }, [])


    const trData = article.map((result) => {
        return (
            <tr key={result._id}>
                <td>
                    {result._id}
                </td>
                <td>
                    {result.title}
                </td>
                <td>
                    {result.category}
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h5>I am Article Page</h5>
            {
                (!isLoading) ? (
                    (!error) ? (
                        //JSON.stringify(article)
                        <div>
                            <h2>All Articles</h2>
                            <hr />
                            <table>
                                <thead>
                                    <td>ID</td>
                                    <td>Title</td>
                                    <td>Category</td>
                                </thead>
                                <tbody>
                                    {trData}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <h5>{error}</h5>
                    )
                ) : (
                    <h5>Data Loading in Progress</h5>
                )
            }
        </div>
    )
}

export default Article
