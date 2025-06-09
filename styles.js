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
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 10,
  },
});

export const tabs = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#121212',
    paddingBottom: 10,
    borderTopWidth: 0,
    elevation: 5
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});