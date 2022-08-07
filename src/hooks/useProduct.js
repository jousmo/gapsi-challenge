import { useEffect, useState } from 'react'
import { get } from 'lodash'

export const useProduct = url => {
  const URI = process.env.REACT_APP_URI
  const [state, setState] = useState({ data: null, loading: true, error: null })

  const request = param => {
    setState({ data: null, loading: true, error: null })
    fetch(`${URI}${param}`, {
      method: 'GET',
      headers: {
        'X-IBM-Client-Id': process.env.REACT_APP_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        const [first] = get(data, 'item.props.pageProps.initialData.searchResult.itemStacks', [])
        const { items: products } = !!first && first
        setState({ data: products, loading: false, error: null })
      })
      .catch(() => setState({
        data: null,
        loading: false,
        error: 'The information could not be loaded'
      }))
  }

  const selectedProduct = id => {
    const filteredProducts = state?.data?.filter(product => product?.id !== id)
    setState({
      ...state,
      data: filteredProducts
    })
  }

  useEffect(() => {
    request(url)
  }, [url])

  return {
    ...state,
    setState,
    selectedProduct,
    request
  }
}
