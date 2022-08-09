import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Link, Typography, Divider, Drawer } from '@mui/material';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import { MHidden } from '../../components/@material-extend';
import AccountPopover from '../../components/header/AccountPopover';
import LanguagePopover from '../../components/header/LanguagePopover';
import ContractPopover from '../../components/header/ContractPopover';
import TokensPopover from '../../components/header/TokensPopover';
import HelpPopover from '../../components/header/HelpPopver';
import ChartBox from '../../components/header/ChatBox';
import PPTPopover from '../../components/header/PPTPopover';
import ModeSwitch from '../../components/mode-switch';
import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 200;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  borderBottom: '1px solid',
  borderColor: theme.palette.text.secondary
  // [theme.breakpoints.up('lg')]: {
  //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  // }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    // minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

const LogoLink = styled(Link)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center', 
  background: 'url(/static/logo.svg)', 
  backgroundRepeat: 'no-repeat', 
  backgroundSize: '28px 24px', 
  backgroundPosition: 0, 
  paddingLeft: '34px', 
  paddingRight: '.35rem', 
  fontSize: '1.25rem'
}));
// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
};

export default function DashboardNavbar() {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const { isCollapse } = useCollapseDrawer();
  const onOpenSidebar = (e) => {
    setOpenSidebar(true)
  }

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          // width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        })
      }}
    >
      <ToolbarStyle>
        <Stack direction='row'>
          <LogoLink to='/' component={RouterLink} color='text.primary' underline='none'>
            Ether&nbsp;<Typography color='info.main' sx={{display: 'inline', fontSize: 'inherit'}}>Delta</Typography>
          </LogoLink>
          <Divider orientation="vertical" flexItem sx={{mx: 1}} />
          <ModeSwitch/>
          <Divider orientation="vertical" flexItem sx={{mx: 1}} />
          <PPTPopover/>
        </Stack>
        
        <Box sx={{ flexGrow: 1 }} />

        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>
        <MHidden width="lgDown">
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <ChartBox/>
            <HelpPopover/>
            <TokensPopover />
            <ContractPopover />
            <LanguagePopover />
            <AccountPopover />
          </Stack>
        </MHidden>
      </ToolbarStyle>
      <MHidden width="lgUp">
        <Drawer
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          <Scrollbar
            sx={{
              height: '100%',
              '& .simplebar-content': {
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <Stack spacing={{ xs: 0.5, sm: 1.5 }} px={2} pt={2} sx={{'& button': {width: '100%', justifyContent: 'left'}}}>
              <ChartBox/>
              <HelpPopover pos='right' />
              <TokensPopover pos='right' />
              <ContractPopover pos='right' />
              <LanguagePopover pos='right' />
              <AccountPopover pos='right' />
            </Stack> 
            {/* <NavSection navConfig={sidebarConfig} isShow={!isCollapse} /> */}
          </Scrollbar>
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
