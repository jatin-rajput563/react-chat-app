import React from 'react'

const Solution = () => {
    return (
        <>
            <section className='py-130 bg-light-blue position-relative'>
                <div className="container max-w-1160">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className='w-100 max-w-816 solution-main-img position-lg-absolute' src="./src/assets/png/solution-main-img.png" alt="solution-main-img" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='pl-100 pt-42'>
                                <h2 className='max-w-467 solution-main-heading fw-medium text-center text-sm-start'>Perfect Solution for Small Businesses</h2>
                                <p className='max-w-465 solution-para opacity-75 m-0 pt-30 text-center text-sm-start'>Pricing plans that fit like a glove.</p>
                                <div className='mt-60 d-flex flex-wrap gap-30 flex-md-column'>
                                    <button className='solution-try-button text-white'>Try it Free</button>
                                    <button className='solution-get-button bg-white'>Get a Demo</button>
                                </div>
                                <div className="line mt-90 w-100"></div>
                                <div className='d-flex flex-wrap gap-25 mt-40 justify-content-center align-items-baseline'>
                                    <img src="./src/assets/svg/star-card.svg" alt="star-card" />
                                    <p className='solution-star-para fw-normal opacity-75 max-w-274 text-center text-sm-start'><span className='fw-bold'>5,200 businesses </span> use ChatApp and they rate it as <span className='fw-bold'>5-stars.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution
