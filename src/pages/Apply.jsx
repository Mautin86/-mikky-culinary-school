
import { Link } from "react-router-dom";

function Apply() {
  const whatsappNumber = "2348166836561";

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const program = e.target.program.value;
    const source = e.target.source.value;
    const reason = e.target.reason.value;
    const experience = e.target.experience.value;

    const applicationMessage = `
🎓 *NEW APPLICATION — MIKKY'S CULINARY SCHOOL*

*PERSONAL INFORMATION*

Name: ${firstName} ${lastName}

Phone: ${phone}

Email: ${email}


*PROGRAM INFORMATION*

Preferred Program:
${program}

How did you hear about us?
${source}


*ABOUT THE APPLICANT*

Why do you want to study Culinary Arts & Patisserie?

${reason}


Previous Culinary / Hospitality Experience:

${experience || "No previous experience stated."}


Thank you.
This application was submitted through the MIKKY'S CULINARY SCHOOL website.
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      applicationMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="apply-hero">
        <div className="apply-hero-content">

          <p className="hero-small">
            ADMISSIONS
          </p>

          <h1>
            Start Your
            <br />
            <span>Culinary Journey.</span>
          </h1>

          <p>
            Take the first step toward becoming a skilled culinary
            professional. Complete the application form and our team
            will contact you with the next steps.
          </p>

        </div>

        <div className="apply-hero-badge">

          <span>PROGRAM</span>

          <strong>DIPLOMA</strong>

          <p>
            Culinary Art
            <br />
            & Patisserie
          </p>

        </div>
      </section>


      {/* APPLICATION */}
      <section className="apply-section">

        <div className="apply-intro">

          <p>
            APPLICATION FORM
          </p>

          <h2>
            Tell Us About
            <br />
            Yourself.
          </h2>

          <span>
            Please provide accurate information so our admissions team
            can assist you properly.
          </span>

          <div className="apply-steps">

            <div>
              <strong>01</strong>
              <span>Complete the form</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Our team reviews your application</span>
            </div>

            <div>
              <strong>03</strong>
              <span>We contact you with next steps</span>
            </div>

          </div>

        </div>


        {/* FORM */}
        <form
          className="application-form"
          onSubmit={handleSubmit}
        >

          {/* PERSONAL INFORMATION */}

          <div className="application-form-heading">

            <span>01</span>

            <h3>
              Personal Information
            </h3>

          </div>


          <div className="form-row">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />

          </div>


          <div className="form-row">

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

          </div>


          {/* PROGRAM */}

          <div className="application-form-heading second-heading">

            <span>02</span>

            <h3>
              Program Information
            </h3>

          </div>


          <select
            name="program"
            defaultValue=""
            required
          >

            <option value="" disabled>
              Select your preferred program
            </option>

            <option>
              Diploma in Culinary Art & Patisserie
            </option>

            <option>
              Culinary Arts
            </option>

            <option>
              Patisserie
            </option>

          </select>


          <select
            name="source"
            defaultValue=""
            required
          >

            <option value="" disabled>
              How did you hear about us?
            </option>

            <option>Instagram</option>
            <option>Facebook</option>
            <option>TikTok</option>
            <option>WhatsApp</option>
            <option>Friend / Family</option>
            <option>Other</option>

          </select>


          {/* ABOUT APPLICANT */}

          <div className="application-form-heading second-heading">

            <span>03</span>

            <h3>
              Tell Us More
            </h3>

          </div>


          <textarea
            name="reason"
            placeholder="Why do you want to study culinary arts and patisserie?"
            required
          ></textarea>


          <textarea
            name="experience"
            placeholder="Tell us about your previous culinary or hospitality experience (if any)."
          ></textarea>


          {/* CONFIRMATION */}

          <label className="application-check">

            <input
              type="checkbox"
              required
            />

            <span>
              I confirm that the information provided is accurate.
            </span>

          </label>


          {/* SUBMIT */}

          <button
            type="submit"
            className="primary-button application-button"
          >
            Submit Application via WhatsApp
          </button>

        </form>

      </section>


      {/* HELP SECTION */}

      <section className="apply-help">

        <div>

          <p>
            HAVE QUESTIONS?
          </p>

          <h2>
            Not Ready to Apply Yet?
          </h2>

          <span>
            Explore our programs or contact the school if you need
            more information before applying.
          </span>

        </div>


        <div className="apply-help-buttons">

          <Link
            to="/courses"
            className="secondary-button"
          >
            Explore Courses
          </Link>

          <Link
            to="/contact"
            className="primary-button"
          >
            Contact Us
          </Link>

        </div>

      </section>
    </>
  );
}

export default Apply;