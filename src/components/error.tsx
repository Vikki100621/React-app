import { Component, ErrorInfo, ReactNode } from 'react';
import Button from './UI/button';

interface Props {
  children?: ReactNode;
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleButtonClick = () => {
    this.setState({ hasError: true });
    throw new Error('This is a test error.');
  };

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div className="error-wrapper">
          <h1>Sorry, something went wrong.</h1>
          <p>{error && error.toString()}</p>
        </div>
      );
    }

    return (
      <div className="error-wrapper">
        {children}
        <Button classes="top__section-button error" title="Error" onClick={this.handleButtonClick} />
      </div>
    );
  }
}
export default ErrorBoundary;
