import React from 'react'
// material
import { Container, Box, Typography, Card, CardHeader, CardContent, Stack, styled, Tabs, Tab } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import BalanceContent from '../components/main/BalanceContent';
import BuySell from '../components/main/BuySell';
import PriceChart from '../components/main/PriceChart';
import Transaction from '../components/main/Transaction';
import TradeVolume from '../components/main/TradeVolume';
import Updates from '../components/main/Updates';
import OrderBookBox from '../components/main/OrderBookBox'
// ----------------------------------------------------------------------
const BoxStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    width: '20%',
    height: '100%',
  }
}));
const CardContentStyled = styled(CardContent)(({ theme }) => ({
  paddingTop: 0
}));
const CustomCard = (props)=>{
  const { title, children, sx } = props
  return <Card sx={{height: '100%', ...sx}}>
    <Stack sx={{height: '100%'}}>
      <CardHeader title={title}/>
      <CardContentStyled sx={{flexGrow: 1, overflow: 'auto'}}>
        {children}
      </CardContentStyled>
    </Stack>
  </Card>
}
export default function MainPage() {

  return (
    <Container maxWidth={false} sx={{height: '100%', px: '8px !important'}}>
      <Stack direction={{xs: 'column', lg: 'row'}} spacing={1} height='100%'>
        <BoxStyled>
          <Stack direction='column' spacing={1} sx={{height: '100%'}}>
            <CustomCard title="Balance" sx={{height: '50%'}}>
              <BalanceContent/>
            </CustomCard>
            <CustomCard title="Buy/Sell" sx={{height: '50%'}}>
              <BuySell/>
            </CustomCard>
          </Stack>
        </BoxStyled>
        <BoxStyled>
          <CustomCard title="Order Book">
            <OrderBookBox/>
          </CustomCard>
        </BoxStyled>
        <BoxStyled sx={{width: {lg: '40%'}}}>
          <Stack direction='column' spacing={1} sx={{height: '100%'}}>
            <CustomCard title="Price Chart" sx={{height: {xs: '500px', lg: '50%'}}}>
              <PriceChart/>
            </CustomCard>
            <CustomCard title="Your Transactions" sx={{height: '50%'}}>
              <Transaction/>
            </CustomCard>
          </Stack>
        </BoxStyled>
        <BoxStyled>
          <Stack direction='column' spacing={1} sx={{height: '100%'}}>
            <CustomCard title="Trades & Volume" sx={{height: '60%'}}>
              <TradeVolume/>
            </CustomCard>
            <CustomCard title="Updates" sx={{height: '40%'}}>
              <Updates/>
            </CustomCard>
          </Stack>
        </BoxStyled>
      </Stack>
    </Container>
  );
}
