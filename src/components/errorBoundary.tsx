import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  catchError?: () => void;
}
interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div className="bottom">
          <h1>Sorry, something went wrong.</h1>
          <p>{error && error.toString()}</p>
        </div>
      );
    }

    return children;
  }
}
export default ErrorBoundary;
