import {
  useState,
  useRef,
  type ChangeEvent,
  type DragEvent,
  type MouseEvent,
} from 'react';
import styles from './ImageUploader.module.scss';

interface ImageUploaderProps {
  value?: File | string | null;
  onChange: (file: File | null) => void;
  error?: string;
}

export const ImageUploader = ({
  value,
  onChange,
  error,
}: ImageUploaderProps) => {
  const [preview, setPreview] = useState<string | null>(
    value instanceof File
      ? URL.createObjectURL(value)
      : (value as string) || null,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updatePreview(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    updatePreview(file);
  };

  const updatePreview = (file: File | null) => {
    if (file) {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
      setPreview(URL.createObjectURL(file));
      onChange(file);
    }
  };

  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    if (preview && preview.startsWith('blob:')) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Превью товара (Thumbnail)</label>

      <div
        className={`${styles.dropzone} ${error ? styles.error : ''}`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className={styles.hiddenInput}
        />

        {preview ? (
          <div className={styles.previewContainer}>
            <img src={preview} alt="Превью" className={styles.image} />
            <button
              type="button"
              onClick={handleRemove}
              className={styles.removeBtn}
            >
              &times;
            </button>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <span>Нажмите или перетащите фото</span>
          </div>
        )}
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
