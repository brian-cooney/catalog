import { Column, Row } from 'components/Grid'
import Img from 'gatsby-image'
import { Link } from 'components/Components'
import React from 'react'
import styled from 'styled-components'
import { borderRadius } from 'styled-system'

const StyledImage = styled(Img)`
  border-radius: 4px;
  max-width: 100%;
  position: initial !important;
  margin-bottom: 0;

  img {
    border-radius: 4px;
    margin-bottom: 0;
    ${borderRadius}
  }

  ${borderRadius}
`

export const ImageDiv = StyledImage.withComponent('div')
export const ImageLink = StyledImage.withComponent(Link)

const RegularImage = StyledImage.withComponent('img')

class Image extends React.Component {
  render() {
    if (this.props.sizes) {
      return <StyledImage {...this.props} outerWrapperClassName="gatsby-img" />
    } else if (this.props.src && this.props.to) {
      return <ImageLinkContainer {...this.props} />
    } else if (this.props.src && this.props.cover) {
      return <ImageContainer {...this.props} />
    } else if (this.props.src) {
      return <RegularImage {...this.props} />
    } else {
      return <StyledImage {...this.props} />
    }
  }
}

export default Image

const ShowcaseImageStyles = src => {
  return `
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    padding-bottom: 100%;
  `
}

const ImageContainer = styled(ImageDiv)`
  ${props => ShowcaseImageStyles(props.src)};
`

const ImageLinkContainer = styled(ImageLink)`
  display: block;
  ${props => ShowcaseImageStyles(props.src)} ${props =>
      props.stretch && `height: 100%;`};
`

export const ImageShowcase = props => {
  const first = props.children[0]
  const second = props.children[1]
  const third = props.children[2]

  const Container = first.props.to ? ImageLinkContainer : ImageContainer

  const primary = (
    <Column width={[2 / 3]}>
      {first.props.src && (
        <Container to={first.props.to} src={first.props.src} />
      )}
    </Column>
  )

  const secondary = (
    <Column width={[1 / 3]}>
      <Row>
        <Column width={[1]}>
          {second.props.src && (
            <Container to={second.props.to} src={second.props.src} />
          )}
        </Column>
      </Row>

      <Row mt={'-1px'}>
        <Column width={[1]}>
          {third.props.src && (
            <Container to={third.props.to} src={third.props.src} />
          )}
        </Column>
      </Row>
    </Column>
  )

  return (
    <Row {...props}>
      {!props.right && primary}

      {secondary}

      {props.right && primary}
    </Row>
  )
}
