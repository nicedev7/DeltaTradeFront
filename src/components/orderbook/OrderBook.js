import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import AskOrder from './AskOrder';
import BidOrder from './BidOrder';


class OrderBook extends Component {

  render() {
    function sumQuantities(orders) {
      return orders.reduce((total, order) => total + order.quantity, 0);
    }

    const totalAsks = sumQuantities(this.props.askOrders);
    const totalBids = sumQuantities(this.props.bidOrders);
    const maxCumulative = Math.max(totalAsks, totalBids);

    const deepCopyArrayOfObj = (arr => arr.map(order => ({...order})));

    // Deep copy and sort orders
    const askOrders = deepCopyArrayOfObj(this.props.askOrders).sort((a, b) => a.price > b.price); // ascending order
    const bidOrders = deepCopyArrayOfObj(this.props.bidOrders).sort((a, b) => a.price < b.price); // descending order


    function renderOrders(ComponentClass, orders) {
      let cumulative = 0;
      return orders.map((order, index) => {
        cumulative += order.quantity
        order.cumulative = cumulative;
        order.maxCumulative = maxCumulative;
        return (<ComponentClass key={index} {...order} />);
      });
    }

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>USDT</TableCell>
            <TableCell align="center">USDT/BUSD</TableCell>
            <TableCell align="right">BUSD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{borderBottom: 1, borderColor: 'divider'}}>
          {renderOrders(AskOrder, askOrders).reverse()}
        </TableBody>
        <TableBody>
          {renderOrders(BidOrder, bidOrders)}
        </TableBody>
      </Table>
    );
  }
}

OrderBook.propTypes = {
  askOrders: PropTypes.array,
  bidOrders: PropTypes.array
};

export default OrderBook;
