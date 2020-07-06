import React from 'react'
import { WebView } from 'react-native-webview';

const Product = ({ route }) => {
    return <WebView source={{ uri: route.params.product.url }}></WebView>
}   

export default Product
