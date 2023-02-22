import { gql } from '@apollo/client';

export const SetIamUserMutation = gql`
  mutation setUser($data: JSONObject) {
    setIamUser(data: $data) {
      id
      email
      tenant
      verified
      dateOfBirth
      userName
      firstName
      lastName
      salutation
      street
      houseNumber
      zip
      city
    }
  }
`;

export default SetIamUserMutation;
