/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
// TODO 暂时不清楚为什么这里不能够使用这种写法（现实中，这么写会导致无法显示，并出现异常）
/*let React = require('react-native');
let {
    AppRegistry,StyleSheet,Text,View,TextInput
} = React;*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

let WaitingLeaf = React.createClass({
    render : function() {
        return (
        <View style={styles.container}>
            <Text style = {styles.textPromptStyle}>
                注册使用的手机号:{this.props.phoneNumber}
            </Text>
            <Text style = {styles.textPromptStyle}>
                注册使用密码:{this.props.userPW}
            </Text>
            <Text style = {styles.bigTextPrompt}
                onPress={this.goBack} >
                返回
            </Text>
        </View>
        );
    },
    goBack:function(){
        this.props.navigator.push({
            name:'register'
        });
    }
});
// TODO 颜色使用是#RRGGBBAA的形式，与原生项目中稍有不同
let styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#f5fcff'
    },
    textPromptStyle:{
        fontSize:20
    },
    bigTextPrompt:{
        width:300,
        backgroundColor:'gray',// TODO 背景颜色
        color:'white',// TODO 文字颜色
        textAlign:'center',// TODO 文字对齐效果
        fontSize:60
    }
});

//AppRegistry.registerComponent('Project21', () => Project21);//TODO 提供给外部调用的组件写法如下
module.exports = WaitingLeaf;
