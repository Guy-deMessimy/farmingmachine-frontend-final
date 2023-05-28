import React, { useRef, useState } from 'react';
import { FileUploader } from 'baseui/file-uploader';
import { CREATE_CATEGORY } from '../../../GraphQL/ConfigurationQuery';
import { useMutation } from '@apollo/client';
import { ChildrenProps } from '../../../models/ConfigurationConfig';

const CategorySettings = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [createCategory, { data, loading, error }] = useMutation(CREATE_CATEGORY);
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
  function startProgress(acceptedFiles: any, rejectedFiles: object[]) {
    setIsUploading(true);
    timeoutId.current = setTimeout(reset, 4000);
    const file: string = acceptedFiles;
    if (rejectedFiles.length > 0) {
      setErrorMessage(true);
      return;
    }
    const form = new FormData();
    form.append('image', file);
    createCategory({
      variables: {
        ticketInput: {},
      },
    });
  }

  return (
    <>
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
    </>
  );
};

export default CategorySettings;
