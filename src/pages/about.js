import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/profile'

const pic = css`
  width: 200px;
  border-radius: 50px;
`
const proimg = css`
  border-radius: 50px;
`
const About = ({ props }) => (
  <Layout>
    <SEO title="About" />
    <h1>Hi I'm Andrew & I am a addicted to development</h1>
    <div css={pic}>
      <Profile css={proimg} />
    </div>
  </Layout>
)

export default About
