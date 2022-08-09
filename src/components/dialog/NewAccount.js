import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Button, Box, Grid, Stack, Container, Link, FormControlLabel } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

export default function NewAccount(props) {
  const { isOpen, setOpen, address, pk } = props;
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="lg">
      <DialogTitle>
        <InfoIcon fontSize='large'/>
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
      <DialogContent>
        <Container sx={{
          mt: 2,
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
          <Typography variant='body1'>You just created an Ethereum account:</Typography>
          <Typography variant='body1' mb={4}>{address}</Typography>
          <Typography variant='body1'>Please BACKUP the private key for this account:</Typography>
          <Typography variant='body1'>{pk}</Typography>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
