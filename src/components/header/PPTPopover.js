import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography, OutlinedInput } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// components
import MenuPopover from '../MenuPopover';
import Scrollbar from '../Scrollbar';
import OtherToken from '../dialog/OtherToken'
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
    {"addr":"0x0000000000000000000000000000000000000000","name":"BUSD"},
    {"addr":"0xd8912c10681d8b21fd3742244f44658dba12264e","name":"Swapz"},
    {"addr":"0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7","name":"USDT"},
    {"addr":"0x936f78b9852d12f5cb93177c1f84fb8513d06263","name":"Velas"},
    {"addr":"0x01afc37f4f85babc47c0e2d0eababc7fb49793c8","name":"Wagyuswap"},
];

// ----------------------------------------------------------------------

export default function PPTPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [filteredMenu, setFilteredMenu] = useState(MENU_OPTIONS);
  const [otherOpen, setOpenOther] = useState(false);
  const [type, setType] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    const type = e.target.getAttribute("value")
    if(type!==null) {
      // setOpenDetail(true)
      setType(type)
    }
    setOpen(false);
  };
  const handleOther = (e) => {
    setOpenOther(true)
    setOpen(false)
  }
  const handleChange = (e)=>{
    const searchString = e.target.value
    const filteredList = MENU_OPTIONS.filter(option=>option.name.startsWith(searchString))
    setFilteredMenu(filteredList)
  }
  return (
    <>
      <Button
        endIcon={<ArrowDropDownIcon />}
        ref={anchorRef}
        onClick={handleOpen}
        sx={{color: "text.primary"}}
      >
        USDT
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220, maxHeight: 400 }}>
        <Scrollbar sx={{height: '100%', maxHeight: 400, px: 2}} autoHide={false}>
          <Box sx={{ typography: 'body2', py: 1, px: 0 }}>
            <OutlinedInput placeholder="Search..." size="small" onChange={handleChange}/>
          </Box>
          <Divider sx={{ my: 1 }} />
          {filteredMenu.map((option, _i) => (
            <MenuItem
              key={_i}
              value={_i}
              onClick={handleClose}
              sx={{ typography: 'body2', py: 1, px: 2.5 }}
            >
              {option.name}
            </MenuItem>
          ))}
          <Divider sx={{ my: 1 }} />
          <MenuItem
            onClick={handleOther}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            Other
          </MenuItem>
        </Scrollbar>
      </MenuPopover>
      <OtherToken isOpen={otherOpen} setOpen={setOpenOther}/>
    </>
  );
}
