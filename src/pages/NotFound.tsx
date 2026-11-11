const NotFound = () => (
  <main className="flex min-h-screen flex-col justify-center px-6 sm:px-16">
    <h1 className="text-[clamp(5rem,20vw,14rem)] font-semibold leading-none tracking-tighter">404</h1>
    <p className="mt-6 font-serif text-2xl">This page doesn't exist.</p>
    <a href="/" className="prose-link mt-4 w-fit">Go to the portfolio</a>
  </main>
)

export default NotFound
