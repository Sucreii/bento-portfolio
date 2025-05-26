'use client'
import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'
import Image from 'next/image'

export default function GridDisplay() {

  const socialMap = [
    { id: 1, name: 'LinkedIn', images: 'linkedInLogo.svg', description: 'Reyes Paul', link: 'in/ReyesPaulDavid/' }, 
    { id: 2, name: 'Email', images: 'gmailLogo.png', description: 'Paul David', link: 'ReyesPaulDavid@gmail.com' }, 
    { id: 3, name: 'GitHub', images: 'gitLogo.png', description: 'XYON3', link: 'https://github.com/xyon3' }, 
    // { id: 1, name: 'LinkedIn', images: '', description: '', link: '' }, 
  ]

  const stackLogo = [
    { id: 1, name: 'Docker', images: 'dockerLogo.png'}, 
    { id: 2, name: 'Linux', images: 'linuxLogo.png' }, 
    { id: 3, name: 'NestJS', images: 'nestJSLogo.png' }, 
    { id: 4, name: 'TS', images: 'tsLogo.png' }, 
    { id: 5, name: 'Laravel', images: 'laravelLogo.png' }, 
    { id: 6, name: 'Git', images: 'gitLogo.png' }, 
  ]

  return (
    <Box>
      <Box
        p={{ xs: 2, md: 10 }}
        sx={{ 
          width: '100%', 
          height: '100vh', 
        }}
      >
        <Stack>
          <Grid container spacing={1} sx={{ height: '60%' }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={1} sx={{ height: '100%'}}>
                <Box className="containers" p={{ xs: 3, md: 5 }}>
                  <p className='title'>
                    Hi, I'm Paul
                  </p>
                  <p style={{ paddingTop: '10px', fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Box>
                
                <Grid container spacing={1}>
                  <Grid className="containers" size={{ xs: 6, md: 6 }} p={{ xs: 3, md: 6 }}>
                    <p className='title' style={{ paddingBottom: '5px' }}>
                      SOCIALS
                    </p>

                    <Grid container>
                      <Grid>
                        {
                          socialMap.map((item, index) => (
                            <Grid container key={index}>
                              <Grid size={{ xs: 4, md: 3 }}>
                                <img
                                  src={`/assets/socialLogo/${item.images}`}
                                  alt='My Profile Picture'
                                  width='40px'
                                  height='auto'
                                />
                              </Grid>

                              <Grid size={{ xs: 8, md: 9 }}>
                                <Stack sx={{ fontSize: '12px' }}>
                                  <p>{item.name}</p>
                                  <p>{item.description}</p>
                                  <p style={{ paddingBottom: '10px'}}>{item.link}</p>
                                </Stack>
                              </Grid>
                            </Grid>
                          ))
                        }
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid className="containers" size={{ xs: 6, md: 6 }} p={{ xs: 3, md: 6 }}>
                    <p className='title'>
                      EDUCATION
                    </p>
                    <p style={{ paddingTop: '10px', fontSize: '14px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} className="containers" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={'/assets/sleeping.gif'}
                alt='My Profile Picture'
                width='auto'
                height='100%'
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Grid container spacing={1} sx={{ height: '100%' }}>
                <Grid size={{ xs:12, md:6 }}>
                  <Stack sx={{ height: '100%'}} spacing={1}>
                    <Box className="containers" p={{ xs: 3, md: 6 }}>
                      <Grid container spacing={1} justifyContent='flex-start'>
                      {
                        stackLogo.map((item, index) => (
                          <Grid key={index}>
                            <img
                              src={`/assets/stackLogo/${item.images}`}
                              alt={item.name}
                              width='100px'
                              height='auto'
                            />
                          </Grid>
                        ))
                      }
                      </Grid>
                    </Box>

                    <Box className="containers" p={{ xs: 3, md: 6 }}>3</Box>
                  </Stack>
                </Grid>

                <Grid  
                  size={{ xs:12, md:6 }} 
                  className="containers"
                  p={{ xs: 3, md: 6 }}
                >
                  <Box className='title'>PROJECTS</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1} pt={1} sx={{ height: '40%' }}>
            <Grid size={{ xs: 12, md: 4 }} className="containers" >
              asd
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} className="containers">
              asd
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} className="containers">
              asd
            </Grid>
          </Grid>

        </Stack>
      </Box>
    </Box>
  )
}