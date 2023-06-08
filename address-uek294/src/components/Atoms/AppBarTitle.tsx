import Typography from "@mui/material/Typography";

export default function AppBarTitle() {
  return (
    <>
      <Typography component={"span"}
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <span className='barTitle'>Ghhouli's</span>
        <span className='barSubtitle'> Address Book</span>
      </Typography>
    </>
  );
}
