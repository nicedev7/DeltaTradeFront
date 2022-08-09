import React from 'react';
// material
import { keyframes } from "@mui/styled-engine";
import { Box, Stack, Typography, styled } from '@mui/material';

import LoadingSpinner from '../LoadingSpinner'
import Scrollbar from '../Scrollbar'
import OrderBook from '../orderbook/OrderBook';
import { OrderData } from '../../utils/mock'
// ----------------------------------------------------------------------
export default function OrderBookBox() {

  return (
    <Scrollbar sx={{height: '100%', pr: 1}} autoHide={false}>
      <OrderBook {...OrderData} />
    </Scrollbar>
  )
};
