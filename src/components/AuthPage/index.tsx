import React, { FormEvent } from "react";

import { api } from "@/services/api";
import { User } from "@/dtos/User";

import { Logo } from "@/assets/Logo";
import * as S from "./styles";

export interface AuthPageProps {
  onAuth: (user: User) => void;
}

export function AuthPage({ onAuth }: AuthPageProps) {
  const [value, setValue] = React.useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await api
        .post("/authenticate", { username: value })
        .then((res) => onAuth({ ...res.data, secret: value }));
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <S.Container>
      <S.FormCard onSubmit={onSubmit}>
        <Logo />
        <S.FormTitle>Set a username to get started</S.FormTitle>

        <S.Auth>
          <S.AuthLabel>Username</S.AuthLabel>
          <S.Input onChange={({ target }) => setValue(target.value)} />
          <S.Button type="submit">Enter</S.Button>
        </S.Auth>
      </S.FormCard>
    </S.Container>
  );
}
