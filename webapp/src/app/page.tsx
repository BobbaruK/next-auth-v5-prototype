export default function Home() {
  return (
    <main className="">
      <div className="container text-yellow-500">
        <p>TEST_VAR: {process.env.TEST_VAR}</p>
        <p>SECRET_VAR: {process.env.SECRET_VAR}</p>
      </div>
    </main>
  );
}
