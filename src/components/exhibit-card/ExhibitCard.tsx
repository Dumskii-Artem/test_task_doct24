// src\components\exhibit-card\ExhibitCard.tsx

import styles from './ExhibitCard.module.css';
import type { TExhibit } from '@services/exhibits/exhibits-types';
import { ICON_SIZE } from '@const';
import { useDispatch, useSelector } from '@services/store';

// иконки
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaSackXmark } from 'react-icons/fa6';
import { toggleLike } from '@services/likes';
import { steal } from '@services/stolen';

type CardProps = {
  exhibit: TExhibit;
  cardClassName?: string;
  onCardClick?: () => void;
};

export default function ExhibitCard({ exhibit, cardClassName, onCardClick }: CardProps) {
  const dispatch = useDispatch();
  const liked = useSelector(state => state.likes.ids.includes(exhibit.objectID));

  return (
    <div
      className={`${styles.card} ${liked ? styles.liked : ''} ${cardClassName || ''}`}
      onClick={onCardClick}
    >
      <div className={styles.icons_row}>

        <div className={styles.tooltipWrapper}>
          <button
            className={styles.stealButton}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(steal(exhibit.objectID));
            }}
          >
            <FaSackXmark size={ICON_SIZE} />
          </button>

          <span className={styles.tooltip}>Украсть!</span>
        </div>

        <div className={styles.tooltipWrapper}>

          <button
            className={styles.likeButton}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(toggleLike(exhibit.objectID));
            }}
          >
            {
              liked 
                ? <AiFillHeart size={ICON_SIZE} />
                : <AiOutlineHeart size={ICON_SIZE} />
            }
          </button>
          <span className={styles.tooltip}>{liked ? 'Разлайкать' : 'Лайкнуть'}</span>
        </div>


      </div>
      <img
        src={exhibit.primaryImageSmall || '/no-image.png'}
        alt={exhibit.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{exhibit.title}</h3>
        <p className={styles.author}>{exhibit.artistDisplayName}</p>
        <p className={styles.date}>{exhibit.objectDate}</p>
        <p className={styles.department}>{exhibit.department}</p>
      </div>
    </div>
  );
}
