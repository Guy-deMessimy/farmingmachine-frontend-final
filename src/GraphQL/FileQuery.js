import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation UpoadFile($file: Upload!, $size: Int!) {
    uploadFile(file: $file, size: $size) {
      fileName
    }
  }
`;
