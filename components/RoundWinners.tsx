import { memo } from "react";
//types
import type { Round } from "@/types/socket";

const RoundWinners = ({
  rounds,
  playerId,
}: {
  rounds: Round[];
  playerId: string;
}) => {
  const roundsFiltered = rounds.filter((r) => r.roundWinners.length !== 0);
  return (
    <div
      className={`grid md:grid-cols-fluid w-[95%] uppercase m-5 ${
        roundsFiltered.length > 0 && "border-2 border-accent"
      }`}
    >
      {roundsFiltered.map(({ roundWinners, round, wordToGuess, language }) => (
        <div key={round}>
          {roundWinners.length > 0 && (
            <div className="flexCenter flex-col  p-4 text-center">
              <span>zwycięzcy {round} rundy</span>
              <div className="flexCenter flex-col">
                {roundWinners.map(({ name, id }, index) => (
                  <b
                    key={index}
                    className={`${
                      playerId === id ? "text-primary-content" : "text-white"
                    }`}
                  >
                    {name}
                  </b>
                ))}
              </div>
              <span>
                słowem do odgadnięcia, było:{" "}
                <b className="text-secondary">{wordToGuess.word}</b>
              </span>
              {language !== "polski" && (
                <>
                  <span>
                    co znaczy:{" "}
                    <b className="text-secondary">{wordToGuess.translation}</b>
                  </span>
                  <span>
                    w języku: <b className="text-secondary">{language}</b>
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(RoundWinners);
