import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  // for hero section
  useEffect(() => {
    const swiper = new Swiper(".carousel", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".carousel-indicators",
        clickable: true,
      },
      navigation: {
        nextEl: ".carousel-control-next",
        prevEl: ".carousel-control-prev",
      },
    });
  }, []);

  // for gallary
  useEffect(() => {
    // Check if Swiper exists to avoid errors
    if (typeof Swiper !== "undefined") {
      // Initialize Swiper
      const swiper = new Swiper(".gallery-slider", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      console.error("Swiper is not defined.");
    }
  }, []);

  return (
    <div>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="align-items-center d-none d-md-flex">
            <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <Link className="logo me-auto">DoSchedulise</Link>
          <Link to={"/Register"} className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Make an</span> Appointment
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <div className="carousel swiper-container">
          <div className="carousel-inner swiper-wrapper" role="listbox">
            <div
              className="carousel-item swiper-slide active"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2024/02/17/11/39/online-8579179_1280.png")',
              }}
            >
              <div className="container">
                <h2>
                  Welcome to <span>DoSchedulise</span>
                </h2>
                <p>
                  Empowering Patients to Seamlessly Book and Schedule
                  Appointments with Doctors <br /> Experience Hassle-Free
                  Appointment Management
                </p>
                <a href="#about" className="btn-get-started scrollto">
                  Read More
                </a>
              </div>
            </div>
            <div
              className="carousel-item swiper-slide"
              style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
            >
              <div className="container">
                <h2>Find Your Perfect Doctor</h2>
                <p>
                  Explore a Wide Range of Specializations, Search by Location,
                  Availability, and Ratings, and Read Patient Reviews to Make
                  Informed Decisions.
                </p>
                <a href="#about" className="btn-get-started scrollto">
                  Read More
                </a>
              </div>
            </div>
            <div
              className="carousel-item swiper-slide"
              style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}
            >
              <div className="container">
                <h2>Effortless Appointment Booking</h2>
                <p>
                  Book Appointments Anytime, Anywhere, Receive Instant
                  Confirmation, and Set Reminders for Upcoming Appointments.
                </p>
                <a href="#about" className="btn-get-started scrollto">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators"></ol>
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <main id="main">
        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Appointment Booking</a>
                  </h4>
                  <p className="description">
                    Effortlessly schedule appointments with healthcare providers
                    based on availability and preferences. DoSchedulise
                    simplifies the booking process for patients, ensuring
                    convenience and flexibility.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="fas fa-pills"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Live Chat</a>
                  </h4>
                  <p className="description">
                    View real-time availability of healthcare providers and
                    select suitable time slots for appointments. With
                    DoSchedulise, patients can easily find convenient
                    appointment times.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="fas fa-thermometer"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Secure Data Storage</a>
                  </h4>
                  <p className="description">
                    Ensure compliance with HIPAA regulations and protect patient
                    information with robust security measures. DoSchedulise
                    prioritizes data security to maintain confidentiality and
                    privacy.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon">
                    <i className="fas fa-dna"></i>
                  </div>
                  <h4 className="title">
                    <a href="">EMR Connectivity</a>
                  </h4>
                  <p className="description">
                    Integrate seamlessly with Electronic Medical Records (EMR)
                    systems for efficient data exchange. DoSchedulise ensures
                    continuity of care by connecting patients and healthcare
                    providers with their medical records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cta section */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>In an emergency? Need help now?</h3>
              <p>
                If you require urgent medical assistance, don't hesitate to
                reach out to us. Our dedicated team is available to provide
                immediate support and care. We understand the importance of
                prompt medical attention, and we're here to ensure you receive
                the help you need without delay.
              </p>
              <Link className="cta-btn scrollto" to="/register">
                Book an Appointment Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ======= About Us Section =======  */}
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About DoSchedulise</h2>
            <p>
              DoSchedulise is a comprehensive web application designed to
              revolutionize the way medical appointments are scheduled and
              managed. Our platform aims to provide seamless access to
              healthcare services for both patients and healthcare providers,
              ensuring efficient appointment booking and management.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-right">
              <img src="assets/img/about.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Efficient and Convenient Medical Appointment Management</h3>
              <p class="fst-italic">
                DoSchedulise offers a user-friendly interface that simplifies
                the process of scheduling medical appointments, allowing
                patients to book appointments with ease.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i> Patients can conveniently
                  schedule appointments based on their preferences and
                  availability.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Healthcare providers can
                  manage their schedules efficiently through our intuitive
                  platform.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Automated reminders and
                  notifications help reduce missed appointments, improving
                  overall patient adherence.
                </li>
              </ul>
              <p>
                Our mission is to enhance the healthcare experience by providing
                a secure and user-friendly platform that streamlines appointment
                scheduling and management. We strive to ensure accessibility,
                convenience, and efficiency for both patients and healthcare
                providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section  */}

      {/* ======= Counts Section =======  */}
      <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="85"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Experienced Doctors</strong> ready to assist you with
                  appointments and consultations
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="far fa-hospital"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="26"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Specialized Departments</strong> available for
                  comprehensive healthcare services
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="fas fa-flask"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="14"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Cutting-edge Research Lab</strong> driving innovation
                  and advancing medical knowledge
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box">
                <i class="fas fa-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>
                  <strong>Recognized Awards</strong> for excellence in patient
                  care and medical services
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counts Section --> */}

      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <div class="icon-box mt-5 mt-lg-0">
                <i class="bx bx-calendar-check"></i>
                <h4>Efficient Appointment Management</h4>
                <p>
                  Streamline the appointment scheduling process for both
                  patients and healthcare providers, reducing time and effort.
                </p>
              </div>
              <div class="icon-box mt-5">
                <i class="bx bx-accessibility"></i>
                <h4>Improved Accessibility</h4>
                <p>
                  Allow patients to easily book appointments online from
                  anywhere, anytime, without phone calls or physical visits.
                </p>
              </div>
              <div class="icon-box mt-5">
                <i class="bx bx-smile"></i>
                <h4>Enhanced Patient Experience</h4>
                <p>
                  Provide patients with reminders and notifications about their
                  appointments, improving satisfaction and reducing missed
                  appointments.
                </p>
              </div>
              <div class="icon-box mt-5">
                <i class="bx bx-lock"></i>
                <h4>Secure Data Storage</h4>
                <p>
                  Ensure compliance with HIPAA regulations, storing medical
                  records securely and protecting patient confidentiality.
                </p>
              </div>
            </div>
            <div
              class="image col-lg-6 order-1 order-lg-2"
              style={{ backgroundImage: `url("assets/img/features.jpg")` }}
              data-aos="zoom-in"
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- End Features Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" class="services">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Services</h2>
            <p>
              Our platform offers a range of services tailored to enhance the
              scheduling and management of medical appointments, providing
              convenience and efficiency to both patients and healthcare
              providers.
            </p>
          </div>

          <div class="row">
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <h4 class="title">
                <a href="#">Online Appointment Scheduling</a>
              </h4>
              <p class="description">
                Effortlessly schedule and manage medical appointments online,
                providing patients with the flexibility to book appointments at
                their convenience.
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon">
                <i class="fas fa-bell"></i>
              </div>
              <h4 class="title">
                <a href="#">Automated Reminders</a>
              </h4>
              <p class="description">
                Receive automated reminders and notifications about upcoming
                appointments, reducing the likelihood of missed appointments and
                enhancing appointment adherence.
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon">
                <i class="fas fa-user-md"></i>
              </div>
              <h4 class="title">
                <a href="#">Medical Records Access</a>
              </h4>
              <p class="description">
                Securely access and manage medical records within the platform,
                enabling healthcare providers to make informed decisions during
                appointments.
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon">
                <i class="fas fa-lock"></i>
              </div>
              <h4 class="title">
                <a href="#">Data Security</a>
              </h4>
              <p class="description">
                Ensure compliance with data protection regulations and maintain
                patient confidentiality through robust security measures.
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon">
                <i class="fas fa-sync-alt"></i>
              </div>
              <h4 class="title">
                <a href="#">Integration Capabilities</a>
              </h4>
              <p class="description">
                Integrate seamlessly with external systems such as billing
                software and Electronic Medical Records (EMR) systems,
                facilitating data exchange and improving operational efficiency.
              </p>
            </div>
            <div
              class="col-lg-4 col-md-6 icon-box"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon">
                <i class="fas fa-comments"></i>
              </div>
              <h4 class="title">
                <a href="#">Patient Communication</a>
              </h4>
              <p class="description">
                Facilitate communication between patients and healthcare
                providers, allowing for inquiries, feedback, and personalized
                health reminders.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}

      {/* <!-- ======= Departments Section ======= --> */}
      <section id="departments" class="departments">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Departments</h2>
            <p>
              Explore the various departments available for appointments and
              medical services.
            </p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a
                    class="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    <h4>Cardiology</h4>
                    <p>Specialized in heart-related ailments and treatments.</p>
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <h4>Neurology</h4>
                    <p>
                      Dealing with disorders of the nervous system, including
                      the brain and spinal cord.
                    </p>
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <h4>Hepatology</h4>
                    <p>
                      Specializing in the study, diagnosis, and treatment of
                      liver diseases.
                    </p>
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <h4>Pediatrics</h4>
                    <p>
                      Focused on medical care for infants, children, and
                      adolescents.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-8">
              <div class="tab-content">
                <div class="tab-pane active show" id="tab-1">
                  <h3>Cardiology</h3>
                  <p>
                    Cardiology department specializes in diagnosing and treating
                    diseases of the heart and blood vessels. Our expert
                    cardiologists provide comprehensive care for various heart
                    conditions, including coronary artery disease, heart
                    failure, and arrhythmias.
                  </p>
                  <img
                    src="assets/img/departments-1.jpg"
                    alt="Cardiology"
                    class="img-fluid"
                  />
                </div>
                <div class="tab-pane" id="tab-2">
                  <h3>Neurology</h3>
                  <p>
                    The neurology department focuses on the diagnosis and
                    treatment of disorders affecting the nervous system,
                    including the brain, spinal cord, and nerves. Our
                    neurologists specialize in conditions such as stroke,
                    epilepsy, multiple sclerosis, and Parkinson's disease.
                  </p>
                  <img
                    src="assets/img/departments-2.jpg"
                    alt="Neurology"
                    class="img-fluid"
                  />
                </div>
                <div class="tab-pane" id="tab-3">
                  <h3>Hepatology</h3>
                  <p>
                    The hepatology department is dedicated to the diagnosis and
                    treatment of liver diseases, including hepatitis, cirrhosis,
                    and liver cancer. Our hepatologists offer comprehensive
                    care, including liver transplantation, to patients with
                    liver disorders.
                  </p>
                  <img
                    src="assets/img/departments-3.jpg"
                    alt="Hepatology"
                    class="img-fluid"
                  />
                </div>
                <div class="tab-pane" id="tab-4">
                  <h3>Pediatrics</h3>
                  <p>
                    Our pediatrics department provides specialized medical care
                    for infants, children, and adolescents. Our pediatricians
                    offer preventive care, vaccinations, and treatment for a
                    wide range of childhood illnesses and conditions, ensuring
                    the health and well-being of young patients.
                  </p>
                  <img
                    src="assets/img/departments-4.jpg"
                    alt="Pediatrics"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Departments Section --> */}

      {/* <!-- ======= Doctors Section ======= --> */}
      <section id="doctors" class="doctors section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Doctors</h2>
            <p>See the talented doctors working with us.</p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img
                    src="assets/img/doctors/doctors-1.jpg"
                    class="img-fluid"
                    alt="Dr. Walter White"
                  />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dr. Vikram Das</h4>
                  <span>Chief Medical Officer</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="200">
                <div class="member-img">
                  <img
                    src="assets/img/doctors/doctors-2.jpg"
                    class="img-fluid"
                    alt="Dr. Sarah Jhonson"
                  />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dr. Priya Patel</h4>
                  <span>Anesthesiologist</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <div class="member-img">
                  <img
                    src="assets/img/doctors/doctors-3.jpg"
                    class="img-fluid"
                    alt="Dr. William Anderson"
                  />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dr. Abhijit Singh</h4>
                  <span>Cardiologist</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="400">
                <div class="member-img">
                  <img
                    src="assets/img/doctors/doctors-4.jpg"
                    class="img-fluid"
                    alt="Dr. Amanda Jepson"
                  />
                  <div class="social">
                    <a href="#">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Dr. Suresh Kumar</h4>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Doctors Section --> */}

      {/* <!-- ======= Gallery Section ======= --> */}
      <section id="gallery" className="gallery">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Check out our gallery below to see more of what we offer. Our
              gallery showcases various images related to our services,
              facilities, events, and more. Feel free to explore and get a
              glimpse of what we have to offer.
            </p>
          </div>

          <div className="gallery-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-1.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-2.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-3.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-4.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-5.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-6.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-7.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="swiper-slide">
                <a
                  className="gallery-lightbox"
                  href="assets/img/gallery/gallery-8.jpg"
                >
                  <img
                    src="assets/img/gallery/gallery-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <!-- End Gallery Section --> */}

      {/* <!-- ======= Pricing Section ======= --> */}
      <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Pricing</h2>
            <p>Check out our pricing plans below.</p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="box" data-aos="fade-up" data-aos-delay="100">
                <h3>Basic</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>Access to basic features</li>
                  <li>Limited support</li>
                  <li>Standard performance</li>
                  <li class="na">Additional features</li>
                  <li class="na">Advanced analytics</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div class="box featured" data-aos="fade-up" data-aos-delay="200">
                <h3>Premium</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>Access to premium features</li>
                  <li>Priority support</li>
                  <li>Enhanced performance</li>
                  <li>Additional features</li>
                  <li class="na">Advanced analytics</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div class="box" data-aos="fade-up" data-aos-delay="300">
                <h3>Professional</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>Access to professional features</li>
                  <li>24/7 premium support</li>
                  <li>High performance</li>
                  <li>Additional features</li>
                  <li>Advanced analytics</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div class="box" data-aos="fade-up" data-aos-delay="400">
                <span class="advanced">Advanced</span>
                <h3>Enterprise</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>Access to enterprise features</li>
                  <li>Dedicated support</li>
                  <li>Top-tier performance</li>
                  <li>Additional features</li>
                  <li>Advanced analytics</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Pricing Section --> */}

      {/* <!-- ======= Frequently Asked Questioins Section ======= --> */}
      <section id="faq" class="faq section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Below are some common questions about our service.</p>
          </div>

          <ul class="faq-list">
            <li>
              <div
                data-bs-toggle="collapse"
                class="collapsed question"
                href="#faq1"
              >
                How can I sign up for your service?{" "}
                <i class="bi bi-chevron-down icon-show"></i>
                <i class="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Signing up for our service is easy! Simply visit our website
                  and click on the "Sign Up" button. Fill out the required
                  information, such as your name, email address, and password,
                  and you'll be all set. Once you've completed the sign-up
                  process, you'll have access to all the features of our
                  service.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                class="collapsed question"
                href="#faq2"
              >
                What payment methods do you accept?{" "}
                <i class="bi bi-chevron-down icon-show"></i>
                <i class="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                <p>
                  We accept various payment methods to make it convenient for
                  our users. You can pay for our service using credit/debit
                  cards, PayPal, or bank transfers. During the checkout process,
                  you'll have the option to choose the payment method that works
                  best for you.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                class="collapsed question"
                href="#faq3"
              >
                Can I cancel my subscription at any time?{" "}
                <i class="bi bi-chevron-down icon-show"></i>
                <i class="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Yes, you can cancel your subscription at any time without any
                  hassle. We believe in giving our users full control over their
                  subscriptions. If you decide that you no longer want to use
                  our service, simply log in to your account, go to the
                  subscription settings, and follow the instructions to cancel.
                  Your subscription will remain active until the end of the
                  billing cycle, and you won't be charged any additional fees.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                class="collapsed question"
                href="#faq4"
              >
                Do you offer a free trial?{" "}
                <i class="bi bi-chevron-down icon-show"></i>
                <i class="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Yes, we offer a free trial for new users who want to try out
                  our service before committing to a subscription. During the
                  trial period, you'll have access to all the features of our
                  service so you can explore its capabilities and see if it
                  meets your needs. Once the trial period ends, you can choose
                  to subscribe to continue using our service.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                class="collapsed question"
                href="#faq5"
              >
                Is my data secure with your service?{" "}
                <i class="bi bi-chevron-down icon-show"></i>
                <i class="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                <p>
                  Yes, protecting your data is our top priority. We take all
                  necessary precautions to ensure that your personal and
                  sensitive information remains secure at all times. We use
                  advanced encryption techniques and security protocols to
                  safeguard your data from unauthorized access, theft, or loss.
                  Additionally, we regularly update our security measures to
                  stay ahead of emerging threats and vulnerabilities.
                </p>
              </div>
            </li>

            <li>
              <div
                data-bs-toggle="collapse"
                class="collapsed question"
                href="#faq6"
              >
                How can I contact customer support?{" "}
                <i class="bi bi-chevron-down icon-show"></i>
                <i class="bi bi-chevron-up icon-close"></i>
              </div>
              <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                <p>
                  If you have any questions, concerns, or issues, our dedicated
                  customer support team is here to help you. You can contact us
                  via email, phone, or live chat on our website. Our support
                  representatives are available 24/7 to assist you with any
                  inquiries or problems you may have. We strive to provide
                  prompt and helpful assistance to ensure that you have a
                  positive experience with our service.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- End Frequently Asked Questioins Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
      {/* <!-- End Footer --> */}
    </div>
  );
}

export default Home;
