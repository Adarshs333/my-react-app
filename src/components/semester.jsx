
import React, { Component } from "react";
import {
  Paper,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Box,
} from "@material-ui/core";

class Semester extends Component {
  render() {
    const { students } = this.state;

    return (
      <Container style={{ marginTop: "100px" }}>
        <Box>
          <Grid item md={9}>
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>USN</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>SEM</TableCell>
                    <TableCell>CGPA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student) => (
                    <TableRow>
                      <TableCell>{student.usn}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.sem}</TableCell>
                      <TableCell>{student.cgpa}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default Semester;

