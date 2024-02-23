import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DataContext from "../../context/DataContext";

import {
  retrieveItemsAllTime,
  retrieveItemsWithinMonth,
  retrieveItemsWithinTwoWeeks,
  retrieveItemsWithinWeek,
  retrieveItemsWithinYear,
} from "../../utils/HomeUtils";

export default function DateRangeFilter() {
  const [DateRangeFilter, setDateRangeFilter] = useState("Date Range Filter");
  const { setLoading, setData } = useContext(DataContext);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        backgroundColor="white"
        colorScheme="twitter"
        variant="outline"
        boxShadow="5px 2px 9px rgba(0, 0, 0, 0.3);"
        color="#74a2fa"
        fontSize={{ base: "xl", md: "2xl" }}
        size="lg"
        // gap={2}
        borderWidth={2}
        borderRadius={"lg"}
      >
        {DateRangeFilter}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() =>
            retrieveItemsAllTime(setData, setDateRangeFilter, setLoading)
          }
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() =>
            retrieveItemsWithinWeek(setData, setDateRangeFilter, setLoading)
          }
        >
          Last 7 Days
        </MenuItem>
        <MenuItem
          onClick={() =>
            retrieveItemsWithinTwoWeeks(setData, setDateRangeFilter, setLoading)
          }
        >
          Last 14 Days
        </MenuItem>
        <MenuItem
          onClick={() =>
            retrieveItemsWithinMonth(setData, setDateRangeFilter, setLoading)
          }
        >
          Last 30 Days
        </MenuItem>
        <MenuItem
          onClick={() =>
            retrieveItemsWithinYear(setData, setDateRangeFilter, setLoading)
          }
        >
          This Year
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
