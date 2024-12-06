export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div className="d-flex justify-content-center">
        <div className="col-6 resume-list">
          <h3 className="pt-4">Technical Skills</h3>
          <div className="pb-4">
            JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
            Express, React, Node, Handlebars, jQuery, Bootstrap, Adobe Audition,
            Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator, Audio
            Engineering, Audio Recording, Audio Mixing, Audio Mastering, Live
            Audio Mixing, Unreal Engine 5
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-6 ">
          <h3>Experience</h3>

          <div className="d-flex fw-bold">
            <div className="me-auto px-2 ">Bookseller</div>
            <div className="px-2  ">2022 - Present</div>
          </div>
          <div className="d-flex fw-bold">
            <div className="me-auto px-2 ">Barnes & Noble </div>
            <div className="px-2  pb-2">Mesquite, TX</div>
          </div>

          <div className="text-start ps-5 pe-2">
            Developed strong customer service, problem-solving, and
            organizational skills, with a focus on creating seamless and
            user-centric experiences.
          </div>
          <div className="d-flex fw-bold px-2 ">Key accomplishments</div>
          <ul className=" text-start ps-5 pe-2">
            <li className="my-2">
              Delivered exceptional customer service, assisting customers in
              finding relevant products and improving overall satisfaction.
            </li>
            <li className="my-2">
              Managed product displays and organized sales sections, ensuring an
              appealing presentation that maximized product visibility and
              boosted sales.
            </li>
            <li className="my-2">
              Collaborated effectively with team members to ensure efficient
              store operations, enhancing the overall customer experience.
            </li>
            <li className="my-2">
              Successfully promoted and sold premium memberships, increasing
              customer loyalty and driving sales.
            </li>
          </ul>

          <div className="d-flex fw-bold">
            <div className="me-auto px-2 ">Junior Audio Engineer</div>
            <div className="px-2 "> 2019-2022</div>
          </div>
          <div className="d-flex fw-bold">
            <div className="me-auto px-2 ">Houston Christian University </div>
            <div className="px-2  pb-2"> Houston, TX</div>
          </div>

          <div className="text-start ps-5 pe-2">
            3+ years of live audio production experience, managing over 200
            events and collaborating closely with clients to ensure seamless
            technical setups and execution.
          </div>
          <div className="d-flex fw-bold px-2 ">Key accomplishments</div>
          <ul className=" text-start ps-5 pe-2">
            <li className="my-2">
              Delivered flawless audio experiences for a variety of events,
              including live music, educational panels, and seminars.
            </li>
            <li className="my-2">
              Worked directly with clients to understand requirements and ensure
              smooth event operations.
            </li>
            <li className="my-2">
              Developed strong troubleshooting and adaptability skills, ensuring
              optimal performance under pressure.
            </li>
          </ul>
        </div>

        
        
      </div>





      <div className="d-flex justify-content-center">
        <div className="col-6 ">
          <h3>Education</h3>
          <div className="d-flex fw-bold p-2 ">Certificate in Full Stack Web Development</div>
          <div className="d-flex ">
            <div className="me-auto px-2 ">Southern Methodist University </div>
            <div className="px-2  ">University Park, TX</div>
          </div>
          <div className="d-flex fw-bold p-2 pt-4 ">BFA in Interactive Media and Digital Design</div>
          <div className="d-flex ">
            <div className="me-auto px-2 ">Houston Baptist University </div>
            <div className="px-2  pb-2">Houston, TX</div>
          </div>


          
        </div>
      </div>
      <a
        href="/Trey Tayler Smith-Resume-2024.pdf"
        download="Trey-Tayler-Smith-Resume"
      >
        <button className="badge bg-primary rounded-pill fs-5 p-3 m-3">
          Download Resume
        </button>
      </a>
    </div>
  );
}
