import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  board: {
    marginBottom: 20,
  },
  boardRow: {
    flexDirection: 'row',
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  squareText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  gameInfo: {
    marginTop: 20,
    width: '100%',
  },
  moveButton: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    borderRadius: 5,
  },
  moveText: {
    fontSize: 16,
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const homes = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 10,
  },
});