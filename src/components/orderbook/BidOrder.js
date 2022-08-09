import React from 'react';
import * as math from 'mathjs';
import { TableRow, TableCell, Typography, styled } from '@mui/material';
import AbstractOrder from './AbstractOrder';

const TableCellStyled = styled(TableCell)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'linear-gradient(to left, #50b300 100%, white 0%)',
  backgroundSize: '0%'
}))

class BidOrder extends AbstractOrder {

  render() {
    return (
      <TableRow>
        <TableCellStyled className="fill-bid" sx={{backgroundSize: `${this.getPercentage()}% 100%`}}>{this.props.quantity}</TableCellStyled>
        <TableCell align="center"><Typography variant="body5" color='success.main'>{this.props.price}</Typography></TableCell>
        <TableCell align="right">{math.round(this.props.quantity*this.props.price, 3)}</TableCell>
      </TableRow>
    );
  }
}

export default BidOrder;
