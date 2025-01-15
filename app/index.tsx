import { useEffect } from "react";
import Login from "./auth/login";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = false;

      if (isLoggedIn) {
        router.navigate("/tabs");
      } else {
        return <Login />;
      }
    }, 1000);
  }, []);

  return <Login />;
}
