import { Stack, Row, Form } from "react-bootstrap";



type AdressData={
    state:string;
    city:string,
    phoneNumber:string
}


type AdressFormProps=AdressData & {
    updateFields: (fields: Partial<AdressData>) => void;
}

export default function AdressForm({updateFields}:AdressFormProps) {
  return (
    <Stack>
    <Row className={"text-center"}><h1>Adress Info </h1></Row>
  <Row>
    <Form.Group title="State">
      <Form.Label>State/Province</Form.Label>
      <Form.Control
        onChange={(e) => updateFields({ state: e.target.value })}
      />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group title="City">
      <Form.Label>City</Form.Label>
      <Form.Control
        onChange={(e) => updateFields({ city: e.target.value })}
      />
    </Form.Group>
  </Row>
  <Row>
    <Form.Group title="Phone Number">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
      />
    </Form.Group>
  </Row>

</Stack>

  )
}
