import Vue from 'vue'
import App from '@/component/HomePage'
import {request1} from '@/js/dolphinweex'

function getOptionConfig() {
    console.log('options: hello,weex!')
}

getOptionConfig()
request1()


new Vue(Vue.util.extend({el:'#root'},App))