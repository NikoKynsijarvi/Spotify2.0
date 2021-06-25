import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code: string) {
  const [accesToken, setAccesToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiersIn, setExpiersIn] = useState<number>();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccesToken(res.data.accesToken);
        setRefreshToken(res.data.refreshToken);
        setExpiersIn(res.data.expiresIn);
        window.history.pushState({}, "", "/");
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiersIn) return;
    const timeout = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          console.log(res.data);
          setAccesToken(res.data.accesToken);
          setExpiersIn(res.data.expiresIn);
        })
        .catch(() => {
          console.log("err");
          window.location.href = "/";
        });
    }, (expiersIn - 60) * 1000);
    return () => clearInterval(timeout);
  }, [refreshToken, expiersIn]);

  return accesToken;
}
