interface ErrorProps {
  errorText: string;
}

function ErrorBox({ errorText }: ErrorProps) {
  return (
    <div className="not-results">
      <h3>{errorText}</h3>
    </div>
  );
}

export default ErrorBox;
