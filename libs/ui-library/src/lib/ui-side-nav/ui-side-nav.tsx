import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

import { CSSObject, styled, Theme } from '@mui/material/styles';
import { IconType, IIcon, Nullable } from '@ui-solution/ui-framework-api-interface';


export interface ISideNavItem {
  label: string;
  icon: IIcon;
  id: string;
}
interface ISideNav {
  items: ISideNavItem;
}


/* eslint-disable-next-line */
export interface UiSideNavProps {
  open: boolean;
  items: Nullable<ISideNavItem[]>;
  onSelect: (selectedItem: ISideNavItem) => void;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    position: 'static',
    height: '100%',
    borderRight: `1px solid ${theme.palette.divider}`,
    '.MuiDrawer-paper': {position: 'static'},
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export function UiSideNav({open, items, onSelect}: UiSideNavProps) {
  return (
    <Drawer variant="permanent" open={open}>
        <List>
          {items?.map(({label, icon}, index) => (
            <ListItem key={label} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => onSelect(items[index])}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 1.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon.icon === IconType.inbox ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}



export default UiSideNav;
