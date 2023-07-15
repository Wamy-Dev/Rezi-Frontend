import Search from "./components/search";
import * as React from "react";
import Box from "@mui/material/Box";
import ReziLogo from "./rezilogo.png";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { BrowserView, MobileView } from "react-device-detect";
import IconButton from "@mui/material/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BoltIcon from "@mui/icons-material/Bolt";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicIcon from "@mui/icons-material/Public";
import ListItemIcon from "@mui/material/ListItemIcon";
import SvgIcon from '@mui/material/SvgIcon';

function Main() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <center>
              <a href="/">
                <img src={ReziLogo} alt="Rezi Logo" width="200" height="200" />
              </a>
            </center>
          </Grid>
          <Grid item xs={2}>
            <BrowserView>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      size="large"
                      color="primary"
                      variant="outlined"
                      startIcon={<MenuIcon />}
                      {...bindTrigger(popupState)}
                    >
                      Menu
                    </Button>
                    <Menu {...bindMenu(popupState)} width="150px">
                      <a
                        href="/about"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <BoltIcon />
                          </ListItemIcon>
                          About
                        </MenuItem>
                      </a>
                      <a
                        href="https://github.com/wamy-dev/reziwebsite"
                        style={{ color: "inherit", textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <GitHubIcon />
                          </ListItemIcon>
                          GitHub
                        </MenuItem>
                      </a>
                      <a
                        href="https://discord.gg/47SnjxgBFb"
                        style={{ color: "inherit", textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <SvgIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-discord" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                                <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                              </svg>
                            </SvgIcon>
                          </ListItemIcon>
                          Discord
                        </MenuItem>
                      </a>
                      <a
                        href="https://docs.rezi.one"
                        style={{ color: "inherit", textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <PublicIcon />
                          </ListItemIcon>
                          API
                        </MenuItem>
                      </a>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </BrowserView>
            <MobileView>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <IconButton
                      size="large"
                      color="primary"
                      {...bindTrigger(popupState)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu {...bindMenu(popupState)} width="150px">
                      <a
                        href="/about"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <BoltIcon />
                          </ListItemIcon>
                          About
                        </MenuItem>
                      </a>
                      <a
                        href="https://github.com/wamy-dev/reziwebsite"
                        style={{ color: "inherit", textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <GitHubIcon />
                          </ListItemIcon>
                          GitHub
                        </MenuItem>
                      </a>
                      <a
                        href="https://homeonacloud.com/donate"
                        style={{ color: "inherit", textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <AttachMoneyIcon />
                          </ListItemIcon>
                          Donate
                        </MenuItem>
                      </a>
                      <a
                        href="https://docs.rezi.one"
                        style={{ color: "inherit", textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <PublicIcon />
                          </ListItemIcon>
                          API
                        </MenuItem>
                      </a>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </MobileView>
          </Grid>
          <Grid item xs={12}>
            <center>
              <Search />
            </center>
          </Grid>
        </Grid>
      </Box>
  );
}
export default Main;