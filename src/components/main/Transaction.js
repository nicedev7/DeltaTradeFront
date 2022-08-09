import React from 'react';
// material
import { Box, Tabs, Stack, Table, TableHead, TableRow, TableBody, TableCell, Button } from '@mui/material';

import { TabStyled, TabPanel } from './StyledComponent'
import { TxData } from '../../utils/mock'
import Scrollbar from '../Scrollbar'

// ----------------------------------------------------------------------

export default function Transaction() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const txTypes = ['Buy Order', 'Sell Order']
  return (
    <Stack sx={{height: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs">
          <TabStyled label="Trades"/>
          <TabStyled label="Orders" />
          <TabStyled label="Funds" />
        </Tabs>
      </Box>
      <Box flexGrow={1} overflow='auto' mx={-1}>
        <Scrollbar sx={{height: '100%', px: 1}} autoHide={false}>
          <TabPanel value={tabIndex} index={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Transaction</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="right">USDT</TableCell>
                  <TableCell align="right">BUSD</TableCell>
                  <TableCell align="right">USDT/BUSD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TxData.trade.map((row, _i) => (
                  <TableRow
                    key={_i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.txId}</TableCell>
                    <TableCell align="left">{txTypes[row.type]}</TableCell>
                    <TableCell align="right">{row.usdt}</TableCell>
                    <TableCell align="right">{row.busd}</TableCell>
                    <TableCell align="right">{row.rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">USDT/BUSD</TableCell>
                  <TableCell align="left">Available volume</TableCell>
                  <TableCell align="right">Expires in</TableCell>
                  <TableCell align="right">Cancel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TxData.order.map((row, _i) => (
                  <TableRow
                    key={_i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.amount}</TableCell>
                    <TableCell align="left">{row.volume}</TableCell>
                    <TableCell align="right">{row.blocks} blocks</TableCell>
                    <TableCell align="right"><Button variant="contained" size="small">Cancel</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">USDT/BUSD</TableCell>
                  <TableCell align="left">Available volume</TableCell>
                  <TableCell align="right">Expires in</TableCell>
                  <TableCell align="right">Cancel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TxData.order.map((row, _i) => (
                  <TableRow
                    key={_i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.amount}</TableCell>
                    <TableCell align="left">{row.volume}</TableCell>
                    <TableCell align="right">{row.blocks} blocks</TableCell>
                    <TableCell align="right"><Button variant="contained" size="small">Cancel</Button></TableCell>
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
