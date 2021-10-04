import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Plain Text (Static)</Label>
        <Input plaintext value="Some plain text/ static value" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleNumber">Number</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="number placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="datetime placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Fecha de nacimiento</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleColor">Color</Label>
        <Input
          type="color"
          name="color"
          id="exampleColor"
          placeholder="color placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search placeholder"
        />
      </FormGroup>
         
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleRange">Range</Label>
        <Input type="range" name="range" id="exampleRange" />
      </FormGroup>
      <FormGroup check>
       
      </FormGroup>
      
    </Form>
  );
}

export default Example;