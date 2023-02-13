import "./output.css";
import { Container, Row, Col, } from "reactstrap";
import Table from "./table";


export default function Output({bioData, institutionData}) {

    let array= bioData.reverse();
    let array1= institutionData.reverse();



    return (

    <div className="bio-data">
        <Container>
        <h1>CURRICULUM VITAE OF {Array.from(array)[0].firstname.toUpperCase()}</h1>
         <h2>A.   BIODATA</h2>
             <Row>
                <Col className="question">

                    a.   FULL NAME: <br />
                    b.   DATE OF BIRTH: <br />
                    c.   DEPARTMENT: <br />
                    d.   STATE OF ORIGIN: <br />
                    e.   PHONE NUMBER: <br />
                    f.   EMAIL: <br />
                    g.   LOCAL GOVERNMENT AREA: <br />
                </Col>

            <Col className= "answer">
                <p>{Array.from(array)[0].firstname.toUpperCase()}, {Array.from(array)[0].lastname.toUpperCase()} {Array.from(array)[0].middlename.toUpperCase()}<br />
                {Array.from(array)[0].dob}<br />
                {Array.from(array)[0].discipline.toUpperCase()}<br />
                {Array.from(array)[0].sog.toUpperCase()}<br />
                {Array.from(array)[0].phones}<br />
                {Array.from(array)[0].email.toLowerCase()}<br />
                {Array.from(array)[0].lga.toUpperCase()}<br /></p>
            </Col>
         </Row>
        <h2>B.   Institution Attended</h2>
       <Row>
            <Col className="question">

                    a. {Array.from(array1)[0].institution1}<br />
                    b. {Array.from(array1)[0].institution2}<br />
                    c. {Array.from(array1)[0].institution3}<br />
                    e. {Array.from(array1)[0].institution4}<br />
                    f. {Array.from(array1)[0].institution5}
            </Col>
            <Col className="answer">

                    {Array.from(array1)[0].institution1date}<br />
                    {Array.from(array1)[0].institution2date}<br />
                    {Array.from(array1)[0].institution3date}<br />
                    {Array.from(array1)[0].institution4date}<br />
                    {Array.from(array1)[0].institution5date}<br />
            </Col>


       </Row>
       </Container>
       <Table bioData={bioData} />
    </div>




    );

}

