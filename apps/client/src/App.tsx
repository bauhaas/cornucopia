import { NavBar } from "./components/NavBar";
import { TailwindIndicator } from "./lib/tailwind-indicator";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <>
      {/* <NavBar />
      <div className="text-red-500">Hello world</div>
      <Button>Click me</Button>
      <TailwindIndicator /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const queryClient = new QueryClient();
const Layout = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <TailwindIndicator />
        <Outlet />
      </QueryClientProvider>
    </div>
  );
};

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
