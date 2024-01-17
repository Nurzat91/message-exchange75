'use client';
import React from "react";
import {Grid, TextField} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Home() {
  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={{mb: 2}}>
      <Grid item xs={5}>
        <TextField label="Enter encode" variant="outlined" style={{ width: '80%', fontSize: '16px'}} />
      </Grid>
      <Grid item xs={2} alignItems="center">
        <Grid item xs={10}>
          <TextField
          label="Enter password"
          variant="outlined"
          fullWidth
        />
        </Grid>
        <Grid item xs={2}>
          <ArrowBackIcon/>
          <ArrowForwardIcon/>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <TextField label="Enter decode" variant="outlined" style={{ width: '80%', fontSize: '16px'}}/>
      </Grid>
    </Grid>
  );
}
