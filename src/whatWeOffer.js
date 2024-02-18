import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import "./whatWeOffer.css";


function offer(){
    return(
        <div className="offer_container">
            <div className="offer_container_content">
                <TravelExploreIcon fontSize='large' color='success' />
                <h2>Explore AI Opportunities for Your Enterprise</h2>
                <p>Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</p>

            </div>
            <div className="offer_container_content">
                <Diversity3Icon fontSize='large' color='success'/>
                <h2>Design AI Trust Layer</h2>
                <p style={{paddingTop: "8px"}}> <br/>Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</p>
            </div>
            <div className="offer_container_content">
                <EngineeringIcon fontSize='large' color='success'/>
                <h2>Scalability-Focused Solutions</h2>
                <p>Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</p>
            </div>
            <div className="offer_container_content">
                <AutoModeIcon fontSize='large' color='success'/>
                <h2>End to end Workflow automation</h2>
                <p>Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</p>
            </div>
        </div>
    )
}

export default offer