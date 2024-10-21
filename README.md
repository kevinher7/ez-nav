# Ez-Nav (Backend)

Backend that processes API calls and generates optimized routes for user-defined locations.

# TODO

1. Add the route logic.
2. Add 自身事故 notifications to the route.

# How to Build

Install the dependencies and then run the `start:dev` script.

```powershell
npm install
npm run start:dev
```

This starts the project using nodemon for automatic updates during development.

A `.env` with the appropiate environmental variables is necessary but I will upload once I get the .env files logic right.

# Endpoints

TODO add Postman

# Disclaimers

Initially, the project intended to use the Google Maps API for route searching. However, APIs that provide train data , seems to be shared accessible only through specific Japanese companies. The price and the fact that a company name is required,I improvised by using the timetables with the trains in order to get accurate train data (and given Japan's punctuality it shouldn't pose much of an issue).
