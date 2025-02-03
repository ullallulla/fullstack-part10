import { View, Text, Image, StyleSheet } from "react-native"
import theme from "../theme"


const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    padding: 10,
    flexShrink: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 5,
    borderRadius: 5
  }
});

const formatCount = (count) => count > 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString()

const RepositoryItem = ({repository}) => (
    <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
                <Image style={theme.logo} source={{uri: repository.ownerAvatarUrl}}></Image>
            </View>
            
            <View style={styles.column}>
                <Text style={{fontWeight: 'bold'}}>{repository.fullName}</Text>
                <Text>Description: {repository.description}</Text>
                <View style={{alignSelf: 'flex-start'}}>
                    <Text style={styles.languageTag}>{repository.language}</Text>
                </View>
            </View>
        </View>
        
        
        <View style={styles.row}>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{formatCount(repository.stargazersCount)}</Text>
                <Text>Stars</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{formatCount(repository.forksCount)}</Text>
                <Text>Forks</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{formatCount(repository.reviewCount)}</Text>
                <Text>Reviews</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>{formatCount(repository.ratingAverage)}</Text>
                <Text>Rating</Text>
            </View>
        </View>
    </View>
)

export default RepositoryItem