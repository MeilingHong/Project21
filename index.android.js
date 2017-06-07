/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
//暂时不清楚为什么这里不能够使用这种写法（现实中，这么写会导致无法显示，并出现异常）
/*let React = require('react-native');
let {
    AppRegistry,StyleSheet,Text,View,TextInput
} = React;*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;

let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;

let Project21 = React.createClass({
    getInitialState: function(){
        return {
            inputedNum:'',
            inputedPW:'',
        };
    },
    updataNum: function(newText){
        this.setState((state) => {
            return {
                inputedNum:newText,
            };
        });
    },
    updataPW: function(newText){
            this.setState(() => {
                return {
                    inputedPW:newText,
                };
            });
        },
    render : function() {
        return (
        <View style={styles.container}>
            <TextInput style = {styles.numberInputStyle}
                placeholder = {'请输入手机号'}
                onChangeText = { (newText) => this.updataNum(newText)}/>
            <Text style = {styles.textPromptStyle}>
                您输入的手机号:{this.state.inputedNum}
            </Text>
            <TextInput style = {styles.passwordInputStyle}
                placeholder={'请输入密码'}
                password = {true}

                // http://blog.csdn.net/u014484863/article/details/51732074  secureTextEntry 	设置是否为密码安全输入框
                secureTextEntry = {true}


                onChangeText = { (newText) => this.updataPW(newText)}
                />
            <Text style = {styles.bigTextPrompt}>
                确定
            </Text>
        </View>
        );
    }
});
//颜色使用是#RRGGBBAA的形式，与原生项目中稍有不同
let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#33b5e5ff'
    },
    numberInputStyle:{
        top:20,
        left:leftStartPoint,
        width: componentWidth,
        backgroundColor:'gray',
        color:'white',
        fontSize: 18
    },
    textPromptStyle:{
        top: 30,
        left:leftStartPoint,
        width:componentWidth,
        fontSize:20
    },
    passwordInputStyle:{
        top:50,
        left:leftStartPoint,
        width:componentWidth,
        backgroundColor:'gray',
        color:'white',
        textAlign:'left',
        fontSize: 20
    },
    bigTextPrompt:{
        top:70,
        left:leftStartPoint,
        width:componentWidth,
        backgroundColor:'gray',//背景颜色
        color:'white',//文字颜色
        textAlign:'center',//文字对齐效果
        fontSize:40
    }
});

AppRegistry.registerComponent('Project21', () => Project21);
