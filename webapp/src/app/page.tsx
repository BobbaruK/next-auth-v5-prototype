export default function Home() {
  return (
    <div className="container">
      <p>TEST_VAR: {process.env.TEST_VAR}</p>
      <p>SECRET_VAR: {process.env.SECRET_VAR}</p>
    </div>
  );
}
