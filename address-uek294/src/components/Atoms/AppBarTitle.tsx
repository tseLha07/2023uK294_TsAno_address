import Typography from "@mui/material/Typography";

export default function AppBarTitle() {
  return (
    <>
      <Typography
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <div className='barTitle'>Ghhouli's</div>
        <Typography>
        <div className='barSubtitle'>Address Book</div>
        </Typography>
      </Typography>
    </>
  );
}
