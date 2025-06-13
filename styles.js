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

export const getBodyFont = () => {
  if (require('react-native').Platform.OS === 'ios') {
    return 'MyriadLight';
  }
  else return 'MyriadLight';
};

export const getTitleFont = () => {
  if (require('react-native').Platform.OS === 'ios') {
    return 'MyriadBold';
  }
  else return 'MyriadBold';
};

export const getHeaderFont = () => {
  if (require('react-native').Platform.OS === 'ios') {
    return 'MyriadSemiBold';
  }
  else return 'MyriadSemiBold';
};

export const getSemiBoldItalicFont = () => {
  if (require('react-native').Platform.OS === 'ios') {
    return 'LatoSemiBoldItalic';
  }
  else return 'LatoSemiBoldItalic';
};

export const values = {
  "font_body": getBodyFont(),
  "font_semibolditalic_body": getSemiBoldItalicFont(),
  "font_body_size": 15,
  "font_title": getTitleFont(),
  "font_header": getHeaderFont(),
  "font_title_size": 30,
  "font_desc_size": 12,
  "font_input_size": 16,
  "font_place_size": 20,
  "font_temp_size": 24,
  "font_tube_size": 22,
  'border_radius': 2,
  "tiny_icon_size": 22,
  "small_icon_size": 40,
  "large_icon_size": 110,
};

 export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  non_center_container: {
    flexGrow: 1,
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
  previewContainer: {
    flex: 1,
    minHeight: '40%',
    maxHeight: '60%',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
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

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#262A62',
  },
  button_text: {
    color: colors.header_cell_text,
    fontSize: 15,
    fontFamily: values.font_body,
    fontWeight: 'bold'
  },
});