import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
    width: 300,
    height: 95
  },
    input:{
      width: '90%',
      height: 42,
      backgroundColor: '#F4F3F3',
      marginBottom: 20,
      padding: 8,
      borderWidth: 5,
      borderColor: '#E0E0E0'
    },
    forgotContainer: {
      width: '90%',
      alignItems: 'flex-end'
    },
    forgotText:{
      color: '#399fff'
    },
    loginButton:{
      marginTop: '5%',
      backgroundColor: '#399fff',
      width: '90%',
      height: 42,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginText:{
      color: '#FFF',
      fontSize: 17
    },
    facebookContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '15%'
    },
    facebookText:{
      color: '#399fff',
      paddingLeft: 8,
      fontSize: 15
    },
    divisor:{
      marginTop: '10%',
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    divisorLine: {
      width: '45%',
      height: 2,
      backgroundColor: '#EFEDED',
      borderRadius: 5
    },
    signUpContainer:{
      flexDirection: 'row',
      marginTop: '10%'
    },
    signUpText:{
      color: '#C4c4c4',
      padding: 5, 
    },
    sigUpButton:{
      color: '#399fff',
      fontWeight: 'bold'
    },
  });
  
 