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
  }
});

export const homes = StyleSheet.create({
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

export const hamburger = StyleSheet.create({
  hamburgerContainer: {
    top: 40,
    left: 20,
    zIndex: 10,
  },

  hamburger: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
  },

  hamburgerLine: {
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
  },

  menu: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#fff',
    padding: 100,
    borderRadius: 5,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  menuItem: {
    padding: 10,
    fontSize: 20,
    color: '#000',
  },

});