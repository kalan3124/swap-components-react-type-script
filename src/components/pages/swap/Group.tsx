import React from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

interface groupData {
  name: String;
  status: boolean;
  key: number;
}
interface groupProps {
  group: groupData[];
  deleteGroupMems: (index: number) => void;
}

const Group: React.FC<groupProps> = (props) => {
  return (
    <div>
      <List
        className="ul-pad"
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {Object.values(props.group).map((val, key) => {
          return [
            <div key={key + "_list"}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => props.deleteGroupMems(val.key)}
                  >
                    <HighlightOffIcon htmlColor="red" />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={val.name + "-" + val.key}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {val.status ? (
                          <ToggleOnIcon htmlColor="green" />
                        ) : (
                          <ToggleOnIcon />
                        )}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>,
          ];
        })}
      </List>
    </div>
  );
};

export default Group;
