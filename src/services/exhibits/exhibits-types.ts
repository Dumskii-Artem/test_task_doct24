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
  items: TExhibit[];
  loading: boolean;
  error: string | null;
};