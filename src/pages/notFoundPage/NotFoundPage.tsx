// src\pages\notFoundPage\NotFoundPage.tsx

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        color: '#444',
      }}
    >
      <h1>404 — Страница не найдена</h1>
      <p>Похоже, вы попали не туда.</p>
      <a
        href="/products"
        style={{
          marginTop: '1rem',
          textDecoration: 'none',
          color: 'white',
          background: '#1976d2',
          padding: '8px 16px',
          borderRadius: '8px',
        }}
      >
        Вернуться на главную
      </a>
    </div>
  );
}