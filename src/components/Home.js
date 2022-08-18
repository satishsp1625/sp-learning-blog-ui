import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

function Home() {
  return (
    <MDBContainer style={{ marginTop: 70 }} >
      <MDBRow>
      <div className='bg-image'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>I am Home</p>
        </div>
      </div>
    </div>
      </MDBRow>
    </MDBContainer>

  )
}

export default Home
