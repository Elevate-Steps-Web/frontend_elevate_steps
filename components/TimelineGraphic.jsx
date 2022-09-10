import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function TimelineGraphic({ timeline }) {
  const tcStyle = {
    color: '#23CE6B',
    fontFamily: 'Delius Swash Caps, cursive',
    fontSize: '1.3rem',
  };
  const tocStyle = {
    color: '#023796',
    fontFamily: 'Avenir Next Cyrl, sans-serif',
    fontSize: '1.3rem',
  };

  // const desktopTimeline = {
  //   transform: 'rotate(-90deg)',
  // };
  // const desktopTimelineContentContainer = {
  //   textAlign: 'left',
  // };
  // const desktopTimelineContent = {
  //   display: 'inline-block',
  //   transform: 'rotate(90deg)',
  //   textAlign: 'center',
  //   maxWidth: 120,
  //   height: 50,
  // };
  // const desktopTimelineConnector = {
  //   height: 100,
  // };

  return (
    <Timeline position="alternate">
      {timeline.map((ms, index) => (
        <TimelineItem key={`msg-${ms.position}`}>
          <TimelineOppositeContent sx={tocStyle}>
            <a href={`#ms-${ms.title}`}>{ms.title}</a>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#23CE6B' }} />
            {index !== timeline.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={tcStyle}>
            <p>{ms.month.substring(0, 3)}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
