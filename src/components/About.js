import React from 'react'

export default function About() {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-8">
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-header">TXTLAND DETAILS</div>
                        <div className="card-body">
                            <h5 className="card-title">What is TxtLand ?</h5>
                            <p className="card-text">TxtLand is a text utility software which will increase your productivity. Such as, you can convert your text from uppercase to lowercase, you can also remove space, word count, reverse your text, swap, copy & many more extra feature. The app is completely free. You don't have to pay any taka or paisa. It's a React application and also it's a single page application. This app is developed by Shihabun mobin jisan inspired from a hindi Youtube channel named Code with Harry.
                            </p>
                            <h5 className="card-title">Tools Used for this App:</h5>
                            <ul className="list-group">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item"> CSS</li>
                                <li className="list-group-item">JAVASCRIPT</li>
                                <li className="list-group-item">REACT JS</li>
                                <li className="list-group-item">VSCODE</li>
                                <li className="list-group-item">GOOGLE CHROME</li>
                            </ul>
                            <p className="card-text my-3">
                                For More Details Contact: <a href="https://www.facebook.com/shihabunjisan">Fb: Shihabun Mobin Jisan</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.15752-9/345743264_752174733302853_3891250839218762371_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH-PRP9fQ2T9vQMhbVA6c6st4ohg7pz7b-3iiGDunPtv9t27-QYWVd3Zf-y8mnQOXa8FNa2yDEYdBH0rABICgI4&_nc_ohc=BH8B7OEm21sAX_biGp7&_nc_oc=AQlEneIO5661-nsmUrSSN8pfZeThu8D6XZKOFS1OVofaV3-XPfXo0hWvmlBKY74vS5E&_nc_ht=scontent.fdac2-1.fna&oh=03_AdTUQ3Q1Wd17yby6JGk4UwuzmwiLGRYBLQDEXwnuXsg2UA&oe=647EF0A8" className="card-img-top img-fluid img-thumbnail" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Shihabun Mobin Jisan</h5>
                            <div>Web Developer</div>
                            <p className="card-text">Assalamualikum, I am Shihabun Mobin Jisan, A full stack web developer, mainly expert in Laravel, Vue/ React language. 1 React project is completed. I am a well-focused and self-motivated person who prefers to finish his task on time. Besides Reading books, I have a great affection for nature. It is worth mentioning that, in the English Language, I have a good grasp of knowledge.</p>

                            {/* Satrt Main Skills */}

                            <div className='main-skills my-3'>

                                <div className='fw-bold'>Web Skills:</div>
                                <div>
                                    <div class="progress my-2" style={{ height: '20px' }}>
                                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Laravel 75%</div>
                                    </div>
                                    <div class="progress my-2" style={{ height: '20px' }}>
                                        <div class="progress-bar bg-info text-dark" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">React 60%</div>
                                    </div>
                                    <div class="progress my-2" style={{ height: '20px' }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Vue 70%</div>

                                    </div>
                                    <div class="progress my-2" style={{ height: '20px' }}>
                                        <div class="progress-bar bg-secondary" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Gti & GitHub 70%</div>
                                    </div>
                                    <div class="progress my-2" style={{ height: '20px' }}>
                                        <div class="progress-bar bg-warning text-dark" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Javascript 60%</div>
                                    </div>
                                </div>
                            </div>
                            {/* End of Main Skills  */}

                            {/* Start Other Skills */}
                            <div className='my-3'>

                                <div className='fw-bold'>Other Skills:</div>
                                <div class="progress my-2" style={{ height: '25px' }}>
                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>English</div>
                                </div>
                                <div class="progress my-2" style={{ height: '25px' }}>
                                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>Graphics Design</div>
                                </div>
                                <div class="progress my-2" style={{ height: '25px' }}>
                                    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>Computer Office App</div>
                                </div>
                                <div class="progress my-2" style={{ height: '25px' }}>
                                    <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="87" style={{ width: '87%' }}>Typing Speed 40/min</div>
                                </div>
                                {/* <div>
                                    English 85%
                                    Graphics Design 80%
                                    Computer Office App 80%
                                    Typing Speed 40w/min
                                </div> */}

                            </div>

                            {/* End of Other Skills */}

                            {/* Start Projects */}
                            <div className='my-3'>
                                <div className='fw-bold'>Projects:</div>
                                <div>
                                    React Projects - <b>1</b>
                                </div>
                            </div>

                            {/* End of Projects */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
