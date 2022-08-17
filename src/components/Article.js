import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBCardGroup,
    MDBCol
} from 'mdb-react-ui-kit';

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

            <MDBCol key={result._id}>
            <MDBCard className='h-100'>
                <Link to={{ pathname: '/articledetail/' + result._id }}>
                    <MDBCardImage
                        src='https://picsum.photos/seed/picsum/200/300'
                        alt='...'
                        position='top'
                    />
                </Link>
                <MDBCardBody>
                    <MDBCardTitle>{result.title}</MDBCardTitle>
                    <MDBCardText>
                        {result.category}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

        )
    })

    return (
        <MDBRow>
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px', marginTop: 70 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Welcome to CWC Training Manager</h1>
                        <h4 className='mb-3'>You Can do many stufs here</h4>
                        <MDBBtn tag="a" outline size="lg">
                            Start Learning
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>

            {
                (!isLoading) ? (
                    (!error) ? (
                        //JSON.stringify(article)
                        <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
                            {trData}
                        </MDBRow>
                    ) : (
                        <h5>{error}</h5>
                    )
                ) : (
                    <h5>Data Loading in Progress</h5>
                )
            }
        </MDBRow>
    )
}

//https://github.com/mars/create-react-app-buildpack
export default Article
