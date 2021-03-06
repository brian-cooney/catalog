import { colors, sizes } from 'utils/design'

import { Icon } from 'components/Icon'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  id: 'wrapper',
})``

export const Content = styled.div.attrs({
  id: 'content',
})`
  width: calc(100% - ${sizes.sidebar.width});
  max-width: calc(${sizes.content.maxWidth} + ${sizes.content.padding} * 2);
  min-height: 100vh;
  padding: 96px ${sizes.content.padding} 120px ${sizes.content.padding};
  transform: translate3d(${sizes.sidebar.width}, 0px, 0px);

  ${media.medium`
		padding: 96px ${sizes.content.padding} 120px 96px;
	`} ${media.small`
		width: 100%;
		padding: 100px ${sizes.content.smallPadding} 60px;
		transform: none;

		padding: ${props =>
      props.flush ? `0` : `100px ${sizes.content.smallPadding} 60px`};
	`} ${props =>
      props.flush &&
      `
		max-width: 100%;
		padding: 0;
	`};
`
