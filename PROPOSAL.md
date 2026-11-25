# Project proposal

* Name: Nam Khanh LE
* Project title: Sports League Tracker
* Pitch (one sentence): A web application that lets users follow a sports league, explore its teams and match schedules, and keep track of match results.
* Target users:Sports fans who want a simple way to follow a league, check team information, and view match results.

## Pages

| URL | Content | Dynamic segment? | Rendering strategy and why |
|---|---|---|---|
| `/` | Homepage with recent results and upcoming matches. | No | Static rendering, since the content is mostly general information. |
| `/league` | League overview with teams, standings, and matches. | No | Dynamic rendering, so the latest results and standings are displayed. |
| `/teams/[slug]` | Team details, description, and match history. | Yes (`slug`) | Static generation for known teams, with metadata for each team. |
| `/matches/[id]` | Match details, date, teams, score, and status. | Yes (`id`) | Dynamic rendering, so updated scores and match information are reflected. |

## Data

Entities (2 to 4), their main fields, and how they are related:

1. Team
- id
- name
- slug
- description
- logo
- city

2. Match

- id
- date
- homeTeamId
- awayTeamId
- homeScore
- awayScore
- status (scheduled, ongoing, or completed)

## Write actions

What users can create, update or delete:

- Create a new match between two existing teams.
- Update a match's date, status, or score.
- Delete a match.
- Create, update, and delete teams.

## Repository

GitHub URL:
https://github.com/namkhanh-le/lab-01