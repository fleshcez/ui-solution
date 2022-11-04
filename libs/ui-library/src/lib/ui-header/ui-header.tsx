import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface UiHeaderProps {
  onToggle: (open: boolean) => void;
  hasToggle?: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar)<AppBarProps>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;


function useHeader({ onToggle }: UiHeaderProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () =>
    setOpen((prevIsOpen) => {
      onToggle(!prevIsOpen);
      return !prevIsOpen;
    });
  return { open, toggleOpen };
}

export function UiHeader(props: UiHeaderProps) {
  const { open, toggleOpen } = useHeader(props);
  const { hasToggle } = props;

  return (
    // <HeadingStyled emphasized={true}/>
    <AppBar position="static" elevation={0} open={open}>
      <Toolbar>
        { hasToggle &&
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleOpen}
            sx={{
              marginRight: 5,
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        }
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default UiHeader;
