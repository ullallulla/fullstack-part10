import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable>
        <Link to={'/'}>
        <Text style={{color: 'white', fontSize: theme.fontSizes.subheading}}>
              Repositories
          </Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to={'/signin'}>
        <Text style={{color: 'white', fontSize: theme.fontSizes.subheading}}>
              Sign in
          </Text>
        </Link>
      </Pressable>
    </ScrollView>
  </View>);
};

export default AppBar;