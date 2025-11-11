// src/layouts/RootLayout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from '@components/header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main style={{ padding: '80px 16px 16px' }}>
        <Outlet />
      </main>
    </>
  );
}
