import React from 'react';
import { MDBDataTable } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const DatatablePage = () => {
  
  
  const data = 
    
    fetch('http://localhost:8000/sample.json',{
      method: "POST",
      headers: {
          "Content-Type": "text/plain"
      }})
    .then(response => response.json())
    .then(data => this.setState({ data }));



return (
  <MDBDataTable striped bordered small order={['age', 'asc' ]} data={data} />
  );
}

export default DatatablePage;