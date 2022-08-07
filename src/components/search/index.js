import React, { useContext } from 'react'
import { Input } from 'antd'
import { ProductsContext } from '../../contexts/products'

const Search = () => {
  const { request } = useContext(ProductsContext)

  const onSearch = value => {
    value && request(`?query=${value}&page=1`)
  }

  return (
    <section className='Search'>
      <Input.Search
        placeholder='search product'
        allowClear
        enterButton='Search'
        size='large'
        onSearch={onSearch}
      />
    </section>
  )
}

export default Search
