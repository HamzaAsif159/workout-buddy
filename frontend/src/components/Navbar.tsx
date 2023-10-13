import Link from "next/link";
import { useRouter } from "next/router";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
    logout();
  };
  return (
    <header>
      <div className="container">
        {user ? (
          <Link href="/">
            <h1>Workout Buddy</h1>
          </Link>
        ) : (
          <Link href="/login">
            <h1>Workout Buddy</h1>
          </Link>
        )}
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
