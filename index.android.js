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

    //setState( object oldState,function callback) TODO 第二个为可选参数，第一个参数传入的是未进行修改的旧值，callback的调用是在完成了UI的渲染后才会调用


    // TODO 定义状态机变量，并进行初始化：该函数会被自动调用；【界面编写最好尽量减少状态变量的声明与使用{并非不允许}】
    getInitialState: function(){
        return {
            inputedNum:'',
            inputedPW:'',
        };
    },
    //定义更新变量函数
    updataNum: function(newText){
        // TODO 状态变量不可直接使用赋值语句，必须使用setState函数进行赋值
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
            // TODO 会形成状态变更的组件在回调函数中调用更新状态变量的函数
            // TODO render 函数中会保证该状态变量变更时数据与显示的同步
            <TextInput style = {styles.numberInputStyle}
                placeholder = {'请输入手机号'}
                onChangeText = { (newText) => this.updataNum(newText)}/>
            <Text style = {styles.textPromptStyle}>
                您输入的手机号:{this.state.inputedNum}
            </Text
            <TextInput style = {styles.passwordInputStyle}
                placeholder={'请输入密码'}
                password = {true}

                // TODO  http://blog.csdn.net/u014484863/article/details/51732074  secureTextEntry 	设置是否为密码安全输入框
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
// TODO 颜色使用是#RRGGBBAA的形式，与原生项目中稍有不同
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
        backgroundColor:'gray',// TODO 背景颜色
        color:'white',// TODO 文字颜色
        textAlign:'center',// TODO 文字对齐效果
        fontSize:40
    }
});

AppRegistry.registerComponent('Project21', () => Project21);
