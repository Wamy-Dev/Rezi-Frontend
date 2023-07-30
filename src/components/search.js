import React from "react";
import { useEffect, useState } from 'react';
import {
  InstantSearch,
  Hits,
  Highlight,
  Configure,
  connectStateResults,
} from "react-instantsearch-dom";
import Skeleton from '@mui/material/Skeleton';
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from "@mui/material/Link";
import Tooltip from '@mui/material/Tooltip';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CustomSearchBox from "./searchbox";
import CustomPagination from "./pagination";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from '@mui/material/IconButton';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Theme from './theme';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import PC from './icons/PC.png';
import GameboyAdvance from './icons/gameboy advance.png';
import DS from './icons/ds.png';
import Default from './icons/default.png';
import Gamecube from './icons/gamecube.png';
import VR from './icons/vr.png';
import Switch from './icons/switch.png';
import PSP from './icons/psp.png';
import Wii from './icons/wii.png';
import Atari from './icons/atari.png';
import Gameboy from './icons/gameboy.png';
import Nintendo64 from './icons/nintendo64.png';
import Arcade from './icons/arcade.png';
import NES from './icons/nes.png';
import ps1 from './icons/ps1.png';
import ps2 from './icons/ps2.png';
import ps3 from './icons/ps3.png';
import XboxOrg from './icons/xboxorg.png';
import Xbox360 from './icons/xbox360.png';

const Client = instantMeiliSearch(
  "https://search.rezi.one",
  "d3e7e2eb5388b0f6a8dfe0939c5e9c139e2fe8a59697a68e989d4fb1c8dd16f2",
  {
    primaryKey: "id"
  }
);
function Hit({hit}){
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
  <ThemeProvider theme={Theme}>
    <Box sx={{ width: "100%", maxWidth: 450 }}>
      <List sx={{ paddingLeft: 0 }}>
        <ListItem
          key={hit.id}
          sx={{
            borderRadius: "10px",
            minHeight: 70,
            maxHeight: 80,
            overflow: "hidden",
            borderStyle: "solid",
            borderColor: "#646464",
            borderWidth: "1px",
          }}
          secondaryAction={
            <Tooltip title="Go to download">
            <a href={hit.link} target="_blank" rel="noreferrer">
              <IconButton edge="end">
                <OpenInNewIcon />
              </IconButton>
            </a>
            </Tooltip>
          }
        >
          <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip  
            onClose={handleTooltipClose}
            open={open} 
            title={hit.icon}>
            <ListItemIcon onClick={handleTooltipOpen} onMouseOver={handleTooltipOpen}>
              {(() => {
                switch (hit.icon) {
                  case "PC": return <img src={PC} alt={hit.icon} width='32' height='32' />;
                  case "Gameboy Advance": return <img src={GameboyAdvance} alt={hit.icon} width='32' height='32' />;
                  case "Gameboy": return <img src={Gameboy} alt={hit.icon} width='32' height='32' />;
                  case "Gameboy Color": return <img src={Gameboy} alt={hit.icon} width='32' height='32' />;
                  case "DS": return <img src={DS} alt={hit.icon} width='32' height='32' />;
                  case "3DS": return <img src={DS} alt={hit.icon} width='32' height='32' />;
                  case "GameCube": return <img src={Gamecube} alt={hit.icon} width='32' height='32' />;
                  case "VR": return <img src={VR} alt={hit.icon} width='32' height='32' />;
                  case "Virtual Boy": return <img src={VR} alt={hit.icon} width='32' height='32' />;
                  case "Playstation Move": return <img src={VR} alt={hit.icon} width='32' height='32' />;
                  case "Switch": return <img src={Switch} alt={hit.icon} width='32' height='32' />;
                  case "Playstation Vita": return <img src={PSP} alt={hit.icon} width='32' height='32' />;
                  case "Playstation Portable": return <img src={PSP} alt={hit.icon} width='32' height='32' />;
                  case "Wii": return <img src={Wii} alt={hit.icon} width='32' height='32' />;
                  case "Wii U": return <img src={Wii} alt={hit.icon} width='32' height='32' />;
                  case "Atari 2600": return <img src={Atari} alt={hit.icon} width='32' height='32' />;
                  case "Atari 5200": return <img src={Atari} alt={hit.icon} width='32' height='32' />;
                  case "Atari 7800": return <img src={Atari} alt={hit.icon} width='32' height='32' />;
                  case "Nintendo 64": return <img src={Nintendo64} alt={hit.icon} width='32' height='32' />;
                  case "Arcade": return <img src={Arcade} alt={hit.icon} width='32' height='32' />;
                  case "NES": return <img src={NES} alt={hit.icon} width='32' height='32' />;
                  case "SNES": return <img src={NES} alt={hit.icon} width='32' height='32' />;
                  case "Playstation 1": return <img src={ps1} alt={hit.icon} width='32' height='32' />;
                  case "Playstation 2": return <img src={ps2} alt={hit.icon} width='32' height='32' />;
                  case "Playstation 3": return <img src={ps3} alt={hit.icon} width='32' height='32' />;
                  case "Xbox Original": return <img src={XboxOrg} alt={hit.icon} width='32' height='32' />;
                  case "Xbox 360": return <img src={Xbox360} alt={hit.icon} width='32' height='32' />;
                  default: return <img src={Default} alt={hit.icon} width='32' height='32' />;
                }
              })()}
            </ListItemIcon>
          </Tooltip>
          </ClickAwayListener>
          <Link href={hit.igdb_url} target="_blank" rel="noreferrer" color="#fff">
            <div style={{
              display: "flex",
              flexDirection: "row",
            }}>
              <ListItemText
                key={hit.id}
                sx={{ color: "white", listStyleType: "none", marginRight: "5px" }}
                primary={<Highlight attribute="title" hit={hit} />}
              />
            </div>
          </Link>
          {hit.playable ? (
            <Tooltip title="Play on emulator">
              <IconButton
              onClick={(e) => {window.open(`/play?type=${hit.core}&link=${hit.link}&bios=${hit.bios}&title=${hit.title}`, "newwindow", "width=640,height=500"); return false}
              }>
                <VideogameAssetIcon />
              </IconButton>
            </Tooltip>
          ) : (
            null
          )}
        </ListItem>
      </List>
    </Box>
  </ThemeProvider>
  )
}

