// src\App.tsx

import { Suspense, useEffect, useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import ErrorBoundary from '@ui/ErrorBoundary/ErrorBoundary'
import FallbackErrorView from '@ui/ErrorBoundary/FallbackErrorView'
import { router } from '@router'
import { RouterProvider } from 'react-router-dom'
import store, { useDispatch, useSelector } from '@services/store'
import { fetchDepartmentsThunk } from '@services/departments'
import { clearSearch } from '@services/search/search-slice'
import { EXHIBIT_PAGE_SIZE } from '@const'
import { clearExhibits, fetchExhibitsByIdsThunk } from '@services/exhibits/exhibits-slice'
import { maybeFetchSearch } from '@services/search/helpers'

export default function App() {
  const dispatch = useDispatch();
  const { objectIDs, status: searchStatus } = useSelector((state) => state.search);
  
  // const { current, loading: depsLoading, items: departments } = useSelector(
  const { current, loading: isDepartmentsLoading } = useSelector(
    (state) => state.departments
  );

  // const [isBlocked, setIsBlocked] = useState(false);
  // const loadedIds = useSelector((state) => state.exhibits.loadedIds);
  const firstTimeRunRef = useRef(false);
  const currentPage = useSelector((state) => state.pagination.currentPage);


  // const [currentPage, setCurrentPage] = useState(1);

  // При первом запуске — загрузить список отделов
  useEffect(() => {
    if (firstTimeRunRef.current) return;
      firstTimeRunRef.current = true;
    // console.log('*** START ***');
    dispatch(fetchDepartmentsThunk());
  }, [dispatch]);


  // useEffect(() => {
  //   console.log('******  ИЗМЕНИЛАСЬ loadedIds.length:', loadedIds.length);
  // }, [dispatch, loadedIds.length]);

  // Когда отделы загрузились или при смене department пользователем
  // запустить поиск
  useEffect(() => {

    // console.log('********* CLEAR **********','loadedIds.length:', loadedIds.length);
    // console.log('📥 current = ', current);
    // console.log('📥 isDepartmentsLoading  =', isDepartmentsLoading);
    
    if (!isDepartmentsLoading && current && current.departmentId) {
      dispatch(clearSearch());
      dispatch(clearExhibits());
      maybeFetchSearch(  
        dispatch,
        store.getState,
        {
        departmentId: current.departmentId,
        hasImages: true,
        q: '*',
        }
      );
    }
  }, [dispatch, isDepartmentsLoading, current?.departmentId, current]);
 
  // загружаем текущую страницу экспонатов
  useEffect(() => {
    if (searchStatus !== 'succeeded' || objectIDs.length === 0) return;

    const start = (currentPage - 1) * EXHIBIT_PAGE_SIZE;
    const end = start + EXHIBIT_PAGE_SIZE;
    const idsToLoad = objectIDs.slice(start, end);

    if (idsToLoad.length > 0) {
      dispatch(fetchExhibitsByIdsThunk(idsToLoad));
    }
  }, [dispatch, searchStatus, currentPage, objectIDs]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackErrorView message="Загрузка…" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}



