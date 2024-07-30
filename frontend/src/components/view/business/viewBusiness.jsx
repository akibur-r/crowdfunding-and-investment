import './viewBusiness.scss'
import Menu from '../commonComponents/menu'
import Test from './test'
import Donor from './teamMember'
import BusinessFinance from './businessFinance'
import BusinessOverview from './businessOverview'
import FAQ from '../commonComponents/faq'
import BusinessHighlights from './businessHighlights'
import BusinessDescription from './businessDescription'

function ViewBusiness(){
  return (
    <div className='viewBusiness'>
        {/* Overview section is in overview.jsx file */}
        <div className="viewBusiness__overview">
          <BusinessOverview
            thumbnailSrc={"https://picsum.photos/id/1/200/300"}
            category={"Tech"} 
            title={"Abahani Sportswear Ltd."}
            tagline={"Are kisu ekta dilam ja"}
            ownerProfilePicSrc={"./images/shafayet.png"}
            ownerName={"Shafayet Nur"}
            ownerBusinesss={5}
            ownerAddress={"Chittagong, Bangladesh"}
            foundedAt={"11/12/2013"}
          />
        </div>

        {/* Finance section is in finance.jsx file */}
        <div className="viewBusiness__finance">
          <BusinessFinance
            postedAt={"30"}
            totalStocks={1000}
            investors={2}
            soldStocks={510}
            stockPrice={0.10}

          />
        </div>

        {/* Details section is in this file */} {/* Yet to configure this section */}
        <div className="viewBusiness__description">
              <BusinessHighlights/>
              <Menu isFor={"business"}/>
              <BusinessDescription/>
              <FAQ/> 
        </div>
    </div>
  )
}

export default ViewBusiness