import React, { useState } from "react";
import { Box, Modal, Stack, Tooltip, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import SingleImageModal from "./SingleImageModal";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";
// import { Masonry } from "@mui/lab";
import Masonry from "react-masonry-css";

const useStyles = makeStyles({
  imagesContainer: {
    padding: "1rem 0",
    width: "90%",
    margin: "auto",
  },
  image: {
    width: "100%",
    cursor: "pointer",
    position: "relative",
    transition: "all .2s ease-in-out",
    "&:hover": {
      opacity: 0.9,
    },
  },

  deleteIcon: {
    color: "#fff !important",
  },

  imageOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "#000",
  },
  masonry: {
    margin: "0 !important",
    cursor: "pointer",
  },
  descriptionContainer: {
    position: "relative",
  },
  descriptionBox: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    background: "rgba(0,0,0, .5)",
  },
  imageContainer: {
    cursor: "pointer",
  },
  imageTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "7rem",
    cursor: "pointer",
    color: "#fff",
  },
  customTooltip: {
    background: "rgba(0,0,0,.9) !important",
    fontSize: "1rem",
    padding: "1rem",
  },
});
const ImageDisplay = ({
  imageList,
  setImageList,
  searchWord,
  setSearchWord,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({});

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e, item) => {
    setImageDimensions({
      height: e.target.naturalHeight,
      width: e.target.naturalWidth,
    });
    setOpen(true);
    setItem(item);
  };

  const handleRemove = (ITEM, INDEX) => {
    const filteredData = Object.values(imageList)?.filter(
      (item, index) => item?.name !== ITEM?.name
    );
    setImageList(filteredData);
  };
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    900: 2,
    600: 1,
  };

  return (
    <>
      <Box className={classes.imagesContainer}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {Object.values(imageList)
            ?.filter((ele) =>
              searchWord
                ? ele?.name?.toLowerCase()?.includes(searchWord?.toLowerCase())
                : ele
            )
            ?.map((item, index) => (
              <Stack className={classes.descriptionContainer} key={index}>
                <img
                  src={URL.createObjectURL(item)}
                  alt={item.title}
                  loading="lazy"
                  onClick={(e) => handleClick(e, item)}
                  className={classes.imageContainer}
                />
                <Box className={classes.descriptionBox}>
                  <Box padding={`0.5rem 1rem`}>
                    <Tooltip
                      classes={{
                        tooltip: classes.customTooltip,
                      }}
                      title={item?.name}
                      enterDelay={200}
                      leaveDelay={200}
                    >
                      <Typography
                        className={classes.imageTitle}
                        variant="subtitle1"
                        onClick={(e) => handleClick(e, item)}
                      >
                        {item?.name}
                      </Typography>
                    </Tooltip>

                    <Typography color={"#fff"} variant="caption">
                      {formatBytes(item?.size)}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={() => handleRemove(item, index)}
                      className={classes.deleteIcon}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
              </Stack>
            ))}
        </Masonry>
        {/* <Masonry
          className={classes.masonry}
          // columns={3}
          columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          spacing={2}
        >
          {Object.values(imageList)?.map((item, index) => (
            <Stack className={classes.descriptionContainer} key={index}>
              <img
                src={URL.createObjectURL(item)}
                alt={item.title}
                loading="lazy"
                onClick={(e) => handleClick(e, item)}
              />
              <Box className={classes.descriptionBox}>
                <Box padding={`0.5rem 1rem`}>
                  <Typography
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "10rem",
                    }}
                    color={"#fff"}
                    variant="subtitle1"
                  >
                    {item?.name}
                  </Typography>
                  <Typography color={"#fff"} variant="caption">
                    {formatBytes(item?.size)}
                  </Typography>
                </Box>
                <Box>
                  <IconButton className={classes.deleteIcon}>
                    <Delete onClick={() => handleRemove(item, index)} />
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          ))}
        </Masonry> */}
        {/* <ImageList variant="masonry" cols={3} gap={20}>
          {Object.values(imageList)?.map((item, index) => (
            <ImageListItem className={classes.image} key={item.name}>
              <img
                src={URL.createObjectURL(item)}
                alt={item.title}
                loading="lazy"
                onClick={(e) => handleClick(e, item)}
              />
              <ImageListItemBar
                title={item?.name}
                subtitle={formatBytes(item?.size)}
                actionIcon={
                  <IconButton className={classes.deleteIcon}>
                    <Delete onClick={() => handleRemove(item, index)} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          timeout: 500,
        }}
      >
        <SingleImageModal
          imageDimensions={imageDimensions}
          item={item}
          handleClose={handleClose}
        />
      </Modal>
    </>
  );
};

export default ImageDisplay;
