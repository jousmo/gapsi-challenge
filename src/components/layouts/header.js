import { Image, Layout as LayoutAntd, Space, Typography } from 'antd'
import React from 'react'

const LayoutHeader = () => (
  <LayoutAntd.Header className='Layout__Header'>
    <Space>
      <Typography.Link href='http://localhost:3000' rel='noreferrer'>
        <Image
          preview={false}
          width={120}
          src='http://grupoasesores.com.mx/img/logo.png'
        />
      </Typography.Link>
      <Typography.Title level={1}>
        e-Commerce Gapsi
      </Typography.Title>
    </Space>
  </LayoutAntd.Header>
)

export default LayoutHeader
