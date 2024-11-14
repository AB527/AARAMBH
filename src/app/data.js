export const filters = [
    {
        code: "sports",
        opts: [{
            label: "All sports",
            value: "all"
        },
        {
            label: "Badminton",
            value: "badminton"
        },
        {
            label: "Chess",
            value: "chess"
        }]
    },
    {
        code: "date",
        opts: [
            {
                label: "All days",
                value: "all"
            },
            {
                label: "18th Oct",
                value: "18"
            },
            {
                label: "19th Oct",
                value: "19"
            }
        ]
    },
    {
        code: "teams",
        opts: [
            {
                label: "All teams",
                value: "all"
            },
            {
                label: "Mavericks",
                value: "mavericks"
            },
            {
                label: "Renegades",
                value: "renegades"
            }
        ]
    },
    {
        code: "gender",
        opts: [
            {
                label: "Mix Gender",
                value: "all"
            },
            {
                label: "Boys",
                value: "boys"
            },
            {
                label: "Girls",
                value: "girls"
            }
        ]
    }
]
export const searchResults = [
    {
        sport: "badminton",
        games: [
            {
                date: "8th Oct",
                time: "12:30 PM",
                title: "Girls",
                participants: [
                    {
                        team: "renegades",
                        name: "Mavericks",
                        score: 1
                    },
                    {
                        team: "renegades",
                        name: "Renegades",
                        score: 2
                    }
                ]
            }
        ]
    },
    {
        sport: "football",
        games: [
            {
                date: "8th Oct",
                time: "7:30 PM",
                title: "Girls",
                participants: [
                    {
                        team: "renegades",
                        name: "Mavericks",
                        score: 3
                    },
                    {
                        team: "renegades",
                        name: "Renegades",
                        score: 4
                    }
                ]
            },
            {
                date: "8th Oct",
                time: "9:30 PM",
                title: "Boys",
                participants: [
                    {
                        team: "renegades",
                        name: "Mavericks",
                        score: 3
                    },
                    {
                        team: "renegades",
                        name: "Renegades",
                        score: 4
                    }
                ]
            }
        ]
    }
]
export const players = [
    {
        name: "Atharva Bedekar",
        img: "dummy.png",
        jerseyNumber: 69,
        prefs: ["chess", "badminton", "football"]
    },
    {
        name: "Thomas",
        img: "dummy.png",
        jerseyNumber: 911,
        prefs: ["badminton", "table tennis"]
    },
    {
        name: "Atharva Bedekar",
        img: "dummy.png",
        jerseyNumber: 69,
        prefs: ["chess", "badminton", "football"]
    }
]
export const standings = {
    header: {
        sports: ["Chess", "Badminton", "Table Tennis", "Volleyball", "Football", "Cricket"]
    },
    body: [
        {
            team: "renegades",
            chess: 300,
            badminton: 200,
            tabletennis: 300,
            volleyball: 400,
            football: 500,
            cricket: 400,
            technical: -200,
            total: 300
        },
        {
            team: "mavericks",
            chess: 300,
            badminton: 200,
            tabletennis: 300,
            volleyball: 400,
            football: 500,
            cricket: 400,
            technical: -200,
            total: 300
        },
        {
            team: "mavericks",
            chess: 300,
            badminton: 200,
            tabletennis: 300,
            volleyball: 400,
            football: 500,
            cricket: 400,
            technical: -200,
            total: 300
        },
        {
            team: "mavericks",
            chess: 300,
            badminton: 200,
            tabletennis: 300,
            volleyball: 400,
            football: 500,
            cricket: 400,
            technical: -200,
            total: 300
        }
    ],
}
export const teamColors = {
    "renegades": "#6c1317"
}

export const developers = [
    {
        img: "sanidhya.png",
        name: "Sanidhya Solanki",
        pos: "Backend Developer",
    },
    {
        img: "atharva.png",
        name: "Janay Bhanushali",
        pos: "Database Engineer",
    },
    {
        img: "atharva.png",
        name: "Atharva Bedekar",
        pos: "Team Lead",
    },
    {
        img: "banoth.png",
        name: "Banoth Digamber",
        pos: "Documentation",
    },
    {
        img: "atharva.png",
        name: "Tanmay",
        pos: "Frontend Design",
    }
]