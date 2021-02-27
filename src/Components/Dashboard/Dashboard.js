import React from 'react';
import UserForm from '../UserForm/UserForm';
import { Container } from 'react-bootstrap';
import data from '../../data';



const Dashboard = () => {

  return (
    <Container>
        <UserForm data={data} />
    </Container>
  );
}
export default Dashboard;