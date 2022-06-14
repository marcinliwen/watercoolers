import React from 'react'
import PropTypes from 'prop-types'
import { EventProgrammeTemplate } from '../../templates/event-programme-page'

const  EventProgrammePreview = ({entry}) => {
    const data = entry.getIn(['data']).toJS()
  
    //console.log(data)
    if (data) {
      return (
        < EventProgrammeTemplate
            title={data.title}
            event={data.event}
            eventList={data.eventList}
            conference={data.conference}
            workshops={data.workshops}
        />
      )
    } else {
      return <div>Loading...</div>
    }
  }
  
   EventProgrammePreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
  }
  
  export default  EventProgrammePreview