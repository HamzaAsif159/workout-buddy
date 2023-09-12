import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
