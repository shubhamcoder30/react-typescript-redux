import React from 'react';
import Formfield from "./components/FormField";
import TableData from "./components/TableData";
import Container from "@material-ui/core/Container"
import NavbarUI from "./styles/NavbarUI"
export default function App() {
 return (
    <div>
     <Container >
      <NavbarUI />
      <Formfield />
      <TableData />
      </Container> 
    </div>
  );
}