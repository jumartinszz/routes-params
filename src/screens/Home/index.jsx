import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/Title';
import styles from './styles';
import {user} from '../../data/Profile';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title title={"Home - Hello today birthday felipe dev"}/>

      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate("Profile", {user})}/>
    <Text style={styles.text}>Go to Profile</Text>
    <TouchableOpacity/>

    <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate("Category")}/>
    <Text style={styles.text}>Go to Category</Text>
    <TouchableOpacity/>
    </View>
  )
}