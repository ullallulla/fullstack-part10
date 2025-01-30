import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable>
        <Text style={{color: 'white', fontSize: theme.fontSizes.subheading}}>
            Repositories
        </Text>
    </Pressable>
  </View>);
};

export default AppBar;