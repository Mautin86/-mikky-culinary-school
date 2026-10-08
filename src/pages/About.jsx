import mikky from "../assets/mikky.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}

      <section className="about-hero">
        <div className="about-hero-content">
          <p className="hero-small">ABOUT MIKKY'S</p>

          <h1>
            Passion.
            <br />
            <span>Discipline. Excellence.</span>
          </h1>

          <p>
            MIKKY’S CULINARY SCHOOL is a professional learning environment
            created to help passionate individuals transform their love for
            food into practical culinary skills and a rewarding career.
          </p>
        </div>

        <div className="about-hero-image">
          <img
            src={mikky}
            alt="Mikky's Culinary School"
          />
        </div>
      </section>


      {/* ================= OUR STORY ================= */}

      <section className="section about-story">

        <div className="section-heading">
          <p>OUR STORY</p>

          <h2>
            Building Confident Culinary Professionals.
          </h2>
        </div>

        <div className="about-story-content">

          <div>
            <p>
              At MIKKY’S CULINARY SCHOOL, we believe culinary education
              should go beyond recipes. It should develop creativity,
              discipline, confidence, precision, and professional
              responsibility.
            </p>

            <p>
              Our approach combines practical training with professional
              guidance, allowing students to understand the techniques,
              standards, and mindset required in a modern culinary
              environment.
            </p>
          </div>

          <div>
            <p>
              From culinary arts to patisserie, our students are encouraged
              to learn, experiment, create, and continuously improve their
              craft.
            </p>

            <p>
              Whether you are beginning your journey or looking to develop
              your existing skills, MIKKY’S provides an environment where
              passion can become professional excellence.
            </p>
          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}

      <section className="about-values">

        <div className="about-value-card">
          <span>01</span>

          <h3>Our Mission</h3>

          <p>
            To equip aspiring chefs and pastry professionals with practical
            knowledge, professional skills, creativity, and confidence
            needed to succeed in the food and hospitality industry.
          </p>
        </div>


        <div className="about-value-card">
          <span>02</span>

          <h3>Our Vision</h3>

          <p>
            To become a respected culinary training institution known for
            developing skilled, creative, disciplined, and industry-ready
            culinary professionals.
          </p>
        </div>


        <div className="about-value-card">
          <span>03</span>

          <h3>Our Values</h3>

          <p>
            Excellence, creativity, discipline, professionalism, teamwork,
            continuous learning, and passion for the culinary arts.
          </p>
        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="section about-why">

        <div className="section-heading">

          <p>WHY CHOOSE US</p>

          <h2>
            More Than a School.
            <br />
            A Place to Grow.
          </h2>

        </div>


        <div className="about-why-grid">

          <div>
            <span>01</span>
            <h3>Hands-On Learning</h3>
            <p>
              Gain practical experience through real culinary and pastry
              training.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Professional Guidance</h3>
            <p>
              Learn techniques and standards that prepare you for the
              professional food industry.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Creative Development</h3>
            <p>
              Develop your own culinary identity through creativity and
              experimentation.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Career Preparation</h3>
            <p>
              Build the confidence and discipline required for a successful
              culinary career.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div>

          <p>READY TO BEGIN?</p>

          <h2>
            Your Culinary Journey Starts Here.
          </h2>

          <span>
            Take the first step toward becoming a confident culinary
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

export default About;