import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadButton: {
    background: "#7985ca !important",
    padding: "1rem 2rem !important",
    textTransform: "capitalize !important",
    borderRadius: "3px !important",
    "&:hover": {
      background: "#7982ca !important",
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "2rem auto",
  },
});
const Upload = ({ imageList, setImageList, searchWord, setSearchWord }) => {
  let ImageRef;
  const MAX_LENGTH = 10;
  const classes = useStyles();
  const handleImageChange = (e) => {
    // imageList?.length && Array.from(e.target.files).length > MAX_LENGTH
    //   ? alert(`Cannot upload more than ${MAX_LENGTH} images`)
    //   :
    setImageList([...imageList, ...e.target.files]);
  };
  const handleTextChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <Box className={classes.headerContainer}>
      <Box>
        <TextField
          type="text"
          variant="outlined"
          value={searchWord}
          onChange={handleTextChange}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box className={classes.buttonContainer}>
        <Button
          className={classes.uploadButton}
          variant="contained"
          color="primary"
          onClick={() => ImageRef.click()}
        >
          Upload
        </Button>
        <input
          multiple
          hidden
          ref={(newRef) => (ImageRef = newRef)}
          onChange={handleImageChange}
          type="file"
          name="file"
        />
      </Box>
    </Box>
  );
};

export default Upload;
