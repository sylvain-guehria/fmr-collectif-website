import React, { ChangeEvent } from 'react';
import Button, { ButtonProps } from '../../lib/CustomButtons/Button';

interface Props {
  avatar?: boolean;
  addButtonProps: ButtonProps;
  changeButtonProps: ButtonProps;
  removeButtonProps: ButtonProps;
  callBackOnFileChange: (file: File) => void;
  acceptedFormat?: string;
}

const ImageUpload: React.FC<Props> = ({
  avatar,
  addButtonProps,
  changeButtonProps,
  removeButtonProps,
  callBackOnFileChange,
  acceptedFormat = '.png, .jpg, .jpeg',
}) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string>(
    avatar ? '/img/placeholder.jpg' : '/img/image_placeholder.jpg'
  );
  const fileInput: React.RefObject<HTMLInputElement> = React.createRef();
  const handleImageChange = (e: ChangeEvent): void => {
    e.preventDefault();
    const reader = new FileReader();
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    callBackOnFileChange(file);
  };

  const handleClick = (): void => {
    fileInput?.current?.click();
  };
  const handleRemove = (): void => {
    setFile(null);
    setImagePreviewUrl(avatar ? '/img/placeholder.jpg' : '/img/image_placeholder.jpg');
    if (fileInput != null && fileInput.current != null) {
      fileInput.current.value = '';
    }
  };
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} accept={acceptedFormat} />
      <div className={'thumbnail' + (avatar ? ' img-circle' : '')}>
        <img src={imagePreviewUrl} alt="..." />
      </div>
      <div>
        {file === null ? (
          <Button {...addButtonProps} onClick={() => handleClick()}>
            {avatar ? 'Add Photo' : 'Select image'}
          </Button>
        ) : (
          <span>
            <Button {...changeButtonProps} onClick={() => handleClick()}>
              Change
            </Button>
            {avatar ? <br /> : null}
            <Button {...removeButtonProps} onClick={() => handleRemove()}>
              <>
                <i className="fas fa-times" /> Remove
              </>
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};
// for react debugging
ImageUpload.displayName = 'ImageUpload';

export default ImageUpload;
