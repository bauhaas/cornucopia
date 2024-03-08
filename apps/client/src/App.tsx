import { NavBar } from "./components/NavBar";
import { TailwindIndicator } from "./lib/tailwind-indicator";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Filmography } from "./pages/filmography";
import { OpenAPI, UsersService } from "src/services";
import { PropsWithChildren, useState } from "react";

import { createContext } from "react";

interface UserContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any; // Replace 'any' with the type of your user data
  updateUser: (id: string, newValue: any) => void; // add updateUser here
}

export const UserContext = createContext<UserContextType>({
  user: {}, // provide a default user
  updateUser: () => {}, // provide a default updateUser function
});

const queryClient = new QueryClient();

export const AppWrapper = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const UserProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const { usersControllerGetUser } = UsersService;

  const [user, setUser] = useState({});

  const updateUser = (id: string, newValue: any) => {
    setUser((prevUser) => ({ ...prevUser, [id]: newValue }));
  };

  useQuery({
    queryKey: ["getUser"],
    queryFn: async () => {
      const data = await usersControllerGetUser({
        id: 1,
      });

      setUser(data);

      return data;
    },
  });

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

function App() {
  const isDevMode = import.meta.env.MODE === "development";

  console.log(import.meta.env.MODE, isDevMode);
  console.log(import.meta.env.VITE_VERSION);
  if (isDevMode) {
    OpenAPI.BASE = import.meta.env.VITE_BASE_API_URL;
  } else {
    OpenAPI.BASE = import.meta.env.VITE_BASE_API_URL_PRODUCTION;
  }

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="filmography" element={<Filmography />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

const Layout = () => {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <NavBar />
      <TailwindIndicator />
      <Outlet />
      {/* </QueryClientProvider> */}
    </>
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
