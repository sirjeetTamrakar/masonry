import Upload from "./components/Upload";
import ImageDisplay from "./components/ImageDisplay";
import { useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [imageList, setImageList] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
      <Grid container>
        <Grid item xs={1} sm={1} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={11} sm={11} md={10}>
          <Upload
            imageList={imageList}
            setImageList={setImageList}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
          <ImageDisplay
            imageList={imageList}
            setImageList={setImageList}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
