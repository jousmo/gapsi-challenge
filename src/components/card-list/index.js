import React, { useContext } from 'react'
import { List } from 'antd'
import CardItem from './item'
import { ProductsContext } from '../../contexts/products'

const CardList = () => {
  const {
    data: products,
    loading,
    cartCounterIncrement,
    selectedProduct,
    setTotalPrice
  } = useContext(ProductsContext)

  const onHandleAddProduct = (id, price) => {
    cartCounterIncrement && cartCounterIncrement()
    setTotalPrice && setTotalPrice(price)
    selectedProduct && selectedProduct(id)
  }

  return (
    <List
      className='CardList'
      grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4 }}
      loading={loading}
      dataSource={products}
      renderItem={item => (
        <List.Item className='CardList__Item'>
          <CardItem
            item={item}
            onHandleAddProduct={onHandleAddProduct}
          />
        </List.Item>
      )}
    />
  )
}

export default CardList
