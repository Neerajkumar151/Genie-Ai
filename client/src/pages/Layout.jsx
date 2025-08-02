import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {/* <Link to="/ai">Dashboard</Link>
        <Link to="/ai/write-article">Write</Link> */}
      </nav>
      {/* <h1>Layout</h1> */}
      <Outlet />
    </div>
  );
};

export default Layout;
