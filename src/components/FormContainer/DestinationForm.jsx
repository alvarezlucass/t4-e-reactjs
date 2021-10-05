import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import firebase from 'firebase';
import 'firebase/firestore';
import { useState } from 'react';
import { getFirestore } from '../../Services/getFirebase';
import Button from '@restart/ui/esm/Button';

const DestinationForm = (props) => {

  
    // const [ destFormData, setDestFormData] = useState({
    //   url: "",
    //   date: "",
    //   time: "",
    //   description: "",
    //   img: "",
    //   level: "",
    //   location: "",
    //   price: "",
    //   title: "",
    // })
    // const handleOnSubmit = (e) => {
    //   e.preventDefault();
    // }

    //   let destinity = {}
    //   destinity.date = firebase.firestore.Timestamp.fromDate( new Date());
    //   destinity.out = destFormData
    //   destinity.destinations = (formData =>{
    //       const id = formData.i.id;
    //       const title = formData.i.title;
    //       const price = formData.i.price;
    //       const url= formData.i.url;
    //       const time = formData.i.timestamp;
    //       const description= formData.i.description;
    //       const img = formData.i.img;
    //       const location = formData.i.location;
    //       const date = formData.i.date;
 
    //          return {id, title, price, url, time, description, img, location, date}
 
    //   })
    //   const db = getFirestore()
    //   db.collection('destinity').add(destinity)//set .doc
    //   .then(resp => console.log(resp))



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
      {/* <Button onClick = {handleOnSubmit}>Cargar la Salida</Button> */}

     
    </Form>
  );
}

export default DestinationForm;