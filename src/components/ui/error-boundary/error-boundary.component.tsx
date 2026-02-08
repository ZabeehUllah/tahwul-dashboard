import { Component } from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./error-boundary.types";
import styles from "./error-boundary.styles";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box sx={styles.container}>
          <ErrorOutlineIcon sx={{ fontSize: 56, color: "#c62828" }} />
          <Typography variant="h6" sx={styles.title}>
            Something went wrong
          </Typography>
          <Typography variant="body2" sx={styles.message}>
            An unexpected error occurred. Please try again or refresh the page.
          </Typography>
          <Button
            variant="contained"
            onClick={this.handleRetry}
            sx={styles.retryButton}
          >
            Try Again
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