const Results = connectStateResults(
  ({ searchState, searchResults, children, loaded}) =>
  searchResults ? (
    searchResults.nbHits !== 0 ? (
      <>
        <Hits hitComponent={Hit} />
        <CustomPagination defaultRefinement={1} paddingLeft={20} total={searchResults.nbHits}/>
      </>
    ) : (
      loaded ? (
        <Box sx={{ width: "100%", maxWidth: 450, paddingTop: "20px" }}>
            <Alert
              severity="error"
              variant="outlined"
              sx={{ borderRadius: "10px" }}
            >
              <AlertTitle>No results found</AlertTitle>
              No results have been found for {searchState.query}. That's impossible.
            </Alert>
          </Box>
      ) : (
        <>
          <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
          <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
          <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
          <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
          <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
        </>
      )
    )
  ) : (
    <>
      <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
      <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
      <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
      <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
      <Skeleton variant="rounded" animation="wave" sx={{ marginTop: "20px", maxWidth: 450, width: "100%", minHeight: 75, maxHeight: 90 }}/>
    </>
  )
);
function Search() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', setLoaded(true))
  }, [loaded]);
  return (
    <ThemeProvider theme={Theme}>
      <center>
        <InstantSearch indexName="rezi" searchClient={Client}>
          <Configure hitsPerPage={5}/>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <CustomSearchBox
              searchAsYouType={true}
              reset={<CloseOutlinedIcon />}
            />
          </div>
          <div>
            <Results loaded={loaded}/>
          </div>
        </InstantSearch>
      </center>
    </ThemeProvider>
  );
}
export default Search;
