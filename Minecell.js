/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

export default class MyCell extends Component{
    render() {
        return (
            <View style={{flex:1}}>
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={require('./images/我的信息.png')} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>我的数据</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'gray'}}>89</Text>
                            <Image source={require('./images/箭头.png')} style={{width:8, height:13, marginRight:8, marginLeft:5}} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={require('./images/视频.png')} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>通话设置</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./images/箭头.png')} style={{width:8, height:13, marginRight:8, marginLeft:5}} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={require('./images/足迹.png')} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>日迹</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./images/箭头.png')} style={{width:8, height:13, marginRight:8, marginLeft:5}} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={require('./images/关于我们.png')} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>关于我们</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./images/箭头.png')} style={{width:8, height:13, marginRight:8, marginLeft:5}} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={require('./images/a.png')} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>设置</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./images/箭头.png')} style={{width:8, height:13, marginRight:8, marginLeft:5}} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:Platform.OS == 'ios' ? 40 : 55,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
    },

    rightViewStyle:{

    },

    leftImgStyle:{ // 左边的图片
        width:24,
        height:24,
        marginRight:6,
        // 圆角
        borderRadius:12
    },

    leftTitleStyle:{
        fontSize:16
    }
});
