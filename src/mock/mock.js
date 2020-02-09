import Mock from 'mockjs'
//import data from './data.json' 

//Mock.mock('https://www.yunyi.com/getVarietyItem',{data: data.list});

import url from '@/servie.config.js'

var Random = Mock.Random
let ProductData = () => {
    let productList = [];
    for(let i = 0;i <100 ;i++){
        var productItem = {
            name: Random.ctitle(5,20),
            img: Random.image('125x125'),
            price:Random.integer( 1000, 10000 ),
            //company:Random.word 
        }
        productList.push(productItem)
    }
    return productList;
}
Mock.mock(url.getVarietyItem,ProductData)