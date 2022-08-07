import React from 'react'
import PropTypes from 'prop-types'
import { useProduct } from '../../hooks/useProduct'
import { useCounter } from '../../hooks/useCounter'
import { usePrice } from '../../hooks/usePrice'

export const ProductsContext = React.createContext({})

export const ProductsProvider = ({ children }) => {
  const { data: products, loading, error, selectedProduct, request } = useProduct('?query=computer&page=1')
  const { state: cartCounter, increment: cartCounterIncrement } = useCounter(0)
  const { totalPrice, setTotalPrice } = usePrice(0.00)

  return (
    <ProductsContext.Provider value={{
      data: products || [],
      loading,
      error,
      request,
      selectedProduct,
      cartCounter,
      cartCounterIncrement,
      totalPrice,
      setTotalPrice
    }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
