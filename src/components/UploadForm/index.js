import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useToasts } from 'react-toast-notifications';

import { uploadTrackRequest } from 'http/requests';
import Input from './Input';

import * as S from './styled';

const UploadForm = () => {
  const [track, setTrack] = useState('');

  const { addToast } = useToasts();

  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0].type === 'audio/ogg' || acceptedFiles[0].type === 'audio/mp3') {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result;
          setTrack(binaryStr);
        };
        reader.readAsDataURL(file);
      });
    } else {
      addToast('Wrong file format',
        {
          appearance: 'error',
          autoDismiss: true,
        });
    }
  }, [addToast, setTrack]);

  const onSubmit = async (values) => {
    const uploadData = {
      src: track,
      artist: values.artist,
      name: values.name,
    };
    await uploadTrackRequest(uploadData);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <S.Container>
      <S.UploadContainer visible={track} {...getRootProps()}>
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
      <S.UploadContainer visible={!track}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <S.Form onSubmit={handleSubmit}>
              <Input
                name="artist"
                placeholder="Artist"
              />
              <Input
                name="name"
                placeholder="Track Name"
              />
              <S.ButtonField>
                <S.Button
                  type="submit"
                  disabled={!valid}
                >
                  Upload
                </S.Button>
                <S.CloseButton
                  type="button"
                  onClick={() => setTrack('')}
                >
                  {t('Log In.Close')}
                </S.CloseButton>
              </S.ButtonField>
            </S.Form>
          )}
        />
      </S.UploadContainer>
    </S.Container>
  );
};

export default UploadForm;
