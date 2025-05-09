'use client'
import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'

export default function GridDisplay() {
  return (
    <Box>
      <Box
        p={3}
        sx={{ 
          width: '100%', 
          height: '100vh'
        }}
      >
        <Grid container spacing={1} sx={{ height: '60%' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            {/* <Grid container sx={{ height: '100%'}}>
              <Stack spacing={1} sx={{ height: '100%', width: '100%' }}>
                <Box className="containers" sx={{ height: '50%' }}>asd</Box>

                <Grid container spacing={1} sx={{ height: '100%'}}>
                  <Grid className="containers" size={{ xs:6, md:6 }}>
                    <Box>Row 2 col 1</Box>
                  </Grid>

                  <Grid className="containers" size={{ xs:6, md:6 }}>
                    <Box>Row 2 col 2</Box>
                  </Grid>
                </Grid>
              </Stack>
            </Grid> */}

            <Stack spacing={1} sx={{ height: '100%'}}>
              <Box className="containers" sx={{ height: '50%'}}>1</Box>
              
              <Grid container spacing={1} sx={{ height: '50%'}}>
                <Grid className="containers" size={{ xs: 6, md: 6 }}>1</Grid>
                <Grid className="containers" size={{ xs: 6, md: 6 }}>2</Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} className="containers">
            PROFILE PIC
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={1} sx={{ height: '100%' }}>
              <Grid size={{ xs:12, md:6 }}>
                <Stack sx={{ height: '100%'}} spacing={1}>
                  <Box sx={{ height: '50%'}} className="containers">1</Box>
                  <Box sx={{ height: '50%'}} className="containers">3</Box>
                </Stack>
              </Grid>

              <Grid  
                size={{ xs:12, md:6 }} 
                className="containers"
              >
                <Box>Col 2</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1} pt={1} sx={{ height: '40%' }}>
          <Grid size={{ xs: 12, md: 4 }} className="containers">
            asd
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} className="containers">
            asd
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} className="containers">
            asd
          </Grid>
        </Grid>

      </Box>
    </Box>
  )
}