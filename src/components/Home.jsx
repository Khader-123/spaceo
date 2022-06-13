import React, { useState } from "react";
import {
  Card,
  CardContent,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Select,
  Button,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const Home = () => {
  const [mainArr, setMainArr] = useState([]);
  const [value, setValue] = useState("Questions");
  const [gender, setGender] = useState("");
  const [proof, setProof] = useState([]);
  const [SelectCity, setSelectCity] = useState("");
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setSelectCity(event.target.value);
  };
  const handleIdProof = (e) => {
    setProof([...proof, e.target.value]);
  };
  const submitDetails = () => {
    if (!name || !gender || !proof || !SelectCity) {
      alert("Please fill all details");
      return;
    } else {
      alert("Submit Successful");
    }
    setMainArr([
      ...mainArr,
      {
        Name: name,
        Gender: gender,
        IdProof: proof,
        City: SelectCity,
      },
    ]);
    setGender("");
    setName("");
    setSelectCity("");
    setProof([]);
    console.log(name);
  };

  return (
    <div className="main">
      <Card>
        <CardContent>
          <h3>Registration Form</h3>
          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            style={{ color: "SlateBlue" }}
          >
            <Tab
              value="Questions"
              label="Questions"
              style={{ color: "SlateBlue" }}
            ></Tab>
            <Tab
              value="Responses"
              label="Responses"
              style={{ color: "SlateBlue" }}
            ></Tab>
            <Tab
              value="Settings"
              label="Settings"
              style={{ color: "SlateBlue" }}
            ></Tab>
          </Tabs>
        </CardContent>
        <CardContent
          style={{ borderTop: "14px solid SlateBlue", borderRadius: "10px" }}
        >
          <h1>Registration Form</h1>
          <hr />
          <TextField
            label="Name"
            variant="standard"
            style={{ width: "100%" }}
            onChange={(e) => setName(e.target.value)}
            required
          ></TextField>
          <br /> <br />
          <label htmlFor="">Male</label>
          <input
            type="radio"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            name="yes"
            required
          />
          <label htmlFor="">Female</label>
          <input
            type="radio"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            name="yes"
            required
          />{" "}
          <label htmlFor="">Others</label>
          <input
            type="radio"
            value="Others"
            onChange={(e) => setGender(e.target.value)}
            name="yes"
            required
          />{" "}
          <br /> <br />
          <FormGroup>
            <FormControlLabel
              onChange={handleIdProof}
              control={<Checkbox />}
              value="Pan Card"
              label="PanCard"
            />
            <FormControlLabel
              onChange={handleIdProof}
              control={<Checkbox />}
              value="Adhar Card"
              label="AdharCard"
            />
          </FormGroup>
          <Box sx={{ minWidth: 120 }}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Select City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={SelectCity}
                label="Select City"
                onChange={handleChange}
              >
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Hingolo">Hingoli</MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Aurangabad">Aurangabad</MenuItem>
                <MenuItem value="Nanded">Nanded</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br /> <br />
          <Button variant="contained" onClick={submitDetails}>
            Submit
          </Button>
        </CardContent>
      </Card>
      {/* <h1>{name}</h1> */}
      <Card>
        <CardContent>
          <Grid container border={1}>
            <Grid item xs={2}>
              <h3>Sr NO</h3>
            </Grid>
            <Grid item xs={2}>
              <h3> NAME</h3>
            </Grid>
            <Grid item xs={2}>
              {" "}
              <h3>GENDER </h3>
            </Grid>
            <Grid item xs={2}>
              <h3>ID PROOF</h3>
            </Grid>
            <Grid item xs={2}>
              <h3>CITY </h3>
            </Grid>
          </Grid>

          {mainArr.map((item, ind) => {
            return (
              <Grid container border={1}>
                <Grid item xs={2}>
                  <td>{ind + 1}</td>
                </Grid>
                <Grid item xs={2}>
                  <h3> {item.Name}</h3>
                </Grid>
                <Grid item xs={2}>
                  {" "}
                  <h3> {item.Gender}</h3>
                </Grid>
                <Grid item xs={2}>
                  <h3>
                    {item.IdProof[0]} {item.IdProof[1]}
                  </h3>
                </Grid>
                <Grid item xs={2}>
                  <h3> {item.City}</h3>
                </Grid>
              </Grid>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
