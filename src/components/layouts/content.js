import React from 'react'
import { Layout as LayoutAntd } from 'antd'
import PropTypes from 'prop-types'

const LayoutContent = ({ children }) => (
  <LayoutAntd.Content className='Layout__Content'>
    <section className='Layout__Content__List'>
      {children}
    </section>
  </LayoutAntd.Content>
)

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutContent
