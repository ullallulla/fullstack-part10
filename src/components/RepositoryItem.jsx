import { View, Text, Image } from "react-native"
import theme from "../theme"

const RepositoryItem = ({repository}) => (
    <View style={{backgroundColor: 'white'}}>
        <Image style={theme.logo} source={{uri: repository.ownerAvatarUrl}}></Image>
        <Text>Full name: {repository.fullName}</Text>
        <Text>Description: {repository.description}</Text>
        <Text>Language: {repository.language}</Text>
        <Text>Stars: {repository.stargazersCount}</Text>
        <Text>Forks: {repository.forksCount}</Text>
        <Text>Reviews: {repository.reviewCount}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
    </View>
)

export default RepositoryItem