import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { BrowserView, MobileView } from "react-device-detect";
import IconButton from "@mui/material/IconButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicIcon from "@mui/icons-material/Public";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';

function About() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
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
                        href="/"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <SearchIcon />
                          </ListItemIcon>
                          Search
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
                        href="/"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <MenuItem onClick={popupState.close}>
                          <ListItemIcon>
                            <SearchIcon />
                          </ListItemIcon>
                          Search
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
                <Typography variant="h2" align="center" color="secondary">About Rezi</Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    Pirating games has gotten easier and easier as time goes on. It has also gotten much harder as well. Finding good,
                    reliable sources for games has become difficult and even risky. With the emergence of clone sites and other sketchy
                    fakes of reliable sites, it has become a chore to find the cracked game you want to play. Rezi is a game search engine
                    that allows you to search easily and quickly from a huge list of verified sources from the community and me, the
                    developer of Rezi. I enjoy playing video games myself and over time, I haven't been able to find good, safe, and fast
                    sources for games. This has been a problem for others in the community as well. On a request from a friend, I decided
                    to create the first iteration of Rezi, which was the <a href="https://github.com/wamy-dev/rezi" style={{ color: "inherit"}}> Rezi Discord bot. </a>
                </Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    The bot was a success and I decided to create a website for it as Discord isn't a great interface for pirated games. 
                    The website was my first dive into web development and I learned a lot. And now we are here at the current iteration of
                    Rezi. The bot and the website (in my opinion) are both easy to use and are beautiful to look at as well. Thank you for
                    using Rezi. It means a lot. -Wamy.
                </Typography>
                <Typography variant="h4" align="center" paddingLeft="10%" paddingRight="10%" paddingTop="40px" color="secondary">
                    Information
                </Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    The Rezi database is updated every 24 hours (00:00 GMT+2). If a new game just came out, please wait at least that long before searching for it.
                    Please also bear in mind that newer games may not be on the host websites yet (not being cracked or leaked yet) and they will not show up in the search results. If you want updates when the database is updated, please join the <a href="https://discord.gg/47SnjxgBFb" style={{ color: "inherit"}}> Rezi Discord server.</a>
                </Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    Rezi now allows you to play some of your searched games directly in your browser with the help of <a href="https://emulatorjs.org/" style={{ color: "inherit"}}> EmulatorJS!</a>
                    {" "} If your game is compatible there will be a controller icon, and once you click on it, it will allow you to emulate your game directly on Rezi! How cool is that? Once you click
                    on "START GAME", the game will then start to load. It may take awhile as the game file is downloading directly onto your browser. Once it is done, you will be able to play your game.
                </Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    If you want a game, and it's not showing up, please make an issue on <a href="https://github.com/Wamy-Dev/ReziWebsite/issues/new" style={{ color: "inherit"}}> the Github</a>
                    {" "} and I will do my best to get it available asap. Also, if you would like a source to be added to the database, please make an issue on the Github as well. If you come across any dead links, please report them to me on the Discord server or on the Github.
                </Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    The Rezi API is free to use by all. If you are a developer and want to use it, please read the docs <a href="https://docs.rezi.one" style={{ color: "inherit"}}> here.</a>
                    {" "} The API is based off of Meilisearch and is free for everyone with (basically) no limits. If you would like to use it in a project, I encourage you to do so. Please credit the 
                    Rezi API in your project. Thank you.
                </Typography>
                <Typography variant="body1" align="left" paddingLeft="10%" paddingRight="10%" paddingTop="40px">
                    Finally, I would like to give a warning. Please use an Ad-blocker when visiting any of these sites. The sites are not malicious, but most of them contain ads. I would recommend using
                    the Brave browser or using an ad-blocker extension on your browser of choice.
                </Typography>
          </Grid>
        </Grid>
      </Box>
    )
}
export default About;