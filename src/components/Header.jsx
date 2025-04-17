import React from 'react'

const Header = () => {
    return (
        <>
            <section className='min-vh-100 bg-blue'>
                <div className="container max-w-1160">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h1 className='fw-semibold header-heading text-white text-center text-lg-start'>Have your best chat</h1>
                            <p className='header-para fw-normal text-white pt-20 m-0 text-center text-lg-start mx-auto mx-lg-0'>Fast, easy & unlimited team chat.</p>
                            <div className='mt-60 d-flex gap-36 justify-content-center justify-content-lg-start mb-30 flex-wrap'>
                                <button className='header-try-btn fw-medium bg-white'>Try it Free</button>
                                <button className='header-demo-btn fw-medium text-white'>Get a Demo</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className='w-100 max-w-585' src="./src/assets/png/header-img.png" alt="header-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
