import React, { useContext } from 'react'
import { Card as CardAntd, Typography, Space, Badge } from 'antd'
import numeral from 'numeral'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { ProductsContext } from '../../contexts/products'

const CheckOut = () => {
  const { cartCounter, totalPrice } = useContext(ProductsContext)

  return (
    <section className='ShoppingCart'>
      <CardAntd className='ShoppingCart__Content' hoverable>
        <Space className='ShoppingCart__Content__Space' direction='vertical'>
          <Badge count={cartCounter} className='ShoppingCart__Badge'>
            <ShoppingCartOutlined />
          </Badge>
          <Typography.Title level={3}>
            Arrastre aquí tus productos
          </Typography.Title>
          <Typography.Text type='danger'>
            {numeral(totalPrice).format('$0,0')}
          </Typography.Text>
        </Space>
      </CardAntd>
    </section>
  )
}

export default CheckOut
