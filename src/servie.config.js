const MOCKURL = 'http://www.yunyi.com';
const SERVERURL = 'http://localhost:3000/';

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getProductsById: SERVERURL + 'product/getProductsById',
    addCartByUserId: SERVERURL + 'cart/addCart',
    getCartByUserId: SERVERURL + 'cart/getCart'
}

export default URL;