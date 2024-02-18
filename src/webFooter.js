import "./webFooter.css";
import logo2 from "./Assets/logo2.png"
import logo1 from "./Assets/logo1.png"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid } from "@mui/material";



function webfooter(){
    return(
        <>
        <hr style={{fontSize:'2px'}}/>
        <footer className="footer_container">
            <div className="logo_products">
                <div className="logos">
                    <img src={logo1} alt="logo"/>
                    <h4>Bluetick Consultants LLP</h4>
                    <p>contact@bluetickconsultants.com</p>
                    <img src={logo2} alt="logo"/>
                </div>
                <div className="resources_products">
                    <div className="resource">
                        <div ><DoubleArrowIcon/></div>
                        <div className="icon">RESOURCES</div>
                    </div>
                    <p>Blogs</p>
                    <div className="resource">
                        <div ><DoubleArrowIcon/></div>
                        <div className="icon">PRODUCTS</div>
                    </div>
                    <p>Talk To Code</p>
                    <p>InterviewGBT</p>
                    <p>PrivacyDoc</p>
                    <p>Sales Call Evaluater</p>
                </div>
            </div>
            <div className="social_logo">
                <FacebookIcon fontSize="large"/>
                <InstagramIcon fontSize="large"/>
                <XIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
            </div>
            <h5> 2024 © All rights reserved by Bluetick Consultants LLP</h5>
            
        </footer>
        </>
    )
}
export default webfooter


