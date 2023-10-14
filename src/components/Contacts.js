import "./style.css";

function Contact() {


    return (
        <div>
            <section id="contact" class="position-relative section">
        <div class="container text-center">
            <h6 class="subtitle">Contact</h6>
            <h6 class="section-title mb-4">Get In Touch With Me</h6>
            

            <div class="contact text-left">
                <div class="form">
                    <h6 class="subtitle">Available 24/7</h6>
                    <h6 class="section-title mb-4">Get In Touch</h6>
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="Password" required/>
                        </div>
                        <div class="form-group">
                            <textarea name="contact-message" id="" cols="30" rows="5" class="form-control"
                                placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block rounded w-lg">Send Message</button>
                    </form>
                </div>
                <div class="contact-infos">
                    <div class="item">
                        <i class="ti-location-pin"></i>
                        <div class="">
                            <h5>Location</h5>
                            <p> 80/70 R Agharam,Guntur,AP</p>
                        </div>
                    </div>
                    <div class="item">
                        <i class="ti-mobile"></i>
                        <div>
                            <h5>Phone Number</h5>
                            <p>+91 8374122892</p>
                        </div>
                    </div>
                    <div class="item">
                        <i class="ti-email"></i>
                        <div class="mb-0">
                            <h5>Email Address</h5>
                            <p>vechasaibadarinadh@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="page-footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <p>Badarinadh</p>
                </div>
                <div class="col-sm-6">
                    <div class="socials">
                        <a class="social-item" href="https://www.facebook.com/saibadarinadh.vecha"><i class="ti-facebook"></i></a>
                        <a class="social-item" href="https://www.instagram.com/saibadarinadh/"><i class="ti-instagram"></i></a>
                        <a class="social-item" href="https://github.com/saibadarinadh"><i class="ti-github"></i></a>
                        <a class="social-item" href="https://www.linkedin.com/in/vecha-sai-badarinadh-0b4ab7225/"><i class="ti-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )

}
export default Contact;