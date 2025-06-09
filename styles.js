import { StyleSheet } from "react-native";

export const colors = {
  "red": '#FF0000',
  "black": '#000000',
  "dark_blue": '#262A62',
  "lime_green": '#AECA51',
  "light_blue": '#4462AD',
  "light_grey": '#656666',
  "dark_grey": '#383939',
  "text_dark": '#263238',
  "weather_text_color": 'white',
  "header_cell_text": 'white',
  "op_lime_green": "#b6cf62",
};


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
    fontFamily: 'myriad-pro ,sans-serif',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 10,
  },
});


export const drawers = StyleSheet.create({
  HamburgerLines: {
    direction: 'rtl',
  },
});