## Project Description

- An endpoint that fetches random facts from a third-party api, included it in the user profile

## Features

- Fetches user profiles securely
- Handles API failures gracefully
- Includes rate limiting and timeouts
- Returns UTC timestamps in ISO 8601 format

## Setup Instructions

- git clone https://github.com/Modinat1/hngTask
- cd hngTask

## Install dependencies

- npm install

## Create an environment file

- PORT = 3000
- CAT_FACT_URL = https://catfact.ninja/fact

## Run the development server

- npm run dev

## Testing the API

- https://hngtask-production.up.railway.app/me

### Expected Response

```json
{
  "message": "User found successfully!",
  "data": {
    "status": "success",
    "user": {
      "email": "modinat@gmail.com",
      "name": "Modinat",
      "stack": "Node.js/Express",
      "fact": "The oldest cat on record was Crème Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years."
    },
    "timestamp": "2025-10-18T07:35:56.664Z"
  }
}
```

### Error Handling

- Returns 200 success
- Returns 429 if too many requests are made
- Returns 500 for unexpected server errors
