import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

import { Layout } from "../components/layout/layout.component";
import paths from "./router.paths";

const Dashboard = lazy(() => import("../pages/dashboard"));
const PerspectivesPage = lazy(() => import("../pages/perspectives"));

const PageLoader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      minHeight: 400,
    }}
  >
    <CircularProgress />
  </Box>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Redirect / to /dashboard */}
        <Route
          path={paths.DEFAULT}
          element={<Navigate to={paths.DASHBOARD} replace />}
        />

        {/* Dashboard Layout */}
        <Route element={<Layout />}>
          <Route path={paths.DASHBOARD} element={<Dashboard />} />
          <Route path={paths.PERSPECTIVES} element={<PerspectivesPage />} />
        </Route>

        {/* Fallback */}
        <Route
          path={paths.ALL}
          element={<Navigate to={paths.DASHBOARD} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
