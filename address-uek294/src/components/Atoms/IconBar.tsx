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
        <img src="https://icon-library.com/images/software-crystal-msn.ico.ico" className="barLogo"/>
      </IconButton>
    </>
  );
};
export default IconBar;
