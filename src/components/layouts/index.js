import React from 'react'
import { Layout as LayoutAntd } from 'antd'
import PropTypes from 'prop-types'
import LayoutHeader from './header'
import LayoutContent from './content'
import LayoutFooter from './footer'

const Layout = ({ children }) => (
  <LayoutAntd className='Layout'>
    <LayoutHeader />
    <LayoutContent>
      {children}
    </LayoutContent>
    <LayoutFooter />
  </LayoutAntd>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
