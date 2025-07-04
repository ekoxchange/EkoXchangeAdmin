import { Link } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// project imports
import AuthWrapper1 from "./AuthWrapper1";
import AuthCardWrapper from "./AuthCardWrapper";
import AuthLogin from "../auth-forms/AuthLogin";

import Logo from "../../../ui-component/Logo";

export default function Login() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        sx={{ justifyContent: "flex-end", minHeight: "100vh", width: "100%" }}
      >
        <Grid size={12}>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "calc(100vh - 68px)",
            }}
          >
            <Grid sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Grid sx={{ mb: 3 }}>
                    <Link
                      to="https://www.ekoxchange.com/"
                      target="_blank"
                      aria-label="logo"
                    >
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid size={12}>
                    <Grid
                      container
                      direction={{ xs: "column-reverse", md: "row" }}
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid>
                        <Stack
                          spacing={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant={downMD ? "h3" : "h2"}
                            sx={{ color: "secondary.main" }}
                          >
                            Hi, Welcome Back
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "16px",
                              textAlign: { xs: "center", md: "inherit" },
                            }}
                          >
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={12}>
                    <AuthLogin />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
}
