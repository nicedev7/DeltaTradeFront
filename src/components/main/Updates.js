import React from 'react';
// material
import { Box, Tabs, Typography, Stack, Link } from '@mui/material';

import { TabStyled, TabPanel } from './StyledComponent'
import Scrollbar from '../Scrollbar'
// ----------------------------------------------------------------------

export default function Updates() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Stack sx={{height: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs">
          <TabStyled label="Important"/>
          <TabStyled label="Twitter" />
        </Tabs>
      </Box>
      <Box flexGrow={1} overflow='auto' mx={-1}>
        <Scrollbar sx={{height: '100%', px: 1}} autoHide={false}>
          <TabPanel value={tabIndex} index={0}>
            <Stack spacing={1}>
              <Typography variant='body2' color='error.main'>
                Notices
              </Typography>
              <Typography variant='body2'>
                The only official URL for EtherDelta is https://etherdelta.com. Bookmark it once and use the bookmark.
              </Typography>
              <Typography variant='body2'>
                Do not send your tokens directly to the smart contract, or they will be lost and unrecoverable. Use the Deposit form (upper left) to send the proper deposit transaction.
              </Typography>
              <Typography variant='body2'>
                The only official representatives in the chat room are ETHERDELTAZACK_TWITTER, ETHERDELTAREP1_TWITTER, ETHERDELTAREP2_TWITTER, ETHERDELTAREP3_TWITTER, ETHERDELTAREP4_TWITTER, and ETHERDELTAUX_TWITTER.
              </Typography>
              <Typography variant='body2' color='error.main'>
                Disclaimer
              </Typography>
              <Typography variant='body2'>
                EtherDelta is a decentralized trading platform that lets you trade Ether and Ethereum-based tokens directly with other users. You are responsible for your own account, funds, and private keys. You are responsible for your own trading decisions, and the details and mechanics of the tokens you trade. EtherDelta is not responsible for your decisions, actions, or losses that result from using EtherDelta. EtherDelta makes no guarantee about the tokens that you trade using EtherDelta. EtherDelta does not hold your funds and does not offer refunds. While the information contained on EtherDelta is periodically updated, no guarantee is given that the information provided on EtherDelta is correct, complete, or up-to-date. By using EtherDelta, you acknowledge this and agree to these terms.
              </Typography>
            </Stack>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Link href="https://twitter.com/etherdelta" target='_blank'>Tweets by etherdelta</Link>
          </TabPanel>
        </Scrollbar>
      </Box>
    </Stack>
  )
};
