import { useState, useEffect, useMemo } from 'react';
import { Icon } from '@iconify/react';
import closeFill from '@iconify/icons-eva/close-fill';
// material
import { Box, Backdrop, Paper, Tooltip, Divider, Typography, Stack, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//
import Scrollbar from '../Scrollbar';
import { MIconButton } from '../@material-extend';
// ----------------------------------------------------------------------

export default function ChatPopup(props) {
  const { isOpen, setOpen } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };
  
  const theme = createTheme({palette: { mode: 'light' }});
  return (
    <ThemeProvider theme={theme}>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ml: '0 !important' }} open={isOpen} onClick={handleClose} />
      <Box
        sx={{
          height: 'calc(100vh - 24px)',
          top: 12,
          bottom: 12,
          right: 0,
          position: 'fixed',
          zIndex: 2001,
          left: '100%',
          ...(isOpen && { right: 12, left: {xs: 12, lg: '60%'} }),
          transition: (theme) => theme.transitions.create('left'),
        }}
      >
        <Paper
          sx={{
            height: 1,
            width: '100%',
            overflow: 'hidden',
            boxShadow: (theme) => theme.customShadows.z24,
            // transition: (theme) => theme.transitions.create('width'),
            // ...(isOpen && { width: '40%' })
          }}
        >
          <Stack sx={{height: '100%'}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1, pr: 1, pl: 2.5 }}>
              <Typography variant="subtitle1">Chat</Typography>
              <Box>
                <MIconButton component={Link} href='https://gitter.im/etherdelta/etherdelta.github.io' target='_blank'>
                  <Icon icon="gridicons:external" width={20} height={20}/>
                </MIconButton>
                <MIconButton onClick={handleClose}>
                  <Icon icon={closeFill} width={20} height={20} />
                </MIconButton>
              </Box>
            </Stack>
            <Divider />
            <Box flexGrow={1}>
              {/* <Scrollbar sx={{ height: 1 }}> */}
                <iframe frameBorder="0" src="https://gitter.im/etherdelta/etherdelta.github.io/~embed" title="chatFrame" style={{width: '100%', height: '100%'}}/>
              {/* </Scrollbar> */}
            </Box>
          </Stack>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
