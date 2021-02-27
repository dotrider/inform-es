import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = ({data}) => {

  const [ name, setName ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ placements, setPlacements ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ returnVisits, setReturnVisits ] = useState(0);
  const [ studies, setStudies ] = useState(0);
  const [ comments, setCommentes ] = useState('');
  
  return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Mes</Form.Label>
          <Form.Control as="select" value={month} onChange={e => setMonth(e.target.value)}>
            {
              data.map((m, i) => 
                <option key={i}>{m}</option>
              )
            }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Publicaciones</Form.Label>
          <Form.Control type="number" value={placements} onChange={e => setPlacements(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Horas</Form.Label>
          <Form.Control type="number" value={hours} onChange={e => setHours(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Revisitas</Form.Label>
          <Form.Control type="number" value={returnVisits} onChange={e => setReturnVisits(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Estudios</Form.Label>
          <Form.Control type="number" value={studies} onChange={e => setStudies(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentarios:</Form.Label>
          <Form.Control as="textarea" rows={3} value={comments} onChange={e => setCommentes(e.target.value)} />
        </Form.Group>
      </Form>
  );
};

export default UserForm;
