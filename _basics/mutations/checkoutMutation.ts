import { gql } from '@apollo/client';

export const CheckoutMutation = gql`
  mutation eventsCheckoutPlaceOrder($data: EventCheckoutOrderData) {
    eventsCheckoutPlaceOrder(data: $data) {
      status
      comment
      message
      subId
      voucher {
        type
        code
        comment
        programTitle
        value
        description
        name
        customerId
        fkn
        contractType
        email
        dob
        iban
        bic
      }
      positions {
        quantity
        tickets {
          status
          price
          priceReadable
          priceCategory {
            active
            price
            priceReadable
            name
          }
          attendee {
            title
            firstName
            lastName
            street
            streetNumber
            zipCode
            city
            birthday
            phone
            email
            travelinsurance
            assistant
            vaccinationStatus
          }
          quota {
            quantity
            active
            groups {
              name
              constraints
            }
            priceCategoryTypes {
              name
            }
          }
        }
      }
    }
  }
`;

export default CheckoutMutation;
