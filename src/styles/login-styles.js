import { StyleSheet } from 'react-native';
import { COLOR_NAVIGATION_BLUE, COLOR_NAVIGATION_GRAY } from '../assets/colors/colors';
import { FONT_AVENIR_BOOK } from '../assets/fonts/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '10%'
      },
    
      registrationButton: {
        backgroundColor: COLOR_NAVIGATION_BLUE,
        width: 320,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
    
      loginButton: {
        backgroundColor: COLOR_NAVIGATION_BLUE,
        width: 320,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 10,
      },
    
      buttonTitle: {
        fontFamily: FONT_AVENIR_BOOK,
        fontSize: 18,
        color: 'white',
      },

      containerInputEmail: {
        height: 250,
        position: 'relative',
        top: 350,
      },

      containerInputPassword: {
        height: 250,
        position: 'relative',
        top: 150,
      },

      errorMessage: {
        fontFamily: FONT_AVENIR_BOOK,
        color: 'red',
        fontSize: 14,
        position: 'relative',
        bottom: '11%'
      },
    
      textInputStyle: {
        borderBottomColor: COLOR_NAVIGATION_GRAY, 
        fontFamily: FONT_AVENIR_BOOK,
        borderBottomWidth: 2,
        width: 320,
        marginTop: 5,
      },
    
      titleInputStyle: {
        fontSize: 13,
        fontFamily: FONT_AVENIR_BOOK,
        color: COLOR_NAVIGATION_BLUE,
        marginTop: 5,
      },

      keyboardContainer: {
        flex: 1,
      }
});
