import mikky from "../assets/mikky.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO MIKKY’S CULINARY SCHOOL
          </p>

          <h1>
            Master the Art.
            <br />
            <span>Lead the Experience.</span>
          </h1>

          <p className="hero-text">
            Build real-world culinary and patisserie skills through
            practical training, expert guidance, creativity, and
            professional kitchen experience.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="primary-button">
              Explore Courses
            </Link>

            <Link to="/apply" className="secondary-button">
              Apply Now
            </Link>
          </div>

          {/* Course Highlight */}

          <div className="hero-course">
            <span className="hero-course-label">
              FEATURED PROGRAM
            </span>

            <strong>
              Diploma in Culinary Art & Patisserie
            </strong>
          </div>

        </div>

        <div className="hero-image">

          <img
            src={mikky}
            alt="Chef at Mikky's Culinary School"
            className="hero-img"
          />

          <div className="hero-image-badge">
            <strong>95%</strong>
            <span>Practical Training</span>
          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}

      <section className="stats">

        <div>
          <h2>500+</h2>
          <p>Students Trained</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Professional Courses</p>
        </div>

        <div>
          <h2>95%</h2>
          <p>Practical Training</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Passion for Excellence</p>
        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="section home-about">

        <div className="section-heading">

          <p>WHY MIKKY’S</p>

          <h2>
            Learn More Than Cooking.
            <br />
            Build a Culinary Career.
          </h2>

          <span>
            Our goal is to help aspiring chefs and pastry professionals
            develop the confidence, discipline, creativity, and practical
            skills needed to succeed in the food and hospitality industry.
          </span>

        </div>


        <div className="home-feature-grid">

          <div className="home-feature-card">
            <span>01</span>

            <h3>Practical Training</h3>

            <p>
              Learn by doing with hands-on kitchen and pastry training
              designed to build real professional confidence.
            </p>
          </div>


          <div className="home-feature-card">
            <span>02</span>

            <h3>Professional Skills</h3>

            <p>
              Develop culinary techniques, kitchen discipline,
              presentation, hygiene, teamwork and professional standards.
            </p>
          </div>


          <div className="home-feature-card">
            <span>03</span>

            <h3>Creative Excellence</h3>

            <p>
              Discover your creativity through food presentation,
              pastry design, flavour development and modern culinary
              techniques.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROGRAM ================= */}

      <section className="home-program">

        <div className="home-program-content">

          <p className="hero-small">
            OUR SIGNATURE PROGRAM
          </p>

          <h2>
            Diploma in Culinary
            <br />
            <span>Art & Patisserie</span>
          </h2>

          <p>
            A practical programme created for people who want to turn
            their passion for food into professional culinary skills.
          </p>

          <Link to="/courses" className="primary-button">
            View Programme
          </Link>

        </div>

      </section>

      {/* TESTIMONIALS */}

<section className="section testimonials">

  <div className="section-heading">
    <p>TESTIMONIALS</p>
    <h2>What Our Students Say</h2>

    <span>
      Hear from students who have experienced our practical culinary training.
    </span>
  </div>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        "The hands-on training gave me the confidence to work
        professionally in the kitchen. Every class was practical and inspiring."
      </p>

      <h4>— Deborah A.</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "I learned baking and pastry techniques I never knew before.
        The instructors were supportive and experienced."
      </p>

      <h4>— Michael O.</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "MIKKY'S Culinary School transformed my passion for cooking
        into professional skills I can use for my career."
      </p>

      <h4>— Grace E.</h4>
    </div>

  </div>

</section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div>

          <p>START YOUR CULINARY JOURNEY</p>

          <h2>
            Turn Your Passion Into a Profession.
          </h2>

          <span>
            Take the next step toward becoming a confident culinary
            professional.
          </span>

        </div>

        <Link to="/apply" className="primary-button">
          Apply Now
        </Link>

      </section>

    </>
  );
}




export default Home;