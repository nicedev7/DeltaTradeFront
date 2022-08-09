import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography } from '@mui/material';
// components
import MenuPopover from '../MenuPopover';
import NewAccountDialog from '../dialog/NewAccount'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'New account', icon: homeFill },
  { label: 'Import account', icon: null },
  { label: 'Ledger Nano S', icon: null },
  { label: 'Etherscan address', icon: null },
  { label: 'Export private key', icon: null },
  { label: 'Forget account', icon: null },
  { label: 'Gas price', icon: null },
];

// ----------------------------------------------------------------------

export default function AccountPopover(props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({address: '', pk: ''});
  const [newInfoOpen, setOpenNewInfo] = useState(false);
  const { pos } = props
  
  const accountInfo = JSON.parse(sessionStorage.getItem("ACCOUNTS_INFO"))
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClick = (index) => {
    switch(index) {
      case 0: {
        const tempAddr = '0xFb99e86D0b0aE4270e44A52D09070D38308192e0'
        const tempPK = 'b318d6ccf38a3b889f338b7dbc83dc78508ea71bdd541bdf1a99c989a18091a3'
        sessionStorage.setItem("ACCOUNTS_INFO", JSON.stringify([tempAddr]))
        setInfo({address: tempAddr, pk: tempPK})
        setOpenNewInfo(true)
        break;
      }
      default:
        break;
    }
    setOpen(false);
  };
  const handleClickAddress = (index) => {
    setOpen(false);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        startIcon={<AccountCircleOutlinedIcon />}
        sx={{color: "text.primary"}}
      >
        Account
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: accountInfo?450:220 }} pos={pos}>
        {
          !!accountInfo&&
          <>
            {
              accountInfo.map((address, _i)=>(
                <MenuItem
                  key={_i}
                  onClick={()=>{handleClickAddress(_i)}}
                  sx={{ typography: 'body2', py: 1, px: 2.5 }}
                >
                  {address}
                </MenuItem>
              ))
            }
            <Divider sx={{ my: 1 }} />
          </>
        }
        {MENU_OPTIONS.map((option, _i) => (
          <MenuItem
            key={option.label}
            // to={option.linkTo}
            // component={RouterLink}
            onClick={()=>{handleClick(_i)}}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            {/* <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            /> */}

            {option.label}
          </MenuItem>
        ))}
      </MenuPopover>
      <NewAccountDialog isOpen={newInfoOpen} setOpen={setOpenNewInfo} {...info}/>
    </>
  );
}
