import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createRootRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import HomePage from "./routes/home.tsx";
import CantoriasRoute from "./routes/cantorias.tsx";
import CantoriaRoute from "./routes/cantoria.tsx";
import EstilosRoute from "./routes/estilos.tsx";
import EstiloRoute from "./routes/estilo.tsx";
import CantadoresRoute from "./routes/cantadores.tsx";
import CantadorRoute from "./routes/cantador.tsx";
import MusicasRoute from "./routes/musicas.tsx";
import MusicaRoute from "./routes/musica.tsx";
import RimasRoute from "./routes/rimas.tsx";
import { Toaster } from "sonner";

import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const routeTree = rootRoute.addChildren([
  HomePage(rootRoute),
  CantoriasRoute(rootRoute),
  CantoriaRoute(rootRoute),
  EstilosRoute(rootRoute),
  EstiloRoute(rootRoute),
  CantadoresRoute(rootRoute),
  CantadorRoute(rootRoute),
  MusicasRoute(rootRoute),
  MusicaRoute(rootRoute),
  RimasRoute(rootRoute),
]);

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </StrictMode>,
  );
}
