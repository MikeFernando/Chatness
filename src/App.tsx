import { useState } from "react";

import { User } from "./dtos/User";

import { AuthPage } from "./components/AuthPage";
import { ChartsPage } from "./components/ChartsPage";

import "./App.css";

export function App() {
  const [user, setUser] = useState<User | undefined>();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChartsPage user={user} />;
  }
}
