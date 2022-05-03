import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';

function Card({children}) {
  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Paper>
    </Grid>
  )
}

export default Card