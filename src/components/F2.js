import "./style.css";
import myImage from './img/avatar.jpg'; // Import the image
import my from './img/back.png'; // Import the image
export function Home() {
    return (
        <div>
            <header class="header" id="home">
                <div class="container" style={{ marginTop: "0" }}>
                    <div class="infos">
                        <img src={my} style={{ position: "absolute", width: "400px", marginLeft: "750px" }}></img>
                        <h6 class="subtitle">Hello,I'm</h6>
                        <h6 class="title">Vecha Sai Badarinadh</h6>
                        <p>Developer</p>
                        

                        <div class="socials mt-4">
                            <a class="social-item" href="https://www.facebook.com/saibadarinadh.vecha"><i class="ti-facebook"></i></a>
                            <a class="social-item" href="https://www.instagram.com/saibadarinadh/"><i class="ti-instagram"></i></a>
                            <a class="social-item" href="https://github.com/saibadarinadh"><i class="ti-github"></i></a>
                            <a class="social-item" href="https://www.linkedin.com/in/vecha-sai-badarinadh-0b4ab7225/"><i class="ti-linkedin"></i></a>
                        </div>
                    </div>
                    <div >
                        <img src={{ my }} alt="error" />
                    </div>
                </div>



            </header>

        </div>
    )
}

export function About() {
    return (
        <div>
            <section id="about" class="section mt-3">
                <div class="container mt-5">
                    <div class="row text-center text-md-left">
                        <div class="col-md-3">
                            <img src={myImage} alt="" class="img-thumbnail mb-4" />
                        </div>
                        <div class="pl-md-4 col-md-9">
                            <h6 class="title">Sai Badarinadh</h6>
                            <p class="subtitle"># Developer</p>
                            <p>As an AL and ML student, I am passionate about using technology to solve real-world problems,
                                especially in healthcare, climate change, and education. I am committed to developing the skills
                                and knowledge necessary to make a meaningful contribution to this field and stay up-to-date on
                                the latest trends and technologies.</p>

                            <p>I believe that AL and ML have the potential to revolutionize many industries and help us to solve
                                some of the most pressing challenges facing our world today. I am excited to use my skills and
                                knowledge to make a difference.</p>

                            <a href="https://drive.google.com/file/d/1LwN9hzgLTFMDmqEFeev6fmnuyTFH62hU/view"><button class="btn btn-primary rounded mt-3" src>Resume</button></a>


                        </div>
                    </div>
                    <section class="section">
                        <div class="container text-center">
                            <h6 class="subtitle">_________________</h6>
                            <h6 class="section-title mb-4">My Skills</h6>
                            <p class="mb-5 pb-4">_______________________________________________________</p>

                            <div class="row text-left">
                                <div class="col-sm-6">
                                    <h6 class="mb-3">JAVA</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>89%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">HTML</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "83%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">MYSQL</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "83%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">CSS</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "83%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">MATLAB</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "83%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">JAVASCRIPY </h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "95%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">PYTHON</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">REACT</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">R-PROGRAMMING</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <h6 class="mb-3">SPRINF BOOT</h6>
                                    <div class="progress">
                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <div class="interests container">
            </div>

        </div>
    )
}

export function Education() {
    return (
        <div>
            <section id="Education" class="section">
               
                <div class="container text-center">
                    <h6 class="section-title mb-4">Education</h6>

                    <p class="mb-5 pb-4">Currently pursuing a Bachelor of Technology (B.Tech.) undergraduate degree at the Vellore Institute of Technology (VIT)</p>


                    <div class="row">
                        <div class="col-sm-6 col-md-3 mb-4">
                            <div class="custom-card card border">
                                <div class="card-body">
                                    <i class="ti-id-badge"></i>
                                    <div class="Education-item">
                                        <h4>Secondary Education
                                        </h4>
                                        <h5>2018 - 2019</h5>

                                        <p><em>Bhashyam High School, Guntur, AP</em></p>
                                        <p><em>GPA secured : 8.5 </em></p>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm- col-md-3 mb-4">
                            <div class="custom-card card border">
                                <div class="card-body">
                                    <i class="ti-home"></i>
                                    <div class="Education-item">
                                        <h4>Intermediate </h4>
                                        <p><em>Bhashyam Junior College, Guntur, AP</em></p>

                                        <h5>2019 - 2021</h5>
                                        <p><em>MARKS secured : 873 </em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm- col-md-3 mb-4">
                            <div class="custom-card card border">
                                <div class="card-body">
                                    <i class="ti-user"></i>
                                    <div class="Education-item">
                                        <h4>B.tech </h4>
                                        <p><em>Vellore Institute of Technology (VIT)</em></p>

                                        <h5>2021 - Present</h5>
                                        <p><em>Current CGA: 8.76  </em></p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <section id="Projects" class="section">
                <div class="container text-center">
                    <h6 class="subtitle">Projects</h6>
                    <h6 class="section-title mb-4">My Work</h6>
                    <p class="mb-5 pb-4">_______________________________________________________</p>

                    <div class="row">
                        <div class="col-sm-4">
                            <div class="img-wrapper">
                                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*doFP84UiuhjGi1DpPMwcAQ.png" alt="" />
                                <div class="overlay">
                                    <div class="overlay-infos">
                                        <h5>Arduino Radar (Developing a Radar using Arduino)</h5>
                                        <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i class="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="img-wrapper">
                                <img src="https://mobirise.com/engine/data/upload/2016/03/mobirise-main-theme.png" alt="" />
                                <div class="overlay">
                                    <div class="overlay-infos">
                                        <h5>creating a website using HTML, CSS</h5>
                                        <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i class="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="img-wrapper">
                                <img src="https://copyassignment.com/wp-content/uploads/2021/01/Screenshot-2022-06-17-130928.png" alt="" />
                                <div class="overlay">
                                    <div class="overlay-infos">
                                        <h5>OTP generator using python</h5>
                                        <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i class="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="img-wrapper">
                                <img src="https://snacknation.com/wp-content/uploads/2020/12/shutterstock_1803078475-e1608144132637.png" alt="" />
                                <div class="overlay">
                                    <div class="overlay-infos">
                                        <h5>basic personal assistant</h5>
                                        <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i class="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="img-wrapper">
                                <img src="https://res.cloudinary.com/dbshcjrt3/image/upload/w_1480,h_986,c_fill,g_auto,q_auto/wikifactory-prod-uploads/62551/cup4blind.jpg" alt="" />
                                <div class="overlay">
                                    <div class="overlay-infos">
                                        <h5>Blind cap Based on Arduino</h5>
                                        <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i class="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="img-wrapper">
                                <img src="assets/imgs/folio-6.jpg" alt="" />
                                <div class="overlay">
                                    <div class="overlay-infos">
                                        <h5>Project Title</h5>
                                        <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                                        <a href="javascript:void(0)"><i class="ti-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}



