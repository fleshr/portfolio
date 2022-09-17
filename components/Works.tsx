import Work from "./Work";

function Works() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-2.5 py-5 sm:px-5">
        <h2 className="font-bold text-2xl text-center mb-6">Works</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </div>
    </section>
  );
}

export default Works;
