

export default function Home() {
  return (
    <main className="container py-5 flex-grow-1 d-flex align-items-center">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5 text-center">
              <span className="badge text-bg-primary mb-3">Bootstrap ready</span>
              <h1 className="h3 mb-3">Hello from React</h1>
              <p className="text-secondary mb-4">
                Tailwind has been removed and Bootstrap is now loaded globally.
              </p>
              <button type="button" className="btn btn-primary">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
