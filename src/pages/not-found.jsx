import { Link } from "react-router";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage: "url('/images/football-field.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! You’re Offside 🏁</h2>
        <p className="text-lg mb-6 max-w-lg mx-auto">
          The page you’re trying to reach has been sent off the field.
          Don’t worry, the match isn’t over — head back to the home page.
        </p>

        <Link
          to="/"
          className="bg-[#be5b50] hover:bg-[#8a2d3b] text-white py-3 px-6 rounded-xl font-medium transition duration-300"
        >
          Return to Home
        </Link>
      </div>

      <div className="absolute bottom-10 right-10 opacity-70">
        <img
          src="/images/bisco-badge.png"
          alt="Bisco Football Club"
          className="w-24 h-24"
        />
      </div>
    </section>
  );
}
