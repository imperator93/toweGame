import { useRef } from "react";
import { Layout } from "./Components/Layout";
import "./style.css";
import { PlayerModel } from "./Models/PlayerModel";

export const App = () => {
  //need this because of the StrictMode double render so it doesn't create two connections on the backend
  const wsReff = useRef<WebSocket>(null);

  if (wsReff.current == null) {
    wsReff.current = new WebSocket("ws://localhost:5003");
  }
  const { current: ws } = wsReff;

  ws.addEventListener("message", ({ data }) => {
    console.log("message recieved");
    console.log(data.trim());
  });

  ws.addEventListener("close", (ev) => {
    console.log("closing", ev);
  });

  const leo: PlayerModel = {
    health: 100,
    id: "1",
    money: 200,
    reasearches: [],
    structures: [],
    css: {},
  };
  return <Layout />;
};
