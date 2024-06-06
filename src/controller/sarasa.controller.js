import ProductServices from '../service/sarasa.service.js'

class ProductController{
    contructor(){
        this.service = new ProductServices;
    }
}

export default ProductController