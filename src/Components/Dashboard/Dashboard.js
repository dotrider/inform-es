import React, { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import { Container } from 'react-bootstrap';
import data from '../../data';



const Dashboard = () => {

  // const [ name, setName ] = useState('');
  // const [ month, setMonth ] = useState('');
  // const [ placements, setPlacements ] = useState(0);
  // const [ Hours, setHours ] = useState(0);
  // const [ returnVisits, setReturnVisits ] = useState(0);
  // const [ studies, setStudies ] = useState(0);
  // const [ comments, setCommentes ] = useState(0);


  return (
    <Container>
        <UserForm data={data} />
    </Container>
  );
}
export default Dashboard;