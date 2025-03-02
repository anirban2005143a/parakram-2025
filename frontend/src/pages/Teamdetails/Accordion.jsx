import React, { useState } from "react";

const PlayersAccordion = ({ data }) => {
    // Group players by team
    const teams = data.reduce((acc, player) => {
        const teamId = player.team.teamId;
        if (!acc[teamId]) {
            acc[teamId] = {
                teamId: teamId,
                sportName: player.team.sportName,
                players: [],
            };
        }
        acc[teamId].players.push(player);
        return acc;
    }, {});

    // State to manage which team's accordion is open
    const [openTeamId, setOpenTeamId] = useState(null);

    // Toggle accordion
    const toggleAccordion = (teamId) => {
        setOpenTeamId((prev) => (prev === teamId ? null : teamId));
    };

    return (
        <div className="bg-[#3837404b] text-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Teams and Players</h1>
            {Object.values(teams).map((team) => (
                <div key={team.teamId} className="mb-2">
                    {/* Accordion Header */}
                    <button
                        onClick={() => toggleAccordion(team.teamId)}
                        className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-gray-200 bg-[#1f1f25] rounded-lg hover:bg-[#2c2c38] focus:outline-none focus-visible:ring focus-visible:ring-slate-600 focus-visible:ring-opacity-75"
                    >
                        <span>
                            {team.teamId} - {team.sportName}
                        </span>
                        <span>{openTeamId === team.teamId ? "▲" : "▼"}</span>
                    </button>

                    {/* Accordion Content */}
                    {openTeamId === team.teamId && (
                        <div className="md:px-4 pt-4 pb-2 text-sm text-gray-300">
                            {team.players.map((player, ind) => {

                                return (
                                    <>
                                        <div
                                            key={ind}
                                            className="p-6 my-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#00000080]"
                                        >
                                            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                                                {/* Left Section: Player Details */}
                                                <div className="flex-1 space-y-4">
                                                    <div className="text-2xl font-bold text-gray-100">
                                                        {player.name}
                                                    </div>
                                                    <div className="text-sm text-gray-300">
                                                        <span className="font-medium">College:</span> {player.collegeName}
                                                    </div>
                                                    <div className="text-sm text-gray-300">
                                                        <span className="font-medium">Player ID:</span> {player.playerId}
                                                    </div>
                                                    <div className="text-sm text-gray-300">
                                                        <span className="font-medium">Phone:</span> {player.phoneNumber}
                                                    </div>
                                                    <div className="text-sm text-gray-300">
                                                        <span className="font-medium">Sport:</span> {player.sportName}
                                                    </div>
                                                    <div className="text-sm text-gray-300">
                                                        <span className="font-medium">Email:</span> {player.email}
                                                    </div>
                                                    <div className="text-sm text-gray-300">
                                                        <span className="font-medium">AccommodationType :</span> {player.accommodationType || "none"} {player.accommodationType? player.accommodationPrice : ""}
                                                    </div>
                                                </div>

                                                {/* Right Section: ID Card Image */}
                                                <div className="flex-1">
                                                    {player.idCardPicture ? (
                                                        <a
                                                            href={player.idCardPicture || "#"}
                                                            target="_blank"
                                                            className="w-full h-auto rounded-lg border border-gray-600"
                                                        >Check player id card</a>
                                                    ) : (
                                                        <div className="text-sm text-gray-400">
                                                            No ID card picture available.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PlayersAccordion;