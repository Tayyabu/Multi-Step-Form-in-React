import { Form, Stack, Row } from "react-bootstrap";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export const UserForm = ({ updateFields }: UserFormProps) => {
  return (
    <Stack>
        <Row className={"text-center"}><h1>User Info</h1></Row>
      <Row>
        <Form.Group title="First Name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group title="Last Name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group title="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={(e) => updateFields({ age: e.target.value })}
          />
        </Form.Group>
      </Row>
    
    </Stack>
  );
};


