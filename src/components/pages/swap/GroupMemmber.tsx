import React from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import {
  Avatar,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

interface membersData {
  name: String;
  status: boolean;
  key: number;
  checked: boolean;
}
interface membersProps {
  members: membersData[];
  collectMembers: (mem: boolean, index: number) => void;
}

const GroupMemmber: React.FC<membersProps> = (props) => {
  const onSelectMembers = (e: any, index: number) => {
    props.collectMembers(e.target.checked, index);
  };
  return (
    <div>
      <List
        className="ul-pad"
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {Object.values(props.members).map((val, key) => {
          return [
            <div key={key + "_list"}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <Checkbox
                    checked={val.checked}
                    onClick={(e) => onSelectMembers(e, key)}
                    edge="end"
                    inputProps={{
                      "aria-labelledby": `checkbox-list-secondary-label-` + key,
                    }}
                  />
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={val.name}
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

export default GroupMemmber;
