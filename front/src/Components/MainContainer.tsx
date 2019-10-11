import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ProductsContainer from './ProductsContainer'
import FormContainer from './FormContainer'
import update from 'react-addons-update';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // productsという配列を持つ
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
    .then((results) => {
      // products/indexアクションにapi通信を行い、返り値をproductsという配列に格納
      this.setState({products: results.data})
    })
    .catch((data) =>{ //catchはfailureな返り値を受け取る
      console.log(data)
    })
  }

  createProduct = (product) => {
    axios.post('http://localhost:3000/products',{product: product} )
    .then((response) => {
      // https://qiita.com/park-jh/items/6166434f80bc186f8c77
      // this.state.productsにrails側のcreateアクションのresponseを追加したものをnewDataとする（要質問）
      const newData = update(this.state.products, {$push:[response.data]})
      this.setState({products: newData})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  deleateProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
    .then((response) => {
      // 削除対象のIndex番号を取得, Arrayオブジェクトの関数であるfindIndex関数を用いている 
      // findIndexメソッドは配列内の要素が指定されたテスト関数を満たす場合に配列内のインデックスを返す。falseなら-1を返す
      // x => x.id === id　がテスト関数に当たり、findIndex関数の引数となっている。テスト関数を満たすもの = 要素のidが叩いたurlのidと一致した場合のインデックス番号を返している。
      const productIndex = this.state.products.findIndex(x => x.id === id)
      // this.state.productsから上で取得したインデックスから１つ分を取り除いたものをdeleteProductsという変数にする（要質問）
      const deletedProducts = update(this.state.products, {$splice: [[productIndex, 1]]})
      this.setState({products: deletedProducts})
      console.log('set')
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  updateProduct = (id, product) => {
    axios.put(`http://localhost:3000/products/${id}`,{product: product})
    .then((response) => {
      const productIndex = this.state.products.findIndex(x => x.id === id)
      // productIndex(対象のインデックス番号)の位置にresponse.dataをsetしている？（文法がよくわからない）
      const updatedProducts = update(this.state.products, {[productIndex]: {$set: response.data}})
      // productsにupdateProductsをsetStateする。
      this.setState({products: updatedProducts})
    })
    .catch((data) =>{
      console.log(data)
    })
  }


  render() {
    return (
      <div className='app-main'>
        <FormContainer  hendleAdd={this.hendleAdd} createProduct={this.createProduct}/>
        <ProductsContainer productData={this.state.products} deleateProduct={this.deleateProduct} updateProduct={this.updateProduct}/>
      </div>
    );
  }
}

export default MainContainer
