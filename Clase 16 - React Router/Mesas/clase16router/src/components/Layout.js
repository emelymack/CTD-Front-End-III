import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">🏠🏠Home🏠🏠</Link>
        </li>
        <li>
          <Link to="/guauguaus">🐶🐶Guaguaus🐶🐶</Link>
        </li>
        <li>
          <Link to="/miaumiaus">😸😸Miaumiaus😸😸</Link>
        </li>
      </ul>
      <hr></hr>
      <h1>✨✨✨✨Tenemos✨✨✨✨</h1>
      <Outlet />
    </>
  );
}
