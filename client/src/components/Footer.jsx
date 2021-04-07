import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light text-center ">

      <div className="container p-4">
        <section className="mb-4">

          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee', borderRadius: '50px' }} href="#!" role="button"><i className="fab fa-twitter"></i></a>

          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac', borderRadius: '50px' }} href="#!" role="button"><i className="fab fa-instagram"></i></a>

          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca', borderRadius: '50px' }} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333', borderRadius: '50px' }} href="#!" role="button"><i className="fab fa-github"></i></a>
        </section>

      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2021 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">@Bibek Dhakal</a>
      </div>
    </footer>
  )
}

export default Footer
