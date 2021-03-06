import { colors, sizes } from 'utils/design'

import Markdown from 'components/Markdown'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'

const TimelineContainer = styled.section`
  position: relative;
  margin: 56px 0;

  ul {
    margin: 0;

    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      width: ${sizes.timeline.lineWidth};
      background: ${colors.primary.gray.dark};
      left: 50%;

      ${media.small`left: calc(${sizes.timeline.pointWidth} / 2);`};
    }
  }

  ul li {
    list-style-type: none;
    position: relative;
  }
`

const TimelineListItem = styled.li`
  margin-bottom: 32px;
  ${media.small`margin-bottom: 48px;`}
  font-family: ${props => props.theme.fontFamily.body};
  line-height: 1.6;

  &:after {
    content: '';
    position: absolute;
    left: calc(50% + ${sizes.timeline.lineWidth} / 2);
    top: 0;
    transform: translateX(-50%);
    width: ${sizes.timeline.pointWidth};
    height: ${sizes.timeline.pointWidth};
    border-radius: 50%;
    background: white;
    border: ${sizes.timeline.lineWidth} solid ${colors.timeline.point};
    box-shadow: 0 0 0 5px white;
    z-index: 1;

    ${media.small`
			left: calc(${sizes.timeline.pointWidth} / 2);
			transform: translateX(-42%);
		`};
  }

  > div {
    position: relative;
    width: calc(50% - ${sizes.timeline.linePadding});
    top: -5px;

    ${media.small`width: calc(100% - ${sizes.timeline.linePadding});`};
  }

  &:nth-child(odd) > div {
    left: calc(50% + ${sizes.timeline.linePadding});

    ${media.small`left: ${sizes.timeline.linePadding}`};
  }

  &:nth-child(even) > div {
    left: 0;
    text-align: right;

    ${media.small`
			left: ${sizes.timeline.linePadding};
			text-align: left;
		`};
  }

  .header {
    margin-bottom: 8px;
  }

  .title {
    display: inline;
    box-shadow: inset 0 -12px 0 0 ${props => props.theme.colors.highlight};
  }

  span.type {
    padding-right: 8px;
  }

  span.date {
    font-weight: normal;
    color: ${colors.text.muted};
  }
`

class TimelineItem extends React.Component {
  render() {
    return (
      <TimelineListItem>
        <div>
          <h4 className="header">
            <span className="type">{this.props.type}</span>
            <span className="date">{this.props.dateRange}</span>
          </h4>

          <h2 className="title">{this.props.title}</h2>

          <Markdown mt={3}>{this.props.children}</Markdown>
        </div>
      </TimelineListItem>
    )
  }
}

class Timeline extends React.Component {
  render() {
    return (
      <TimelineContainer>
        <ul>{this.props.children}</ul>
      </TimelineContainer>
    )
  }
}

export { Timeline, TimelineItem }
