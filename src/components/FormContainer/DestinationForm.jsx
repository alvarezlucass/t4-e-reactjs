import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DestinationForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Carga de Salidas</Label>
        <Input plaintext value="Cargar todos los detalles necesarios" />
      </FormGroup>
        
      <FormGroup>
        <Label for="exampleUrl">Url Si desea cargar una Historia o referencia sobre el lugar a visitar</Label>
        <Input
          type="url"
          name="url"
          id="exampleUrl"
          placeholder="url placeholder"
        />
      </FormGroup>
    
      <FormGroup>
        <Label for="exampleDate">Fecha de Salida</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTime">Horario de Salida</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Coordinadores</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>A Definir</option>
          <option>Facu</option>
          <option>Hebert</option>
          <option>Keyla</option>
          <option>Richard</option>
          <option>Leo</option>
          <option>Lucas</option>
        </Input>
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleSelect">Seleccionar Nivel</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>A Definir</option>
          <option>Principiantes / Familiar</option>
          <option>Principiante Intenso</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
          <option>Exploración</option>
        </Input>
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText">Descripción de la Salida</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleFile">Foto de Portada</Label>
        <Input type="file" name="file" id="exampleFile" />       

      </FormGroup>
      <FormGroup>
        <Label for="exampleRange">Range</Label>
        <Input type="range" name="range" id="exampleRange" />
      </FormGroup>
     
    </Form>
  );
}

export default DestinationForm;