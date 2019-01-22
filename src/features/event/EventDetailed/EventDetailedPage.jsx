import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedSidebar from './EventDetailedSidebar';
import EventDetailedInfo from './EventDetailedInfo';

const mapState = (state, ownProps) => {
 const eventId= ownProps.match.params.id;

 let event = {};

 if (eventId && state.events.length > 0) {
   event = state.events.find(event => event.id === eventId);
 }

 return {
   event
 }
}

const EventDetailedPage = ({event}) => {
  return (
   <Grid>
     <Grid.Column width={10}>
      <EventDetailedHeader event={event}/>
      <EventDetailedInfo event={event}/>
      <EventDetailedChat />
     </Grid.Column>

     <Grid.Column width={6}>
      <EventDetailedSidebar attendees={event.attendees} />
    </Grid.Column>
   </Grid>
  )
}

export default connect(mapState)(EventDetailedPage);
