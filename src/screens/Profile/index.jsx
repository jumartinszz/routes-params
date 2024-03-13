import { View, Text } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

export default function Profile({route}) {
  const {user} = route.params;
  // const user = route.params.user
  return (
    <View style={styles.container}>
      <Title title={"Profile"}/>
      <Text>Nome:{user.name}</Text>
      <Text>Nome:{user.email}</Text>
      <Text>Nome:{user.age}</Text>
    </View>
  )
}