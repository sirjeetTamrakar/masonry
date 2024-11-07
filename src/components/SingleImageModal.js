import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const SingleImageModal = ({ imageDimensions, item, handleClose }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.modalContainer}>
        <Box
          className={
            imageDimensions?.height > imageDimensions?.width
              ? classes.portraitContainer
              : classes.landscapeContainer
          }
        >
          <img
            className={classes.image}
            src={item && URL.createObjectURL(item)}
            alt={item?.name}
            loading="lazy"
          />
          <Box className={classes.closeIconPosition} onClick={handleClose}>
            <Box className={classes.closeIconContainer}>
              <CloseIcon className={classes.closeIcon} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleImageModal;

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
  },
  landscapeContainer: {
    height: "auto",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "300px",
    },
  },
  portraitContainer: {
    maxHeight: "700px",
    height: "700px",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: "500px",
      width: "300px",
    },
  },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  closeIconPosition: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: "1000",
    cursor: "pointer",
  },
  closeIconContainer: {
    background: "#fff",
    borderRadius: "50%",
    fontSize: ".5rem",
    height: "2rem",
    width: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    fontSize: "1.5rem",
  },
}));
