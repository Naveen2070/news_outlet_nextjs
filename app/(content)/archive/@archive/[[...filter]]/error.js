'use client';
export default function FilterError({ error }) {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div id="error">
        <h2>Invalid filter</h2>
        <p>{error.message}</p>
        <button onClick={goBack}>Back to archive</button>
      </div>
    </>
  );
}
