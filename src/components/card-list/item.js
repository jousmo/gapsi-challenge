import React from 'react'
import DOMPurify from 'dompurify'
import { Card as CardAntd, Space, Typography, Image, Button } from 'antd'
import numeral from 'numeral'
import PropTypes from 'prop-types'

const CardItem = ({ item, onHandleAddProduct }) => {
  const split = item?.name?.split('"')
  const name = split[0].split(',')[0]

  const safeHtml = (
    <div dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(item?.description || split[1] || 'No description')
    }}
    />
  )

  return (
    <CardAntd
      className='Card'
      hoverable
      cover={
        <Image
          width={200}
          alt={item?.description}
          src={item?.image}
        />
      }
    >
      <Space direction='vertical'>
        <Typography.Title
          level={4} ellipsis={{
            rows: 2,
            tooltip: name
          }}
        >
          {name}
        </Typography.Title>
        <Typography.Text type='danger'>
          {numeral(item?.price).format('$0,0')}
        </Typography.Text>
        <Typography.Paragraph ellipsis={{
          rows: 2,
          tooltip: safeHtml
        }}
        >
          {safeHtml}
        </Typography.Paragraph>
        <Button type='dashed' onClick={() => onHandleAddProduct(item?.id, item?.price)}>Add Card</Button>
      </Space>
    </CardAntd>
  )
}

CardItem.propTypes = {
  item: PropTypes.object,
  onHandleAddProduct: PropTypes.func
}

export default CardItem
