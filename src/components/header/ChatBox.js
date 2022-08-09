import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
// material
import { Avatar, Button, Box, Divider, MenuItem, Typography, Link, Stack } from '@mui/material';
// components
import ChatPopup from '../chat'
// ----------------------------------------------------------------------

export default function ChatBox() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        startIcon={<Icon icon="cil:chat-bubble" />}
        sx={{color: "text.primary"}}
      >
        Chat
      </Button>

      <ChatPopup isOpen={open} setOpen={setOpen}/>
    </>
  );
}
