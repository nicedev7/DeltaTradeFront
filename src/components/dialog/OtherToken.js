import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, Box, Stack, Container, Link, FormControl, FormHelperText, OutlinedInput, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function OtherToken(props) {
  const { isOpen, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        Other token
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
          px: '0 !important',
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
            <FormControl>
              <FormHelperText>Address</FormHelperText>
              <OutlinedInput placeholder="0x..." size='small'/>
            </FormControl>
            <FormControl>
              <FormHelperText>Name</FormHelperText>
              <OutlinedInput placeholder="XYZ" size='small'/>
            </FormControl>
            <FormControl>
              <FormHelperText>Decimals</FormHelperText>
              <OutlinedInput placeholder="18" size='small'/>
            </FormControl>
          </Stack>
          <Divider sx={{my: 2}}/>
          <Stack direction='row' sx={{float: 'right'}} spacing={1}>
            <Button variant='outlined' onClick={handleClose}>Cancel</Button>
            <Button variant='contained' onClick={handleClose}>Go</Button>
          </Stack>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
