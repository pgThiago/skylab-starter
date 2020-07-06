import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    
    list:{
        padding: 20
    },

    productContainer:{
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },

    productDescription:{
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },

    productButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#7159c1',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    productButtonText:{
        fontSize: 16,
        color: '#7159c1',
        fontWeight: 'bold'
    }

});

export default styles;