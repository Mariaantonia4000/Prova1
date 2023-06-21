import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export function Home( ) {
  const [Liked, setLikeState] = useState(false);

  return (

    <View style={styles.container}>
      <View style={styles.InstaCardHeader}>
        <Image
          style={styles.InstaCardImage1}
          source={{ uri: `https://github.com/FredHSQ.png` }}
          />
          <Text>FredHSQ</Text>
      </View>

      <View style={styles.InstaCardHeader}>
        <Image style={styles.InstaCardImage2}
          source={{ uri: `https://github.com/FredHSQ.png` }}
        />
      </View>

      <View style={styles.like}>
        <TouchableOpacity onPress={() => setLikeState(!Liked)}>
          {Liked ? (
            <Ionicons name="ios-heart" size={24} color="black" />
          ) : (
            <Ionicons name="ios-heart" size={24} color="red" />
          )}
        </TouchableOpacity>
      </View>

      
      
      <View style={styles.InstaCardHeader}>
        <Image
          style={styles.InstaCardImage1}
          source={{ uri: `https://github.com/rafaballerini.png` }}
          />
          <Text>rafaballerini</Text>
      </View>

          <View style={styles.InstaCardHeader}>
        <Image style={styles.InstaCardImage2}
          source={{ uri: `https://github.com/rafaballerini.png` }}
        />
      </View>



      <View style={styles.like}>
        <TouchableOpacity onPress={() => setLikeState(!Liked)}>
          {Liked ? (
            <Ionicons name="ios-heart" size={24} color="black" />
          ) : (
            <Ionicons name="ios-heart" size={24} color="red" />
          )}
        </TouchableOpacity>
      </View>

    </View>

  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}