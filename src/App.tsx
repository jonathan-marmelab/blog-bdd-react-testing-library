import { QueryClient, QueryClientProvider } from "react-query";
import { Routes } from "react-router-dom";

import { HomeRoutes } from "./Home";
import { SearchRoutes } from "./Search";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {...HomeRoutes}
        {...SearchRoutes}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

