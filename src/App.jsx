import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  let districts=[
    {
        "id" :1,
        "title" : "Kozhikode",
        "description" : "Coastal city with a rich trading history and beautiful beaches.",
        "image" : "/image/clt.jpeg",
    },
  
    {
        "id" :2,
        "title" : "Wayanad",
        "description" : "Picturesque rural district known for its forests, wildlife, and ancient caves.",
        "image" : "/image/Untitled.jpeg",
    },
  
    {
  
        "id" :3,
        "title" : "Thrissur",
        "description" : "Cultural capital of Kerala, famous for vibrant festivals and historical monuments.",
        "image" : "/image/th.jpeg",
    },
  
    {
  
        "id" :4,
        "title" : "Thiruvananthapuram",
        "description" : " Capital of the southern Indian state of Kerala",
        "image" : "/image/tvm.jpeg",
    },
  
    {
        "id" :5,
        "title" : "Alappuzha",
        "description" : "Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala ",
        "image" : "/image/alp.jpeg",
    },
  
    {
        "id" :6,
        "title" : "Pathanamthitta",
        "description" : " situated in the Central Travancore region in the state of Kerala ",
        "image" : "/image/pat.jpeg",
  
  
    },
  
    {
  
        "id" :7,
        "title" : "Idukki",
        "description" : " A district blessed with picturesque landscapes, hill stations like Munnar, wildlife sanctuaries, and the famous Idukki Arch Dam.",
        "image" : "/image/idk.jpeg",
  
    },
  
    {
        "id" :8,
        "title" : "Kottayam",
        "description" : " Famous for its rubber plantations and backwater tourism. ",
        "image" : "/image/kot.jpeg",
  
  
    },
  
    {
        "id" :9,
        "title" : "Kollam",
        "description" : " Located on the banks of the Ashtamudi Lake.",
        "image" : "/image/kol.jpeg",
  
  
    },

    {
      "id" :10,
      "title" : "Kannur",
      "description" : "Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. ",
      "image" : "/image/kan.jpeg",


  },

  {
    "id" :11,
    "title" : "Malappuram",
    "description" : "Malappuram is a city in the Indian state of Kerala, spread over an area of 158.20 km² including the surrounding suburban areas.",
    "image" : "/image/mlp.jpeg",


},

{
  "id" :12,
  "title" : "Ernakulam",
  "description" : "Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises.",
  "image" : "/image/ekm.jpeg",


},

{
  "id" :13,
  "title" : "Palakkad",
  "description" : "Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds",
  "image" : "/image/pkd.jpeg",


},

{
  "id" :14,
  "title" : "Kasaragod",
  "description" : "Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. ",
  "image" : "/image/god.jpeg",


}







  ]
  
  return (
    <div>
      <h1><center>DISTRICTS IN KERALA</center></h1>
      <Container> 
        <Row>
          {
            districts.map((district,index) => {
              return(
                <Col sm={3} key={index}>
                <Card>
                <Card.Img style={{height:'13rem'}} variant="top" src={district.image} />
                <Card.Body>
                <Card.Title> 
                  {district.title}
                  </Card.Title>
                  <Card.Text>{district.description}</Card.Text>
                <Button variant="primary">vist</Button>
                </Card.Body>
                </Card>
                </Col>

              )

            
            })
  
          }

        </Row>
      </Container>

    </div>
  )

}











