// src\ui\ErrorBoundary\FallbackErrorView.tsx

type Props = {
  message?: string;
  children?: React.ReactNode;
};

export default function FallbackErrorView({ message, children }: Props) {
  return (
    <div
      role="alert"
      style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h2>Произошла ошибка</h2>
      <p>{message || 'Неизвестная ошибка'}</p>
      {children}
    </div>
  );
}