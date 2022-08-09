import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Avatar, Button, Box, Divider, MenuItem, Typography, Link, Stack } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
// components
import MenuPopover from '../MenuPopover';
import Scrollbar from '../Scrollbar';
import HelpDetailDialog from '../dialog/HelpDetail'
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'Chat', icon: 'bi:chat', linkTo: 'https://gitter.im/etherdelta/etherdelta.github.io' },
  { label: 'Reddit', icon: 'dashicons:reddit', linkTo: 'https://www.reddit.com/r/EtherDelta' },
  { label: 'YouTube', icon: 'ant-design:youtube-filled', linkTo: 'https://www.youtube.com/channel/UCkUTWdqHjFUfC98gFUsNuzg' },
  { label: 'Twitter', icon: 'ant-design:twitter-outlined', linkTo: 'https://twitter.com/etherdelta' },
  { label: 'Mailing list', icon: 'fluent:mail-16-filled', linkTo: 'http://etherboost.us13.list-manage.com/subscribe?u=6ad46e524f84c79c4d8475e91&id=b7675dc8dd' },
  { label: 'Fees', icon: 'fa6-regular:money-bill-1', linkTo: 'https://www.reddit.com/r/EtherDelta/comments/6hrvwl/how_fees_work/' },
  { label: 'Guides', icon: 'bx:help-circle', linkTo: 'https://www.reddit.com/r/EtherDelta/comments/6hrxjw/etherdelta_guides_for_first_time_users/' },
  { label: 'Connect to Ethereum Screencast', icon: 'bi:display', linkTo: '', type: 'connect' },
  { label: 'Deposit Screencast', icon: 'bi:display', linkTo: '', type: 'deposit' },
  { label: 'Withdraw Screencast', icon: 'bi:display', linkTo: '', type: 'withdraw' },
  { label: 'Order Screencast', icon: 'bi:display', linkTo: '', type: 'order' },
  { label: 'Cancel Screencast', icon: 'bi:display', linkTo: '', type: 'cancel' },
];

// ----------------------------------------------------------------------

export default function HelpPopover(props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [detailOpen, setOpenDetail] = useState(false);
  const [type, setType] = useState(0);
  const { pos } = props

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  const openHelp = (type) => {
    setOpenDetail(true)
    setType(type)
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        startIcon={<Icon icon="ep:help" />}
        sx={{color: "text.primary"}}
      >
        Help
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 300, maxHeight: 400 }} pos={pos}>
        <Scrollbar sx={{height: '100%', maxHeight: 400, px: 2}} autoHide={false}>
          {
            MENU_OPTIONS.map((option, _i) => {
              const linkProps = option.linkTo?{component: Link, href: option.linkTo, target: '_blank'}:{}
              return <MenuItem
                key={_i}
                value={_i}
                onClick={option.linkTo?handleClose:()=>{openHelp(_i)}}
                sx={{ typography: 'body2', py: 1, px: 2.5 }}
                {...linkProps}
              >
                <Stack direction='row' alignItems='center'>
                  <Icon icon={option.icon} style={{marginRight: 8}} width={16} height={16}/>
                  <span>{option.label}</span>
                </Stack>
              </MenuItem>
            })
          }
        </Scrollbar>
      </MenuPopover>
      <HelpDetailDialog isOpen={detailOpen} setOpen={setOpenDetail} type={MENU_OPTIONS[type].type}/>
    </>
  );
}
