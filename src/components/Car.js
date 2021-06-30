import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { useParams } from "react-router-dom"


// Container, Paper, Chip //

const Car = (props) => {  
const carInfo = props.match.params.id
const {id, Name} = useParams();
const params = useParams();

let myCar = cars.find((car) => {
    return car
})

    return (
      <Container maxWidth="sm">
        <Paper elevation={3} />
        <h1>{`${myCar.Name}`} </h1>
        <Chip label={`id: ${id}`}/>
        <Chip label={`Name: ${myCar.Name}`}/>
        <Chip label={`Miles Per Gallon: ${myCar.Miles_per_Gallon}`}/>
        <Chip label={`Cylinders: ${myCar.Cylinders}`}/>
        <Chip label={`Displacement: ${myCar.Displacement}`}/>
        <Chip label={`Weight: ${myCar.Weight_in_lbs}`}/>
        <Chip label={`Horsepower: ${myCar.Horsepower}`}/>
        <Chip label={`Accleration: ${myCar.Acceleration}`}/>
        <Chip label={`Year: ${myCar.Year}`}/>
        <Chip label={`Origin: ${myCar.Origin}`}/>
      </Container>
    );
}

export default Car ;