import { Stack, Row, Form } from "react-bootstrap";

type AcountData = {
  email: string;
  password: string;
};

type AccountFormProps = AcountData& {
  updateFields: (fields: Partial<AcountData>) => void;
};

function AccountForm({updateFields}:AccountFormProps) {
  return (
    <Stack>
      <Row className={"text-center"}>
        <h1>Adress Info </h1>
      </Row>
      <Row>
        <Form.Group title="Email Adress">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
          required
          type="email"
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group title="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          required
          type="password"
            onChange={(e) => updateFields({ password: e.target.value })}
          />
        </Form.Group>
      </Row>
      
    </Stack>
  );
}

export default AccountForm;
