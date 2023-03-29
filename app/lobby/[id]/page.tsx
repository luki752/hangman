import LobbyDetails from "@/app/components/LobbyDetails";

type Props = {
  params: {
    id: string;
  };
};

const Lobby = ({ params: { id: lobbyId } }: Props) => {
  return (
    <div className="h-screen flexCenter flex-col">
      <h1 className="p-5">Welcome to {lobbyId} lobby</h1>
      <LobbyDetails roomId={lobbyId} />
    </div>
  );
};

export default Lobby;
