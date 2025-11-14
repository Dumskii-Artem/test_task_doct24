// src\components\exhibit-modal\ExhibitModal.tsx
// src/components/exhibit-modal/ExhibitModal.tsx

import { useEffect } from 'react';
import type { TExhibit } from '@services/exhibits';
import styles from './ExhibitModal.module.css';

type ModalProps = {
  exhibit: TExhibit;
  onClose: () => void;
};

export default function ExhibitModal({ exhibit, onClose }: ModalProps) {
  // const [blobUrl, setBlobUrl] = useState<string | null>(null);

  // //
  // // Загружаем blob или fallback
  // //
  // useEffect(() => {
  //   const url = exhibit.primaryImage || exhibit.primaryImageSmall;

  //   if (!url) return;

  //   let tempUrl: string | null = null;

  //   imageCache.getImage(exhibit.objectID, url).then(blob => {
  //     if (blob) {
  //       const localUrl = URL.createObjectURL(blob);
  //       tempUrl = localUrl;
  //       setBlobUrl(localUrl);
  //     } else {
  //       // fallback — сайт не работает, сеть упала, 404, etc.
  //       setBlobUrl(null);
  //     }
  //   });

  //   return () => {
  //     if (tempUrl) URL.revokeObjectURL(tempUrl);
  //   };
  // }, [exhibit]);

  //
  // Закрытие по ESC
  //
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  //
  // Отображение
  //
  const src =
    exhibit.primaryImage ||
    exhibit.primaryImageSmall ||
    '/no-image.png';

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* <button className={styles.closeBtn} onClick={onClose}>×</button> */}

        <img src={src} alt={exhibit.title} className={styles.image} />

        <h2 className={styles.title}>{exhibit.title}</h2>
        <p className={styles.author}>{exhibit.artistDisplayName}</p>
        <p className={styles.date}>{exhibit.objectDate}</p>

      </div>
    </div>
  );
}
