import React from 'react';
// material
import { Box, Tabs, Typography, Stack, Table, TableHead, TableBody, TableRow, TableCell, FormControl, FormHelperText, OutlinedInput, Button } from '@mui/material';

import { TabStyled, TabPanel } from './StyledComponent'
import Scrollbar from '../Scrollbar'
// ----------------------------------------------------------------------

export default function BalanceContent() {
  const [tabIndex, setTabIndex] = React.useState(2);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Stack sx={{height: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs">
          <TabStyled label="Deposit"/>
          <TabStyled label="Withdraw" />
          <TabStyled label="Transfer" />
        </Tabs>
      </Box>
      <Box flexGrow={1} overflow='auto' mx={-1}>
        <Scrollbar sx={{height: '100%', px: 1}} autoHide={false}>
          {
            Array(3).fill(0).map((_, index)=>{
              const actionTypes = ['Deposit', 'Withdraw', 'Transfer']
              return (
                <TabPanel value={tabIndex} index={index} key={index}>
                  {/* <Typography variant='body2' color='error.main'>Please select an account using the account dropdown in the upper right.</Typography> */}

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Token</TableCell>
                        <TableCell align="right">Wallet</TableCell>
                        <TableCell align="right">Exchange</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>USDT</TableCell>
                        <TableCell align="right">1000.000</TableCell>
                        <TableCell align="right">1000.000</TableCell>
                      </TableRow>
                      <TableRow sx={{borderBottom: 1, borderColor: 'divider', pb: .5}}>
                        <TableCell colSpan={3}>
                          {
                            index<2?
                            <FormControl sx={{pb: .5}}>
                              <FormHelperText sx={{mt: 0}}>{actionTypes[index]} USDT</FormHelperText>
                              <Stack direction="row" spacing={1}>
                                <OutlinedInput placeholder="Address" size='small'/>
                                <Button variant="contained">{actionTypes[index]}</Button>
                              </Stack>
                            </FormControl>:

                            <Box textAlign='right'>
                              <Stack direction='row'>
                                <FormControl sx={{pb: .5}}>
                                  <FormHelperText sx={{mt: 0}}>Amount</FormHelperText>
                                  <OutlinedInput placeholder="Address" size='small'/>
                                </FormControl>
                                <Typography variant="caption" sx={{ p: '12px 4px 0', display: 'flex', alignItems: 'center' }}>to</Typography>
                                <FormControl sx={{pb: .5}}>
                                  <FormHelperText sx={{mt: 0}}>Address</FormHelperText>
                                  <OutlinedInput placeholder="Address" size='small'/>
                                </FormControl>
                              </Stack>
                              <Box my={1.5}>
                                <Button variant="contained">{actionTypes[index]}</Button>
                              </Box>
                            </Box>
                          }
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>BUSD</TableCell>
                        <TableCell align="right">1000.000</TableCell>
                        <TableCell align="right">1000.000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={3}>
                          {
                            index<2?
                            <FormControl>
                              <FormHelperText sx={{mt: 0}}>{actionTypes[index]} BUSD</FormHelperText>
                              <Stack direction="row" spacing={1}>
                                <OutlinedInput placeholder="Address" size='small'/>
                                <Button variant="contained">{actionTypes[index]}</Button>
                              </Stack>
                            </FormControl>:

                            <Box textAlign='right'>
                              <Stack direction='row'>
                                <FormControl sx={{pb: .5}}>
                                  <FormHelperText sx={{mt: 0}}>Amount</FormHelperText>
                                  <OutlinedInput placeholder="Address" size='small'/>
                                </FormControl>
                                <Typography variant="caption" sx={{ p: '12px 4px 0', display: 'flex', alignItems: 'center' }}>to</Typography>
                                <FormControl sx={{pb: .5}}>
                                  <FormHelperText sx={{mt: 0}}>Address</FormHelperText>
                                  <OutlinedInput placeholder="Address" size='small'/>
                                </FormControl>
                              </Stack>
                              <Box my={1.5}>
                                <Button variant="contained">{actionTypes[index]}</Button>
                              </Box>
                            </Box>
                          }
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabPanel>
              )
            })
          }
        </Scrollbar>
      </Box>
    </Stack>
  )
};
