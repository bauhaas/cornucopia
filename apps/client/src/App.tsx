import { NavBar } from "./components/NavBar";
import { TailwindIndicator } from "./lib/tailwind-indicator";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Filmography } from "./pages/filmography";
import { OpenAPI } from "src/services";

function App() {
  const isDevMode = import.meta.env.MODE === "development";

  console.log(import.meta.env.MODE);
  if (isDevMode) OpenAPI.BASE = import.meta.env.VITE_BASE_API_URL;
  else OpenAPI.BASE = import.meta.env.VITE_BASE_API_URL_PRODUCTION;

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
            <Route path="filmography" element={<Filmography />} />
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
