// src\api\metAPI.ts

export const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';


export type ArtObject = {
  objectID: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  objectDate: string;
  department: string;
  objectURL: string;
};

/** 2. Список ID по отделу */
export async function getObjectIdsByDepartment(departmentId: number): Promise<number[]> {
  const url = `${BASE_URL}/search?departmentId=${departmentId}&hasImages=true&q=*`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Ошибка загрузки списка ID');
  const data = await res.json();
  return data.objectIDs || [];
}

/** 3. Детали по ID */
export async function getObjectById(id: number): Promise<ArtObject> {
  const res = await fetch(`${BASE_URL}/objects/${id}`);
  if (!res.ok) throw new Error(`Ошибка загрузки объекта ${id}`);
  const obj = await res.json();
  return {
    objectID: obj.objectID,
    title: obj.title,
    primaryImageSmall: obj.primaryImageSmall,
    artistDisplayName: obj.artistDisplayName,
    objectDate: obj.objectDate,
    department: obj.department,
    objectURL: obj.objectURL,
  };
}

/** 4. Детали по нескольким ID */
export async function getObjectsByIds(ids: number[]): Promise<ArtObject[]> {
  const results = await Promise.all(
    ids.map(async (id) => {
      try {
        const obj = await getObjectById(id);
        return obj.primaryImageSmall ? obj : null;
      } catch {
        return null;
      }
    })
  );
  return results.filter(Boolean) as ArtObject[];
}
