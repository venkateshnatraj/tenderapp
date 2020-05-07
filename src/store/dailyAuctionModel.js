
import { checkAtLeastLength, checkIsfilled  } from './inputValidator'

const dailyAuctionModel = [{
  name: 'tenderNumber',
  validation :  [{
        id: 'tenderNumber-required',
        isValidFun: checkIsfilled,
        alert: 'Tender Number is required'
    },
    {
      id: 'tenderNumber-length',
      isValidFun: expression => checkAtLeastLength(expression, 3),
      alert: 'Tender Number is too short'
  } 
  ]
 },
 {
    name: 'sessionTime',
    validation :  [{
          id: 'sessionTime-length',
          isValidFun: expression => checkAtLeastLength(expression, 3),
          //isValidFun: checkIsfilled,
          alert: 'SessionTime is required'
      } ]
 }
]




export default dailyAuctionModel