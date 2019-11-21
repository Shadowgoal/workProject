import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useToasts } from 'react-toast-notifications';

import * as S from './styled';

const UploadForm = () => {
  const [isUploaded, setIsUploaded] = useState(false);

  const { addToast } = useToasts();

  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0].type === 'audio/ogg' || acceptedFiles[0].type === 'audio/mp3') {
      setIsUploaded(true);
    } else {
      addToast('Wrong file format',
        {
          appearance: 'error',
          autoDismiss: true,
        });
    }
  }, [setIsUploaded, isUploaded, addToast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <S.Container>
      <S.UploadContainer {...getRootProps()}>
        <S.UploadTitle>
          {t('UploadForm.UploadTitle')}
        </S.UploadTitle>
        <input type="file" {...getInputProps()} />
        {
        isDragActive
          ? <p>Drop the files here ...</p>
          : (
            <S.UploadBtn type="submit">
              {t('UploadForm.UploadBtn')}
            </S.UploadBtn>
          )
        }
        <S.UploadFooter>
          {t('UploadForm.UploadFooter')}
        </S.UploadFooter>
      </S.UploadContainer>
    </S.Container>
  );
};

export default UploadForm;
