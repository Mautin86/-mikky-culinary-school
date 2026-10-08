
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      {/* ================= COURSES HERO ================= */}

      <section className="courses-hero">

        <div className="courses-hero-content">

          <p className="hero-small">
            OUR PROGRAMS
          </p>

          <h1>
            Learn.
            <br />
            <span>Create. Excel.</span>
          </h1>

          <p>
            Develop practical culinary and patisserie skills through
            professional training designed to prepare you for the real
            food and hospitality industry.
          </p>

          <Link to="/apply" className="primary-button">
            Start Your Journey
          </Link>

        </div>

        <div className="courses-hero-card">

          <span>FEATURED PROGRAM</span>

          <h2>
            Diploma in Culinary
            <br />
            Art & Patisserie
          </h2>

          <p>
            A comprehensive practical program for aspiring chefs and
            pastry professionals.
          </p>

          <div className="course-card-line"></div>

          <strong>
            Master the Art. Lead the Experience.
          </strong>

        </div>

      </section>


      {/* ================= MAIN PROGRAM ================= */}

      <section className="section courses-main">

        <div className="section-heading">

          <p>OUR SIGNATURE PROGRAM</p>

          <h2>
            Diploma in Culinary Art & Patisserie
          </h2>

          <span>
            Our signature program combines culinary arts, baking,
            patisserie, food presentation and professional kitchen
            skills into one practical learning experience.
          </span>

        </div>


        <div className="course-program-grid">

          {/* CARD 1 */}

          <div className="program-card">

            <span>01</span>

            <div className="program-icon">
              🍳
            </div>

            <h3>
              Culinary Arts
            </h3>

            <p>
              Learn professional cooking techniques, food preparation,
              kitchen organization and modern culinary practices.
            </p>

            <ul>
              <li>Food preparation</li>
              <li>Cooking techniques</li>
              <li>Kitchen organization</li>
              <li>Food presentation</li>
            </ul>

          </div>


          {/* CARD 2 */}

          <div className="program-card featured-program">

            <span>02</span>

            <div className="program-icon">
              🧁
            </div>

            <h3>
              Patisserie
            </h3>

            <p>
              Build strong pastry and baking skills while learning how
              to create beautiful and professional desserts.
            </p>

            <ul>
              <li>Baking fundamentals</li>
              <li>Pastry production</li>
              <li>Cake decoration</li>
              <li>Dessert presentation</li>
            </ul>

          </div>


          {/* CARD 3 */}

          <div className="program-card">

            <span>03</span>

            <div className="program-icon">
              👨‍🍳
            </div>

            <h3>
              Professional Skills
            </h3>

            <p>
              Develop the discipline, confidence and professional
              standards required to succeed in a modern kitchen.
            </p>

            <ul>
              <li>Kitchen hygiene</li>
              <li>Teamwork</li>
              <li>Kitchen discipline</li>
              <li>Professional standards</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= WHAT YOU GAIN ================= */}

      <section className="courses-benefits">

        <div className="section-heading">

          <p>YOUR DEVELOPMENT</p>

          <h2>
            More Than Skills.
            <br />
            We Build Professionals.
          </h2>

        </div>


        <div className="benefits-grid">

          <div>
            <span>01</span>
            <h3>Practical Experience</h3>
            <p>
              Learn through hands-on training that allows you to
              develop confidence in the kitchen.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Creative Thinking</h3>
            <p>
              Explore creativity through food presentation, pastry
              design and flavour development.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Professional Discipline</h3>
            <p>
              Develop the organization, hygiene and discipline expected
              in a professional kitchen.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Career Confidence</h3>
            <p>
              Build the skills and confidence needed to pursue
              opportunities within the culinary industry.
            </p>
          </div>

        </div>

      </section>


      {/* ================= COURSE OUTLINE CTA ================= */}

      <section className="courses-cta">

        <div>

          <p>
            READY TO LEARN?
          </p>

          <h2>
            Explore the Complete
            <br />
            Course Outline.
          </h2>

          <span>
            Discover the modules and practical skills you will develop
            throughout your culinary journey.
          </span>

        </div>

        <Link
          to="/course-outline"
          className="secondary-button"
        >
          View Course Outline
        </Link>

      </section>


      {/* ================= APPLY CTA ================= */}

      <section className="cta">

        <div>

          <p>
            TAKE THE NEXT STEP
          </p>

          <h2>
            Your Culinary Journey Starts Here.
          </h2>

          <span>
            Turn your passion for food into professional skills.
          </span>

        </div>

        <Link to="/apply" className="primary-button">
          Apply Now
        </Link>

      </section>

    </>
  );
}

export default Courses;