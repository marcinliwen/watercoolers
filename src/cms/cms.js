import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import TradeFairPagePreview from './preview-templates/TradeFairPagePreview'
import VenueAccommodationPreview from './preview-templates/VenueAccommodationPreview'
import EventProgrammePreview from './preview-templates/EventProgrammePreview'
import AquaAwardsPreview from './preview-templates/AquaAwardsPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('trade-fair', TradeFairPagePreview)
CMS.registerPreviewTemplate('venue-and-accommodation', VenueAccommodationPreview)
CMS.registerPreviewTemplate('event-programme-page', EventProgrammePreview)
CMS.registerPreviewTemplate('aqua-awards-page', AquaAwardsPreview)
