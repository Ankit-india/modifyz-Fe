import React, { useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import style from "../styles/style";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([
    "Belle Curls",
    "Pretty Parlor",
    "Mia Bella",
    "Hair Force",
    "Serenity Salon",
    "The Razor's Edge",
  ]);

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const filterData = () => {
    if (query === "") {
      return [];
    }

    const filteredData = data.filter((item) =>
      item.toLowerCase().startsWith(query.toLowerCase())
    );

    return filteredData;
  };

  const renderSuggestion = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <>
      <Autocomplete
        style={{ paddingLeft: 20 }}
        data={filterData()}
        value={query}
        onChangeText={handleInputChange}
        placeholder="Enter a Name"
        renderItem={renderSuggestion}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    // position:"absolute"
  },
});

export default SearchBar;
