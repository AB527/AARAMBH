export const sports = [
    {
        label: "All sports",
        value: "all"
    },
    {
        label: "Badminton",
        value: "bad"
    },
    {
        label: "Chess",
        value: "chs"
    }
]
export const filters = [
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
export const teamColors = {
    "renegades": "#6c1317"
}