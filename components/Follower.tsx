import { Row, Col } from "react-bootstrap";
import { FollowerCard } from "./FollowerCard";

export const Follower = () => {
    return (
        <>
        <div className="follower">
            <Row>
                <Col>
                    <FollowerCard/>
                </Col>
                <Col>
                    <FollowerCard/>
                </Col>
                
            </Row>   
            <Row>
                <Col>
                    <FollowerCard/>
                </Col>
                <Col>
                    <FollowerCard/>
                </Col>
                
            </Row>   
            <Row>
                <Col>
                    <FollowerCard/>
                </Col>
                <Col>
                    <FollowerCard/>
                </Col>
                
            </Row>   
        </div>
                 
        </>
    );
}