import React, { useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  const { movie } = route.params

  useEffect(() => {
    const muvi = async () => {
      try {
        const data = await fetch('http://www.omdbapi.com/?apikey=62eda7be&t=Star+wars&y=1977');
        const response = await data.json();
        return console.log(response);
      } catch (err) {
        console.log(err)
      }
    }

    muvi();
  }, [])

  console.log(route)
  return (
    <View style={styles.mainView}>

    </View>
  )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;