import IconButton from "@mui/material/IconButton";

const IconBar = () => {
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <img src="https://freepngimg.com/thumb/kirby/1-2-kirby-png-image.png" className="barLogo"/>
      </IconButton>
    </>
  );
};
export default IconBar;
