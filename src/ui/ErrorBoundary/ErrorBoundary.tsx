// src\ui\ErrorBoundary\ErrorBoundary.tsx

import { Component, type ReactNode } from 'react';
import FallbackErrorView from './FallbackErrorView';

type Props = { children: ReactNode };
type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: unknown) {
    // Можно прикрутить логирование (Sentry, LogRocket и т.д.)
    console.error('Ошибка в компоненте:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <FallbackErrorView message={this.state.error?.message}>
          <button
            onClick={this.handleReload}
            style={{
              marginTop: '1rem',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: '#1976d2',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Перезагрузить страницу
          </button>
        </FallbackErrorView>
      );
    }

    return this.props.children;
  }
}
