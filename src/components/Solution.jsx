import React from 'react'

const Solution = () => {
    return (
        <>
            <section className='min-vh-100 position-relative'>
                <div className="container max-w-1160">
                    <div className="row">
                        <div className="col-6">
                            <img className='w-100 max-w-816 solution-main-img position-absolute' src="./src/assets/png/solution-main-img.png" alt="solution-main-img" />
                        </div>
                        <div className="col-6">
                            <div className='pl-100 pt-42'>
                                <h2 className='max-w-467 solution-main-heading fw-medium'>Perfect Solution for Small Businesses</h2>
                                <p className='max-w-465 solution-para opacity-75 m-0 pt-30'>Pricing plans that fit like a glove.</p>
                                <div className='mt-60 d-flex flex-wrap gap-30'>
                                    <button className='solution-try-button text-white'>Try it Free</button>
                                    <button className='solution-get-button bg-white'>Get a Demo</button>
                                </div>
                                <div className="line mt-90"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution
