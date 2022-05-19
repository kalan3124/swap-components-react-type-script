import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GroupMemmber from "./GroupMemmber";
import Group from "./Group";

interface members {
  name: String;
  status: boolean;
  key: number;
  checked: boolean;
}

interface group {
  name: String;
  status: boolean;
  key: number;
}
const SwapMain = () => {
  const [group, setGroup] = useState<group[]>([]);
  const [members, setMembers] = useState<members[]>([
    {
      name: "Jhonny deep",
      status: false,
      key: 0,
      checked: false,
    },
    {
      name: "Harry potter",
      status: true,
      key: 1,
      checked: false,
    },
    {
      name: "Mia kalifa",
      status: true,
      key: 2,
      checked: false,
    },
    {
      name: "Sharuk kahan",
      status: true,
      key: 3,
      checked: false,
    },
    {
      name: "Kissa",
      status: true,
      key: 4,
      checked: false,
    },
  ]);

  const collectMembers = (check: boolean, index: number) => {
    if (check) {
      checkUnCheck(index, true);
      setGroup([
        ...group,
        {
          name: members[index].name,
          status: members[index].status,
          key: index,
        },
      ]);
    } else {
      checkUnCheck(index, false);
      deleteGroupMems(index);
    }
  };

  const checkUnCheck = (index: number, checked: boolean) => {
    let updateArr = [...members];
    updateArr[index].checked = checked;
    setMembers(updateArr);
  };

  const deleteGroupMems = (index: number) => {
    let groupIndex = group.findIndex(
      (val, key) => members[index].key === val.key
    );
    group.splice(groupIndex, 1);
    setGroup([...group]);
    checkUnCheck(index, false);
    /*You can use this method to delete element

      let arrNew = [...group];
      delete arrNew[groupIndex];
      let arr = Object.values(arrNew).filter(function () {
        return true;
      });
      setGroup(arr);
      */
  };
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid key={0} item>
              <Paper
                sx={{
                  height: 500,
                  width: 500,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <GroupMemmber
                  members={members}
                  collectMembers={collectMembers}
                />
              </Paper>
            </Grid>
            <Grid key={2} item>
              <Paper
                sx={{
                  height: 500,
                  width: 500,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Group group={group} deleteGroupMems={deleteGroupMems} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SwapMain;
