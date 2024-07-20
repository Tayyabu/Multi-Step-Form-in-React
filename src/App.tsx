import { FormEvent, useState } from "react";
import { Container, Form, Stack, Button } from "react-bootstrap";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { UserForm } from "./components/UserForm";
import AdressForm from "./components/AdressForm";
import AccountForm from "./components/AccountForm";

type InitalData = {
  firstName: string;
  lastName: string;
  age: string;
  state: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const INITAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  state: '',
  city: '',
  phoneNumber: '',
  email: '',
  password: '',
};

const App = () => {
  const [data, setData] = useState<InitalData>(INITAL_DATA);

  function updateFields(fields: Partial<InitalData>) {
    setData((pre) => ({ ...pre, fields }));
  }

  const { step, currentIndex, steps, isFirstStep, isLastStep, next,back } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AdressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />
    ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();

    alert("User created");
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentIndex + 1} / {steps.length}
        </div>

        {step}
        <Stack
          direction="horizontal"
          gap={2}
          className="display-flex mt-4 justify-content-end "
        >
          {!isFirstStep && <Button variant={"outline-secondary"} onClick={back} >Back</Button>}
          <Button type="submit" variant={"primary"}>
           {isLastStep? "Submit":"Next"}
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default App;
