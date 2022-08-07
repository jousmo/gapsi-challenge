import React from 'react'
import { Layout, CardList, CheckOut, Search } from '../components'
import { ProductsProvider } from '../contexts/products'

const Home = () => (
  <Layout>
    <ProductsProvider>
      <CheckOut />
      <Search />
      <CardList />
    </ProductsProvider>
  </Layout>
)

export default Home
