import student from "../assets/student.jpeg";
import food from "../assets/food.jpeg";
import meal from "../assets/meal.jpeg";
import contact from "../assets/contact.jpeg";
import kids from "../assets/kids.jpeg";
import mic from "../assets/mic.mp4";

function Gallery() {
  return (
    <section className="section">
      <div className="section-heading">
        <p>OUR GALLERY</p>
        <h2>Inside The Culinary Experience</h2>

        <span>
          Explore our learning environment, practical training sessions,
          and culinary creations.
        </span>
      </div>

      <div className="gallery-grid">

        <div className="gallery-item">
          <img src={student} alt="Mikky Culinary Student" />
        </div>

        <div className="gallery-item">
          <img src={food} alt="Professional Culinary Dish" />
        </div>

        <div className="gallery-item">
          <img src={meal} alt="Delicious Culinary Creation" />
        </div>

        <div className="gallery-item">
          <img src={contact} alt="Culinary Conference" />
        </div>

        <div className="gallery-item">
          <img src={kids} alt="Culinary Kids" />
        </div>

        <div className="gallery-item">
          <video src={mic} controls>
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}

export default Gallery;