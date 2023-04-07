/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";
import uuid from "react-uuid";
import "./styles.css";

const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS);

  // Order teams by score (highest to lowest)
  function orderTeamByScoreHighestToLowest() {
    const orderedTeams = teams.slice().sort(
      (a, b) =>
		b.games.reduce((n, { score }) => n + score, 0) -
        a.games.reduce((n, { score }) => n + score, 0) 
    );

    setTeams(orderedTeams);
  }

  // Order teams by score (lowest to highest)
  function orderTeamByScoreLowestToHighest() {
    const orderedTeams = teams.slice().sort(
      (a, b) =>
        a.games.reduce((n, { score }) => n + score, 0) -
        b.games.reduce((n, { score }) => n + score, 0)
    );
    setTeams(orderedTeams);
  }

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    setTeams(teams.filter((team) => team.players.length >= 3));
  }

  return (
    <>
      <button onClick={() => setTeams(TEAMS)}>Initial list</button>

      <button onClick={() => orderTeamByScoreHighestToLowest()}>
        Highest to Lowest
      </button>
      <button onClick={() => orderTeamByScoreLowestToHighest()}>
        Lowest to Highest
      </button>
      <button onClick={() => teamsWithMoreThanThreePlayers()}>
        Teams with at least 3 players
      </button>

      <ul className="teams">
        {teams.map((team) => (
          <li key={uuid()} data-testid="teams-list">
            {team?.name +
              " / " +
              team.players.length +
              " / " +
              team.games.reduce((n, { score }) => n + score, 0)}
          </li>
        ))}
      </ul>
    </>
  );
}
