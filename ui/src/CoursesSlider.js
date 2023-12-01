import React from 'react'

function CoursesSlider() {
  return (
    
    <div>
       <h2 className="learners-heading">Learners are viewing</h2>
      <section className="courses">
        <div className='left-icon'> <i class="fa fa-chevron-left" aria-hidden="true"></i></div>
      
    <div className="course" id="course1">
      <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
        <img className="course-img" src="react.png" />
        <h3>The Complete 2023 Web Development Bootcamp</h3>
        <p className='author'>Dr. Angela Yu</p>
        <div className="rating">
          <div>
            <h5>4.7</h5>
          </div>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <div>
            <p style={{paddingLeft: "3px"}}>(337,556)</p>
          </div>
        </div>
        <h4 className='price'>
          ₹389 (<s>₹3,199</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className="course" id="course2">
      <a href="https://www.udemy.com/course/100-days-of-code/">
        <img className="course-img" src="python.png" />
        <h3>100 Days of Code: The Complete Python Pro Bootcamp for 2023</h3>
        <p className='author'>Dr. Angela Yu</p>
        <div className="rating">
          <h4>4.7</h4>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <p style={{paddingLeft: "3px"}}>(250,546)</p>
        </div>
        <h4 className='price'>
          ₹389 (<s>₹3,199</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className="course" id="course3">
      <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
        <img className="course-img" src="react img.png" />
        <h3>
          React - The Complete Guide 2023 (incl. React Router & Redux)
        </h3>
        <p className='author'>Academind by Maximilian Schwarzmüller</p>
        <div className="rating">
          <h4>4.6</h4>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <p style={{paddingLeft: "3px"}}>(250,586)</p>
        </div>
        <h4 className='price'>
          ₹389 (<s>₹3,199</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className="course" id="course4">
      <a href="https://www.udemy.com/course/the-complete-javascript-course/">
        <img className="course-img" src="javascript img.png" />
        <h3>The Complete 2023 Web Development Bootcamp</h3>
        <p className='author'>Jonas Schmedtmann</p>
        <div className="rating">
          <h4>4.7</h4>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <p style={{paddingLeft: "3px"}} >(189,786)</p>
        </div>
        <h4 className='price'>
          ₹389 (<s>₹3,199</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className="course" id="course5">
      <a href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/">
        <img className="course-img" src="aws-img.png" />
        <h3>[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02</h3>
        <p className='author'>
          Stephane Maarek | AWS Certified Cloud Practitioner,Solutions
          Architect,Developer
        </p>
        <div className="rating">
          <h4>4.7</h4>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <p style={{paddingLeft: "3px"}}>(836,868)</p>
        </div>
        <h4 className='price'>
          ₹389 (<s>₹3,199</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className="course" id="course6">
      <a href="https://www.udemy.com/course/machinelearning/">
        <img className="course-img" src="ml.png" />
        <h3>
          Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]
        </h3>
        <p className='author'>Kirill Eremenko</p>
        <div className="rating">
          <h4>4.7</h4>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <p style={{paddingLeft: "3px"}}>(177,556)</p>
        </div>
        <h4 className='price'>
          ₹389 (<s>₹3,199</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className="course" id="course7">
      <a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/">
        <img className="course-img" src="data science.png" />
        <h3>Python for Data Science and Machine Learning Bootcamp</h3>
        <p className='author'>Jose Portilla</p>
        <div className="rating">
          <h4 >4.6 </h4>
          <div style={{paddingLeft: "3px"}}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p style={{paddingLeft: "3px"}}>  (137,556)</p>
        </div>
        <h4 className='price'>
          ₹499 (<s>₹3,899</s>)
        </h4>
        <h5 className="bestseller">Bestseller</h5>
      </a>
    </div>
    <div className='right-icon'><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    

    
  </section>
  </div>
  )
}

export default CoursesSlider