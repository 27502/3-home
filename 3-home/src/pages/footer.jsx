

const Navbar = () => {
  return (
    <nav>
      <h1 className="text-xl font-bold">My Website</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/post" className="hover:underline">Post</Link>
        </li>
        <li>
          <Link to="/book" className="hover:underline">Book</Link>
        </li>
        <li>
          <Link to="/users" className="hover:underline">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
