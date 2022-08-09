import React from 'react';
// material
import { Box, Tabs, Stack, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

import { TabStyled, TabPanel } from './StyledComponent'
import LoadingSpinner from '../LoadingSpinner';
import Scrollbar from '../Scrollbar'
import { getTime } from '../../utils/common'
import { TradeVolumeData } from '../../utils/mock'
// ----------------------------------------------------------------------

export default function TradeVolume() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Stack sx={{height: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs">
          <TabStyled label="Trades"/>
          <TabStyled label="Volume" />
        </Tabs>
      </Box>
      <Box flexGrow={1} overflow='auto' mx={-1}>
        <Scrollbar sx={{height: '100%', px: 1}} autoHide={false}>
          <TabPanel value={tabIndex} index={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Time</TableCell>
                  <TableCell align="right">USDT</TableCell>
                  <TableCell align="right">USDT/BUSD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TradeVolumeData.trade.map((row, _i) => (
                  <TableRow key={_i}>
                    <TableCell align="left">{getTime(row.time)}</TableCell>
                    <TableCell align="right">{row.usdt}</TableCell>
                    <TableCell align="right"><Typography variant="body5" color={row.deficit?'error.main':'success.main'}>{row.rate}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Token</TableCell>
                  <TableCell align="left">Daily</TableCell>
                  <TableCell align="right">Last</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TradeVolumeData.volume.map((row, _i) => (
                  <TableRow key={_i}>
                    <TableCell align="left">{row.token}</TableCell>
                    <TableCell align="left">{row.daily}</TableCell>
                    <TableCell align="right">{row.last}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
        </Scrollbar>
      </Box>
    </Stack>
  )
};
