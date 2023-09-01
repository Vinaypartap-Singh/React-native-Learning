import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Posts() {

  const [posts, setPosts] = useState([]);

  const getData = async () => {
    // const api = await fetch("https://jsonplaceholder.typicode.com/posts");
    const api = await fetch("http://localhost:3000/users");
    const data = await api.json();
    setPosts(data);
  }

  useEffect(()=> {
    getData();
  }, [])


  return (
    // FLatlist with Api Data
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 20}}>
      <Text style={{fontSize: 30}}>Posts</Text>
      {posts.length ? <FlatList data={posts} renderItem={({item}) => <View style={{margin: 10, borderWidth: 1, padding: 10, borderColor: "lightgrey", borderRadius: 5}}>
        <Text style={{fontWeight: "bold", marginBottom: 20}}>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
      </View>} />: <ActivityIndicator size={"large"} color={"#ae0000"} />}
    </View>
  )
}

const styles = StyleSheet.create({})