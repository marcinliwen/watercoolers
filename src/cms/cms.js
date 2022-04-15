import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import TradeFairPagePreview from './preview-templates/TradeFairPagePreview'
import VenueAccommodationPreview from './preview-templates/VenueAccommodationPreview'
import EventProgrammePreview from './preview-templates/EventProgrammePreview'
import AquaAwardsPreview from './preview-templates/AquaAwardsPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('trade-fair', TradeFairPagePreview)
CMS.registerPreviewTemplate('venue-and-accommodation', VenueAccommodationPreview)
CMS.registerPreviewTemplate('event-programme-page', EventProgrammePreview)
CMS.registerPreviewTemplate('aqua-awards-page', AquaAwardsPreview)
