/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 导入系统类
import { get } from "Dimensions";
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

var screenW = get('window').width;

export default class HeaderView extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                <Image source={require('./images/头像.png')} style={styles.leftIconStyle} />
                <View style={styles.conterViewStyle}>
                    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>智能医疗</Text>
                    <Image source={require('./images/健康.png')} style={{width:17,height:17}} />
                </View>
                <Image source={require('./images/箭头.png')} style={{width:12,height:25,marginRight:8}} />
                </View>
                <View style={styles.bottomViewStyle}>
                    <TouchableOpacity>
                        <View style={styles.bottomInnerViewStyle}>
                            <Text style={{color:'white',fontSize:17}}>今天数据</Text>
                            <Text style={{color:'white',fontSize:17}}>80</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.bottomInnerViewStyle}>
                            <Text style={{color:'white',fontSize:18}}>昨日数据</Text>
                            <Text style={{color:'white',fontSize:18}}>78</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.bottomInnerViewStyle}>
                            <Text style={{color:'white',fontSize:18}}>一周数据</Text>
                            <Text style={{color:'white',fontSize:18}}>79</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:230,
        backgroundColor:'#515151'
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:60,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
    },
    conterViewStyle:{
        flexDirection:'row',
        width:screenW * 0.6,
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    bottomInnerViewStyle:{
        width:(screenW/3)+1,
        height:55,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    }
});