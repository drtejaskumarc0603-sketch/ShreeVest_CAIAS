//import React from "react";


function About() {
  return (
    <div>

      {/* HEADER */}
      <div className="about-header">
        <img src="/assets/design.jpeg" alt="about"  />
        <hr/>
        <h1>
          We help beginners start their financial journey. <br />
          Making money management simple and smart.
        </h1>
      </div>

      <hr />

      {/* DIVIDER */}
      <hr className="divider" />

      {/* CONTENT */}
      <div className="container about-content">
        <div className="row">

          {/* LEFT */}
          <div className="col-md-6">
            <p>
              ShreeVest is a modern stock investment platform created with the vision of introducing financial awareness at an early age. The name “ShreeVest” is derived from the Sanskrit word “Shree,” which signifies wealth, prosperity, and good fortune. By combining this with the idea of investment, ShreeVest represents a pathway towards building a strong and prosperous financial future. The platform is designed to simplify complex financial concepts and make them accessible, engaging, and easy to understand for young minds.
            </p>

            <p>
              ShreeVest is specially developed for individuals below the age of 18 who are curious about money, savings, and the stock market. It provides a safe and controlled environment where young users can explore how investing works without the risks associated with real money. The platform aims to bridge the gap between theoretical knowledge and practical understanding by allowing users to experience investing in a guided and educational way.
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-md-6">
            <p>
              The primary advantage of ShreeVest is that it focuses on learning before earning. Users can practice investing through virtual simulations, understand market trends, and observe how decisions impact outcomes without facing financial loss. This helps in building confidence, improving decision-making skills, and developing a strong foundation in financial literacy. By starting early, users can gain valuable insights that will benefit them when they enter the real investment world in the future.
            </p>

            <p>
              In addition to providing a risk-free learning environment, ShreeVest offers a user-friendly interface that is designed specifically for beginners. It simplifies technical terms, presents data in an easy-to-understand format, and encourages users to explore and learn at their own pace. The platform not only teaches investing but also promotes disciplined financial habits, helping users understand the importance of saving, planning, and long-term wealth creation.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;