import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001011',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 80,
  },
  text: {
    fontSize: 24,
    color: 'whitesmoke',
  },
  jokeText: {
    color: 'whitesmoke',
    textAlign: 'center',
    width: '90%',
    fontSize: 48,
  },
  touchToReveal: {
    textAlign: 'center',
    color: '#001011',
    fontSize: 24,
  },
  punchline: {
    textAlign: 'center',
    color: '#64E9EE',
    fontSize: 32,
  },
  bigButton: {
    backgroundColor: '#18686F',
    padding: 24,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  hidden: {
    backgroundColor: '#64E9EE',
    width: '100%',
    height: 88,
    padding: 24,
  },
  show: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 88,
    padding: 16,
  },
});