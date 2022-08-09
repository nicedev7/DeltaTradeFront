import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Button, Box, Grid, Stack, Container, Link, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function HelpDetail(props) {
  const { isOpen, setOpen, type } = props;
  
  const handleClose = () => {
    setOpen(false);
  };
  
  let children = <Box component='img' src="/help/metamask.gif"/>
  switch(type) {
    case 'connect':
      children = <Box component='img' src="/help/metamask.gif"/>
      break;
    default:
      break;
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        Help
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{display: 'grid'}}>
        <Container sx={{
          mt: 2,
          maxHeight: 500,
          overflowY: 'auto',
          scrollbarColor: '#d4aa70 #e4e4e4',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: 8
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#e4e4e4',
            borderRadius: 100
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 100,
            // backgroundImage: 'linear-gradient(180deg, #d0368a 0%, #708ad4 99%)',
            backgroundColor: '#0000003b',
            boxShadow: 'inset 2px 2px 5px 0 rgba(#fff, 0.5)'
          }
        }}>
          {children}
        </Container>
      </DialogContent>
    </Dialog>
  );
}
