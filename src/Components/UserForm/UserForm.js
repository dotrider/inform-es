import React from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = ({data}) => {
  console.log(data, "data")
  return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Mes</Form.Label>
          <Form.Control as="select">
            {
              data.map((m, i) => 
                <option key={i}>
                    {m}
                </option>
              )
            }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Publicaciones</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Horas</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Revisitas</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Estudios</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentarios:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
  );
};

export default UserForm;
