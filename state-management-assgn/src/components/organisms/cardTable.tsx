import { ReactElement, useState } from "react";

import Card from "../molecules/Card/card";
import { Tab, Tabs } from "@mui/material";
import CurrencyData from "../CurrencyData";
export type CardType = {
  id: number;
  iconURL: string;
  cryptoName: string;
  abbr: string;
  price: string;
  change: string;
  marketCap: string;
  onClick?: () => any;
  shouldHide?: boolean;
  currData?: CardType[];
  isWatchlisted?: boolean;
  item?: any;
};
const CardTable = () => {
  const [currData, setCurrData] = useState<CardType[]>(CurrencyData);
  const [tabValue, setTabValue] = useState<number>(0);

  const addWatchlist = (data: CardType): any => {
    const tempData = currData.map((item) => {
      if (item.id === data.id) {
        return { ...item, isWatchlisted: !item.isWatchlisted };
      } else {
        return { ...item };
      }
    });
    setCurrData(tempData);
  };

  const removeWatchlist = (data: CardType) => {
    const tempData = currData.map((item) => {
      if (item.id === data.id) {
        return { ...item, isWatchlisted: !item.isWatchlisted };
      } else {
        return { ...item };
      }
    });
    setCurrData(tempData);
  };
  const handleTabs = (e: any, val: number) => {
    setTabValue(val);
  };
  type TabProps = {
    value: number;
    index: number;
    children: React.ReactNode;
  };
  const TabPanel = (props: TabProps) => {
    return (
      <div>{props.value === props.index && <h1>{props.children}</h1>}</div>
    );
  };
  return (
    <div>
      <Tabs value={tabValue} onChange={handleTabs}>
        <Tab label="All Assets" sx={{ textTransform: "none" }} />
        <Tab label="WatchList" sx={{ textTransform: "none" }} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        {currData.length &&
          currData?.map((data) => (
            <div key={data.id}>
              <Card
                id={data.id}
                currData={currData}
                iconURL={data.iconURL}
                cryptoName={data.cryptoName}
                abbr={data.abbr}
                price={data.price}
                change={data.change}
                marketCap={data.marketCap}
                onClick={() => {
                  addWatchlist(data);
                }}
                shouldHide={false}
                isWatchlisted={data.isWatchlisted}
              />
            </div>
          ))}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {currData.length &&
          currData.map((item) =>
            item.isWatchlisted ? (
              <Card
                id={1}
                iconURL=""
                cryptoName=""
                abbr=""
                price=""
                change=""
                marketCap=""
                shouldHide={true}
                currData={currData}
                item={item}
                onClick={() => {
                  removeWatchlist(item);
                }}
              />
            ) : (
              <></>
            )
          )}
      </TabPanel>
    </div>
  );
};

export default CardTable;