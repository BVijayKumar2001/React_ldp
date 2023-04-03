import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import { CardType } from "../../organisms/cardTable";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CurrencyGroup from "../currencyGroup/currencyGroup";

const Card = (props: CardType) => {
  return (
    <div>
      {!props.shouldHide ? (
        <Grid
          width="90%"
          container
          alignItems="center"
          marginLeft='5%'
          justifyContent="space-between"
          component={Paper}
          elevation={4}
          sx={{ px: 2, my: 3, py: 1 }}
        >
          <CurrencyGroup
            iconURL={props.iconURL}
            cryptoName={props.cryptoName}
            abbr={props.abbr}
          />
          <Typography variant="body2">{props.price}</Typography>
          <Typography variant="body2">{props.change}</Typography>
          <Typography variant="body2">{props.marketCap}</Typography>

          <span onClick={props.onClick}>
            {props.isWatchlisted ? <StarIcon /> : <StarBorderIcon />}
          </span>
        </Grid>
      ) : (
        <Grid
          width="90%"
          container
          alignItems="center"
          justifyContent="space-between"
          marginLeft='5%'
          component={Paper}
          elevation={4}
          sx={{ px: 2, my: 3, py: 1 }}
        >
          <CurrencyGroup
            iconURL={props.item.iconURL}
            cryptoName={props.item.cryptoName}
            abbr={props.item.abbr}
          />
          <Typography variant="body2">{props.item.price}</Typography>
          <Typography variant="body2">{props.item.change}</Typography>
          <Typography variant="body2">{props.item.marketCap}</Typography>

          <span onClick={props.onClick}>
            {props.item.isWatchlisted ? <StarIcon /> : <StarBorderIcon />}
          </span>
        </Grid>
      )}
    </div>
  );
};

export default Card;