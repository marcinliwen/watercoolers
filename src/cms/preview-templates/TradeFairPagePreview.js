import React from 'react'
import PropTypes from 'prop-types'
import { TradeFairTemplate } from '../../templates/trade-fair'

const TradeFairPagePreview = ({entry}) => {
    const data = entry.getIn(['data']).toJS()
  
    //console.log(data)
    if (data) {
      return (
        <TradeFairTemplate
        title={entry.getIn(['data', 'title'])}
        tradefair={data.tradefair}
        fees={data.fees}
      />
      )
    } else {
      return <div>Loading...</div>
    }
  }
  
  TradeFairPagePreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
  }
  
  export default TradeFairPagePreview
  
