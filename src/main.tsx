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