import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
// components
import MenuPopover from '../MenuPopover';
import Scrollbar from '../Scrollbar';
import TokenDetailDialog from '../dialog/TokenDetail'
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {"addr":"0x0000000000000000000000000000000000000000","name":"BUSD"},
  {"addr":"0xd8912c10681d8b21fd3742244f44658dba12264e","name":"Swapz"},
  {"addr":"0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7","name":"USDT"},
  {"addr":"0x936f78b9852d12f5cb93177c1f84fb8513d06263","name":"Velas"},
  {"addr":"0x01afc37f4f85babc47c0e2d0eababc7fb49793c8","name":"Wagyuswap"},
];

// ----------------------------------------------------------------------

export default function TokensPopover(props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [detailOpen, setOpenDetail] = useState(false);
  const [type, setType] = useState(0);
  const { pos } = props

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    const type = e.target.getAttribute("value")
    if(type!==null) {
      setOpenDetail(true)
      setType(type)
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        startIcon={<Icon icon="fa6-solid:coins" />}
        sx={{color: "text.primary"}}
      >
        Tokens
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220, maxHeight: 400 }} pos={pos}>
        <Scrollbar sx={{height: '100%', maxHeight: 400, px: 2}} autoHide={false}>
          {MENU_OPTIONS.map((option, _i) => (
            <MenuItem
              key={_i}
              value={_i}
              onClick={handleClose}
              sx={{ typography: 'body2', py: 1, px: 2.5 }}
            >
              {option.name}
            </MenuItem>
          ))}
        </Scrollbar>
      </MenuPopover>
      <TokenDetailDialog isOpen={detailOpen} setOpen={setOpenDetail} detail={MENU_OPTIONS[type]}/>
    </>
  );
}
