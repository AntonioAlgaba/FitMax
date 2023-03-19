
import UncontrolledExample from "./bootstrapCarousel";
import {
    // Card,
    // CardHeader,
    // CardBody,
    // CardFooter,
    // Input,
    // Button,
    // Typography,
    Container,
    Row,
  } from "@material-tailwind/react";
  

function Home() {

    return (
        <>
    
            <main>
                {/* div for carousel */}
                <div className="annoyingImg">
                    <div> <UncontrolledExample /> </div>
                </div>
                
                {/* div for importance of health */}
                <div className="HealthMetrics">
                    <Container>
                        <Row>

                        </Row>
                    </Container>
                </div>  

                {/* div for our sponsors */}
                <div className="sponsors">

                </div>

                {/* div for google ads */}
                <div>

                </div>
            </main>    
        </>
    );

}

export default Home;