import { Grid, Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import Icon from "../../atoms/Icons/icon";
interface PropsType {
  iconURL: string;
  cryptoName: string;
  abbr: string;
}
const CurrencyGroup = (props: PropsType) => {
  return (
    <Grid item>
      <Box display="flex">
        <Icon url={props.iconURL} />
        <Grid flexDirection="column" alignItems="center">
          <Typography variant="body2">{props.cryptoName}</Typography>
          <Typography variant="caption">{props.abbr}</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default CurrencyGroup;