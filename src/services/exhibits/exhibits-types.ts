// src\services\exhibits\exhibits-types.ts

export type TExhibit = {
  objectID: number;            // уникальный ID экспоната
  title: string;               // название
  primaryImage: string;        // большое изображение
  primaryImageSmall: string;   // ссылка на изображение
  artistDisplayName: string;   // имя автора
  objectDate: string;          // дата создания
  department: string;          // название отдела
  objectURL: string;           // ссылка на страницу в MET
};

export type TExhibitsState = {
  entities: Record<number, TExhibit>;   // ID → объект экспоната
  loadedIds: number[];                  // какие ID уже загружены
  status: 'idle' | 'loading' | 'succeeded' | 'failed';

  pendingCount: number; 
  error: string | null; 
};
