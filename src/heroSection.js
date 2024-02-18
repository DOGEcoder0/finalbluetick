

import hero1 from "./Assets/top_img1.jpg"
import "./heroSection.css"
function herosection() {
  return (
    <div className="hero_container">
      <img src={hero1} alt="hero" />
      <h1><b>TRANSFORMING ENTERPRISES</b></h1> 
      <h2>with cutting-edge, scalable, privacy- <br/> focused generative AI Solutions</h2>
      <p>Founded in 2017, Bluetick Consultants is a <br/> technology-driven firm that has made a <br/>significant impact in the indian and US<br/> startup ecosystems.</p>
      <a href="https://www.bluetickconsultants.com/generative-ai.html" target="blank"><button><b>To know more about us</b></button></a>
    </div>
    
  );
}

export default herosection;
