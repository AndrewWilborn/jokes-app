import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { styles } from './src/styles';
import { useEffect, useState } from 'react';

export default function App() {

  const [jokes, setJokes] = useState()
  const [displayJoke, setDisplayJoke] = useState()
  const [whichJoke, setWhichJoke] = useState(0)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    fetch('https://api.sampleapis.com/jokes/goodJokes')
      .then(response => response.json())
      .then(data => {
        data = randomizeArray(data)
        setJokes(data)
      })
      .catch(alert)
  }, [setJokes])

  useEffect(() => {
    jokes && setDisplayJoke(jokes[whichJoke])
  }, [jokes, whichJoke])

  const randomizeArray = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.jokeText}>{displayJoke && displayJoke.setup}</Text>
      <View style={hidden? styles.hidden : styles.show}>
        {hidden 
          ?<Text onPress={() => setHidden(false)} style={styles.touchToReveal}>Touch to Reveal</Text>
          :<Text style={styles.punchline}>{displayJoke && displayJoke.punchline}</Text>
        }
      </View>
      <Pressable style={styles.bigButton} onPress={() => {setWhichJoke(whichJoke+1); setHidden(true)}}>
        <Text style={styles.buttonText}>Get Jokes</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
