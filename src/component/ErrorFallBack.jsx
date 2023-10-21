function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <a href="/">Go Back Home</a>
    </div>
  );
}
export default MyFallbackComponent;
