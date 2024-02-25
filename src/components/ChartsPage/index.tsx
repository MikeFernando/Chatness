import { PrettyChatWindow } from "react-chat-engine-pretty";
import React from "react";

import { User } from "@/dtos/User";

export interface ChartsPageProps {
  user: User;
}

export function ChartsPage({ user }: ChartsPageProps) {
  React.useEffect(() => {
    document.title = `${user.username}`;
  }, [user]);

  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        // ProjectID should be environment variable
        projectId="09d1d68e-1e6b-4bb5-bd1f-1c9416da04c1"
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
}
