import { Box } from "@mui/material";
import { useAppSelector } from "../redux/store";

const UserCounter = () => {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <Box
      bgcolor={"#fff"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"5%"}
      fontSize={"24px"}
    >
      {count}
    </Box>
  );
};

export default UserCounter;
