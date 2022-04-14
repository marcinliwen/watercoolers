import React from 'react'
import PropTypes from 'prop-types'
import { VenueAccommodationTemplate } from '../../templates/venue-and-accommodation'

const VenueAccommodationPreview = ({entry}) => {
    const data = entry.getIn(['data']).toJS()
  
    console.log(data)
    if (data) {
      return (
        < VenueAccommodationTemplate
        title={data.title}
        venue={data.venue}
        gallery={data.gallery}
      />
      )
    } else {
      return <div>Loading...</div>
    }
  }
  
  VenueAccommodationPreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
  }
  
  export default VenueAccommodationPreview