import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography } from '@mui/material';
// components
import MenuPopover from '../MenuPopover';
import { reduceHexAddress } from '../../utils/common'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { address: '0x8d12a197cb8d12a197cb8d12a197cb8d12a197cb', date: '(Latest 02/09/2017)', deprecated: false },
  { address: '0x373c55c277373c55c277373c55c277373c55c277', date: '(Deployed 10/24/2016 - Deprecated)', deprecated: true },
  { address: '0x4aea7cf5594aea7cf5594aea7cf5594aea7cf559', date: '(Deployed 08/30/2016 - Deprecated)', deprecated: true },
];

// ----------------------------------------------------------------------

export default function AccountPopover(props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [contractIndex, setContract] = useState(0);
  const { pos } = props

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectContract = (index) => {
    setContract(index)
    handleClose()
  }
  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        startIcon={<FeedOutlinedIcon />}
        sx={{color: "text.primary"}}
      >
        Contract
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 420 }} pos={pos}>
        <MenuItem
          to='#'
          component={RouterLink}
          onClick={handleClose}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
        >
          Connection: RPC (http://localhost:8545)
        </MenuItem>
        <MenuItem
          href='https://etherscan.io/address/0x373c55c277b866a69dc047cad488154ab9759466'
          component='a'
          target='_blank'
          onClick={handleClose}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
        >
          Etherscan contract
        </MenuItem>
        <MenuItem
          href='https://www.reddit.com/r/EtherDelta/comments/6kdiyl/smart_contract_overview/'
          component='a'
          target='_blank'
          onClick={handleClose}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
        >
          Smart contract overview
        </MenuItem>
        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option, _i) => (
          <MenuItem
            key={_i}
            value={_i}
            selected={_i === contractIndex*1}
            onClick={()=>{handleSelectContract(_i)}}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            {reduceHexAddress(option.address)}
            <Typography variant='body2' color={!option.deprecated?'success.main':'text.disabled'}>{option.date}</Typography>
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
