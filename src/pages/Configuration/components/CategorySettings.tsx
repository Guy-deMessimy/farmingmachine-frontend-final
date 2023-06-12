import { Fragment, useRef, useState } from 'react';
import { FileUploader } from 'baseui/file-uploader';
import { useMutation } from '@apollo/client';
import { ChildrenProps } from '../../../models/ConfigurationConfig';
import { UPLOAD_FILE } from '../../../GraphQL/FileQuery';

const CategorySettings = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [uploadFile, { data, loading, error }] = useMutation(UPLOAD_FILE);
  const timeoutId = useRef<any>();

  const ErrorText = ({ children, ...props }: ChildrenProps) => {
    return <>{children}</>;
  };

  const reset = () => {
    setIsUploading(false);
    clearTimeout(timeoutId.current);
  };

  // startProgress is only illustrative. Use the progress info returned
  // from your upload endpoint. This example shows how the file-uploader operates
  // if there is no progress info available.
  function startProgress(acceptedFiles: File[], rejectedFiles: File[]) {
    setIsUploading(true);
    timeoutId.current = setTimeout(reset, 4000);
    const file: File = acceptedFiles[0];
    const size: number = file.size;
    if (rejectedFiles.length > 0) {
      setErrorMessage(true);
      return;
    }
    uploadFile({ variables: { file, size } });
  }

  return (
    <Fragment>
      <FileUploader
        onCancel={reset}
        accept={['image/jpg', 'image/jpeg', 'image/png']}
        onDrop={(acceptedFiles, rejectedFiles) => {
          startProgress(acceptedFiles, rejectedFiles);
        }}
        errorMessage={errorMessage ? 'someting went wrong' : ''}
        progressMessage={isUploading ? `Uploading... hang tight.` : ''}
        overrides={{
          FileDragAndDrop: {},
          ContentMessage: {},
          ContentSeparator: {},
        }}
      />

      {/* {error && <ErrorText>{error}</ErrorText>} */}
    </Fragment>
  );
};

export default CategorySettings;
