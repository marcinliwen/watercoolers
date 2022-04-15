import React from 'react'
import PropTypes from 'prop-types'
import { AquaAwardsTemplate } from '../../templates/aqua-awards-page'

const AquaAwardsPreview = ({entry}) => {
    const data = entry.getIn(['data']).toJS()
  
    console.log(data)
    if (data) {
      return (
        < AquaAwardsTemplate
        title={data.title} 
        info={data.info}
      />
      )
    } else {
      return <div>Loading...</div>
    }
  }
  
  AquaAwardsPreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
  }
  
  export default AquaAwardsPreview