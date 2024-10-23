import FormTable from "./Components/FormTable";
import Logo from "./Components/Logo";
import Sidebar from "./Components/Sidebar/Index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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

      <div className="container my-3 border">
        <h2>
          Incase you want to use bootstrap <code>App.jsx</code> this is the code
        </h2>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default App;
