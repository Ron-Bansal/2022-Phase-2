import axios from "axios";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import "./App.css";
import parse from "html-react-parser";


function App() {
  // Declare a new state variable, which we'll call "pokemonName"
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState<undefined | any>(undefined);

  const POKEMON_BASE_API_URL = "https://pokeapi.co/api/v2";

  const [showName, setShowName] = useState("");
  const [showSummary, setShowSummary] = useState("");
  const [showInfo, setShowInfo] = useState<undefined | any>(undefined);
  const summaryText = parse(showInfo.summary);

  // const TV_SHOW_BASE_URL = "https://api.tvmaze.com/search/shows?q=";
  const TV_SHOW_SINGLE_BASE_URL =
    "https://api.tvmaze.com/singlesearch/shows?q=";

  return (
    <div className="App">
      <h1>TV Show Search</h1>

      <Grid className="main" container spacing={6}>
        <Grid
          className="search"
          item
          xs={6}
          md={4}
          sx={{ borderRight: "1px solid #0c0c0c" }}
        >
          <div className="search-field">
            <label>Show Name:</label>
            <br />
            <TextField
              type="text"
              id="show-name"
              name="show-name"
              placeholder="Enter show name"
              onChange={(prop) => {
                setShowName(prop.target.value);
              }}
            />
            {/* <Button variant="outlined" onClick={search}>
              Search
            </Button> */}
            <Button
              variant="contained"
              type="submit"
              sx={{ m: "1rem", mt: "0.1rem" }}
              onClick={() => {
                singleSearch();
              }}
            >
              Search
            </Button>
          </div>

          {/* <p>You have entered {showName}</p> */}
        </Grid>

        <Grid className="result" item xs={6} md={8} sx={{ pr: "1rem" }}>
          {/* {showInfo === undefined || showInfo === null ? (
            <p>Show not found</p>
          ) : (
            <div id="show-result">
              <h3> {showInfo.name} </h3>
              <img src={showInfo.image.medium} />
              <p>
                <span className="attribute">Genres:</span> {showInfo.genres}
                <br />
                <span className="attribute">Language(s):</span>{" "}
                {showInfo.language}
                <br />
                <span className="attribute">Rating:</span>{" "}
                {showInfo.rating.average}
                <br />
                <span className="attribute">Summary:</span> {showInfo.summary}
                <br />
              </p>
            </div>
          )} */}
          {showInfo === undefined ? (
            <div></div>
          ) : (
            <div id="show-result">
              <h3> {showInfo.name} </h3>
              <img src={showInfo.image.medium} />
              <p>
                <span className="attribute">Genres:</span> {showInfo.genres}
                <br />
                <span className="attribute">Language(s):</span>{" "}
                {showInfo.language}
                <br />
                <span className="attribute">Rating:</span>{" "}
                {showInfo.rating.average}
                <br />
                <span className="attribute">Summary:</span> {summaryText}
                <br />
              </p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );

  // function search() {
  //   axios.get(TV_SHOW_BASE_URL + showName).then((res) => {
  //     console.log(res.data);
  //     setShowInfo(res.data);
  //   });
  // }

  function singleSearch() {
    console.log(showInfo);

    axios.get(TV_SHOW_SINGLE_BASE_URL + showName).then((res) => {
      console.log(res.data);
      setShowInfo(res.data);
    });
    // setShowSummary(showInfo.summary);
  }
}

export default App;