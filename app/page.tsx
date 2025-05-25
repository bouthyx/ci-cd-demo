export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-4xl py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Bouthayna BEKKOUCH  & Aya BOUDAD  CI/CD Project
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple website to learn DevOps using Next.js, Tailwind CSS, and JENKINS.
        </p>
      </header>

      <section className="mt-10 max-w-2xl text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Developed by Bouthayna & Aya
          </h2>
          <p className="text-gray-600">
            This project is designed to demonstrate a simple CI/CD pipeline. Push your changes to GitHub and watch them automatically deploy!
          </p>
        </div>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        © 2025 Bouthayna & Aya. All rights reserved.
      </footer>
    </main>
  );
}
