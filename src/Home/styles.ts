import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    InstaCardHeader: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        
     
    },
    InstaCardImage1: {
        marginRight: 15,
        width: 40,
        height: 40,
        borderRadius: 20
    },
    InstaCardImage2: {
        width: '100%',
        height: 250
    },
    like:{ 
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    }

});
