import FormTable from "./Components/FormTable";
import Logo from "./Components/Logo";
import Sidebar from "./Components/Sidebar/Index";

function App() {
  return (
    <>
      <Sidebar />

      <div className="container">
        <div className="banner">
          <div className="top-bar">
            <Logo />

            <div className="user-section">
              <span>User: EB1480</span>
              <span>
                <a href="http://">Logout</a>
              </span>
            </div>
          </div>

          <div className="nav-bar">
            <div className="left-menu">
              <select>
                <option value="FINCORE">SINGLE WINDOW</option>
              </select>
            </div>
            <div className="right-menu">
              <span>28 May, 2015 </span>
              <span className="show-menu">Menu</span>
              <input
                type="text"
                placeholder="Menu Shortcut"
                className="menu-shortcut"
              />
              <button>Go</button>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>DSA Inquiry and Printing</h2>
        </div>

        <form>
          <FormTable />

          <div className="footer">
            <input type="submit" value="Go" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
