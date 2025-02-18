import { gql } from '@apollo/client';

export const UPLOAD_IMAGE = gql`
  mutation UploadImage($image: String!) {
    uploadImage(image: $image) {
      id
      imageUrl
      detectedText
    }
  }
`;
