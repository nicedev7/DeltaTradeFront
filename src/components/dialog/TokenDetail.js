import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Button, Box, Grid, Stack, Container, Link, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TokenDetail(props) {
  const { isOpen, setOpen, detail } = props;
  const { name, addr } = detail
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        {name}
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
          <Stack spacing={2}>
            <Typography variant="body1">
              The following address is for the token contract. It is NOT a deposit address. Do NOT send tokens to it or they will be lost forever. To deposit, use the Deposit form in the upper left. Enter the amount you want to deposit and press the 'Deposit' button.
            </Typography>
            <Typography variant="body1">
              Smart_Contract:<br/>
              <Link href={`https://etherscan.io/token/${addr}`}>{addr}</Link>
            </Typography>
            <Typography variant="body1">
              ONLY 10,000,000 TOKEN WILL BE ISSUED, 99% OF THEM WILL BE AIRDROPPED
            </Typography>
            <Link href='https://www.10mtoken.com/'>https://www.10mtoken.com</Link>
          </Stack>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
