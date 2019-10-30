import React, { useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import CountryTable from "./CountryTable";
import UserSelectionTable from "./UserSelectionTable";
import AllCountriesTable from "./AllCountriesTable";
import { useSelector, useDispatch } from "react-redux";

const TamkTable = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.tamkcountriesReducer.countries);
  const userSelected = useSelector(
    state => state.tamkcountriesReducer.userSelected
  );
  const allCountryFields = ["name", "population", "percentage", "position"];
  const userSelectedCountryFields = [
    "name",
    "population",
    "percentage",
    "position"
  ];

  const addToList = props => {
    dispatch({ type: "SELECT_TAMK_COUNTRY", payload: props.country });

    return;
  };
  const removeFromList = props => {
    dispatch({ type: "DELETE_TAMK_COUNTRY", payload: props.country });

    return;
  };
  const getData = () => {
    return dispatch => {
      axios.get("http://home.tamk.fi/~kujesa/countries.php").then(res =>
        dispatch({
          type: "FETCH_TAMK_DATA",
          payload: res.data
        })
      );
    };
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className=" App container sticky-top">
      <UserSelectionTable>
        <CountryTable
          fields={userSelectedCountryFields}
          countries={userSelected}
          emptymsg="No countries selected yet..."
        >
          <Country
            onClick={removeFromList}
            fields={userSelectedCountryFields}
          />
        </CountryTable>
      </UserSelectionTable>
      <AllCountriesTable>
        <CountryTable fields={allCountryFields} countries={countries}>
          <Country onClick={addToList} fields={allCountryFields} />
        </CountryTable>
      </AllCountriesTable>
    </div>
  );
};

export default TamkTable;
