import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../redux/store";
import "../styles/common.css";

const UserCounter = () => {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <Box flex={1}
      bgcolor={"#fff"}
      textAlign={"center"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={5} >
      <Typography variant="h1">
        {count}
      </Typography>
    </Box>
  );
};

export default UserCounter;
