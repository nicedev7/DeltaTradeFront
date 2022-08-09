import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
// components
import MenuPopover from '../MenuPopover';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'cn' },
  { label: 'Français', value: 'fr' },
  { label: 'Español', value: 'es' },
  { label: '한국어', value: 'kr' },
];

// ----------------------------------------------------------------------

export default function LanguagePopover(props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(0);
  const { pos } = props

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    const type = e.target.getAttribute("value")
    if(type!==null)
      setType(type)
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        startIcon={<PublicIcon />}
        sx={{color: "text.primary"}}
      >
        {MENU_OPTIONS[type].label}
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }} pos={pos}>
        {MENU_OPTIONS.map((option, _i) => (
          <MenuItem
            key={option.label}
            value={_i}
            selected={_i === type*1}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
