import React from 'react';
import './App.css';

const Homepage = () => {
  return (

    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
        <button className="contact-btn">Contact us</button>
      </nav>


      {/* Section one */}
      <div className="section-one">
        <div className="section-one-text">
          <h1>
            Experienced <span className="highlight">mobile and web</span>
            <br /> applications and website <br/> builders measuring.
          </h1>
          <p>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web <br/>
           applications and website builders measuring dozens of completed projects.
           <br/> We build and develop mobile applications for several top platforms,
           <br/> including Android  & IOS. 
          </p>
          <div className="section-one-buttons">
            <button className="primary-btn">Contact us</button>
            <button className="secondary-btn">View more</button>
          </div>
        </div>
        <div className="section-one-image">
          <img src="./image1.png" alt="Illustration" />
        </div>
      </div>


      {/* Features Section */}
      <div className="features-section">
        {[
          { image: "/image2.png", 
            title: "Web Application", 
            description: "Lorem Ipsum is simply.",
            bgColor: "#efeaff"},
      
          { image: "/image3.png", 
            title: "SEO", 
            description: "Lorem ipsum is simply.",
            bgColor: "#edfeda"},

          { image: "/image4.png", 
            title: "AR/VR Solutions", 
            description: "Lorem ipsum is simply.",
            bgColor: "#dae6ff"},

          { image: "/image5.png", 
            title: "Mobile Applications", 
            description: "Lorem ipsum is simply.",
            bgColor: "#ffe5da"},

        ].map((feature, index) => (
          <div key={index} className="feature-item">
            <div 
              className="image-container" 
              style={{ backgroundColor: feature.bgColor }} 
            >
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="feature-text">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="text-mid">
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="text-mid2">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        <br/> Lorem Ipsum has been the industry's</p> 
        </div>


      {/* Info Boxes */}
      <div className="info-boxes">
        <div className="info-box light">
          <div className="container">
            <div className="mini-image">
              <img src="./image6.png" alt="illustration" />
            </div>
            
            <div className="text-content">
              <div className="title">Lorem Ipsum is simply dummy text</div>
              <div className="subtitle">Lorem Ipsum is simply dummy text</div>
            </div>
          </div>

          <div className="style-text"> <span className="highlight">Lorem Ipsum </span> is simply dummy<br/> text of the printing. </div>
          <div className="style-text2">
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br/> mobile and web applications and website builders<br/>
             measuring dozens of completed projects. We build and<br/> develop mobile applications for several top platforms,<br/>
              including Android & IOS. </p>
          </div>
        </div>

        <div className="info-box dark">
          <img src="./image7.jpeg" alt="illustration"></img>
        </div>
      </div>



      <div className="info-boxes">
      <div className="info-box dark">
          <img src="./image8.png" alt="illustration"></img>
        </div>

        <div className="info-box light">
          <div className="container">
            <div className="mini-image">
              <img src="./image6.png" alt="illustration" />
            </div>
            
            <div className="text-content">
              <div className="title">Lorem Ipsum is simply dummy text</div>
              <div className="subtitle">Lorem Ipsum is simply dummy text</div>
            </div>
          </div>

          <div className="style-text"> <span className="highlight">Lorem Ipsum </span> is simply dummy<br/> text of the printing. </div>
          <div className="style-text2">
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br/> mobile and web applications and website builders<br/>
             measuring dozens of completed projects. We build and<br/> develop mobile applications for several top platforms,<br/>
              including Android & IOS. </p>
          </div>
        </div>
      </div>


      <div className="info-boxes">
        <div className="info-box light">
          <div className="container">
            <div className="mini-image">
              <img src="./image6.png" alt="illustration" />
            </div>
            
            <div className="text-content">
              <div className="title">Lorem Ipsum is simply dummy text</div>
              <div className="subtitle">Lorem Ipsum is simply dummy text</div>
            </div>
          </div>

          <div className="style-text"> <span className="highlight">Lorem Ipsum </span> is simply dummy<br/> text of the printing. </div>
          <div className="style-text2">
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br/> mobile and web applications and website builders<br/>
             measuring dozens of completed projects. We build and<br/> develop mobile applications for several top platforms,<br/>
              including Android & IOS. </p>
          </div>
        </div>

        <div className="info-box dark">
          <img src="./image9.png" alt="illustration"></img>
        </div>
      </div>


      <div className="dual-boxes">
        <div className="box light-box">
          <h3>Lorem Ipsum is simply dummy text.</h3>
          <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
          <button>View More</button>
        </div>

        <div className="box dark-box">
          <h3>Lorem Ipsum is simply dummy text.</h3>
          <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
          <button>View More</button>
        </div>
      </div>



      {/* Partners Section */}
      <div className="partners-section">
        <h2>You will be in good company</h2>
        <div className="partners-logos">
        <img src="/image10.png" alt="beneoshop" />
          <img src="/image11.png" alt="caspio" />
          <img src="/image12.png" alt="hyperbrew" />
          <img src="/image13.png" alt="leo trippi" />
        </div>
      </div>


      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3>Lorem Ipsum is simply dummy<br/> text of the printing.</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>


      {/* Footer */}
      <footer className="footer">
      <div className="footer-column">
        <div className="footer-logo">LOGO</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>@Lorem</p>
      </div>

      <div className="footer-column">
        <h4>About us</h4>
        <p>Lorem</p>
        <p>Portfolio</p>
        <p>Careers</p>
        <p>Contact us</p>
      </div>

      <div className="footer-column">
        <h4>Contact us</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>+908 89097 890</p>
      </div>


      {/* Social Media Icons */}
      <div className="footer-column social-icons">
        <img src="/facebook.png" alt="Facebook" />
        <img src="/instagram.png" alt="Instagram" />
        <img src="/twitter.png" alt="Twitter" />
        <img src="/linkedin.png" alt="LinkedIn" />
      </div>
    </footer>

    <div className="footer-bottom">
        <p>Copyright © 2024 Lorem All rights Reserved</p>
      </div>
      
    </div>
  );
};

export default Homepage;