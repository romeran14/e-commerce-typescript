import { Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { AppDispatch } from "../../store/store";
import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Obj = {
  email: "jaime_rodriguez_5@hotmail.com",
  password: "2334234234",
  displayName: "Jaime Rodriguez",
};
const { email, password, displayName } = Obj;

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onGoogleSignIn = () => {
    console.log("onGoogleSingIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sx={{ mt: 3 }}></Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ mt: { xs: "unset;", sm: 3, xl: 3 } }}
            >
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              sx={{
                mt: 2,
                flexDirection: { xs: "column", sm: "row", xl: "row" },
                alignItems: { xs: "center", sm: "unset", xl: "unset" },
              }}
            >
              <Link color="inherit" to="/auth/forgot-you-password">
                Did you forget your password ?
              </Link>
              <Link color="inherit" to="/auth/register">
                Create an account
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
