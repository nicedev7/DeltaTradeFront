import React from 'react';
import * as math from 'mathjs'
// material
import { Box, Tabs, Typography, TextField, InputAdornment, Stack, Button, FormControl, FormHelperText, OutlinedInput } from '@mui/material';

import { TabStyled, TabPanel } from './StyledComponent'
import Scrollbar from '../Scrollbar'
import TradeVolume from './TradeVolume';
// ----------------------------------------------------------------------

export default function BuySell() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const usdtRef = React.useRef(null)
  const busdRef = React.useRef(null)
  const totalRef = React.useRef(null)
  const handleChangeAmount = (e) => {
    totalRef.current.value = math.round(usdtRef.current.value * busdRef.current.value, 3).toFixed(3)
  }
  const handleChange = (event, newValue) => {
    usdtRef.current.value = ''
    busdRef.current.value = ''
    totalRef.current.value = ''
    setTabIndex(newValue);
  };

  return (
    <Stack sx={{height: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs">
          <TabStyled label="BuyOrder"/>
          <TabStyled label="SellOrder" />
        </Tabs>
      </Box>
      <Box flexGrow={1} overflow='auto' mx={-1}>
        <Scrollbar sx={{height: '100%', px: 1}} autoHide={false}>
          <TabPanel>
            <Stack sx={{py: 1}} spacing={1.5}>
              <FormControl>
                <FormHelperText sx={{mt: 0}}>{`Amount to ${tabIndex===0?'buy':'sell'}`}</FormHelperText>
                <OutlinedInput 
                  inputRef={usdtRef} 
                  size='small' 
                  endAdornment= {<InputAdornment position="end">USDT</InputAdornment>}
                  type='number'
                  onChange={handleChangeAmount}
                />
              </FormControl>
              <FormControl sx={{pb: .5}}>
                <FormHelperText sx={{mt: 0}}>Price</FormHelperText>
                <OutlinedInput 
                  inputRef={busdRef} 
                  size='small' 
                  endAdornment={<InputAdornment position="end">BUSD</InputAdornment>}
                  // type='number'
                  onChange={handleChangeAmount}
                />
              </FormControl>
              <FormControl sx={{pb: .5}}>
                <FormHelperText sx={{mt: 0}}>Total</FormHelperText>
                <OutlinedInput 
                  inputRef={totalRef} 
                  size='small'
                  readOnly={Boolean(true)}
                  type='number'
                />
              </FormControl>
              <FormControl sx={{pb: .5}}>
                <FormHelperText sx={{mt: 0}}>Expires</FormHelperText>
                <OutlinedInput 
                  size='small' 
                  endAdornment={<InputAdornment position="end">Blocks</InputAdornment>}
                  type='number'
                  onChange={handleChangeAmount}
                />
              </FormControl>
              <Button variant='contained' color={tabIndex===0?'primary':'error'}>{tabIndex===0?'Buy':'Sell'} Order</Button>
            </Stack>
          </TabPanel>
        </Scrollbar>
      </Box>
    </Stack>
  )
};
