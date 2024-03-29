 # NFT-List-Bid

This project allows users to bid for their favorite arts from different collections. It uses the Rarible API to fetch a list of all available NFTs and displays them on a dashboard. Users can then click on an NFT to view more details and place a bid.

## Prerequisites

To run this project, you will need the following:

* Node.js and npm installed
* A OpenSea API key

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory of the project and add your OpenSea API key to it. The `.env.local` file should look like this:

```
NEXT_PUBLIC_OPEN_SEA_KEY=11111111-1111-1111-1111-111111111111
```

## Usage

To run the project, simply run `npm run dev`. This will start a local development server on port 3000. You can then access the project by visiting `http://localhost:3000` in your browser.

## Code Overview

The project consists of the following files:

* `/app/page.tsx`: This is the main entry point of the project. It imports the necessary modules and sets up the server.
* `/components`: This folder holds all custom reusable components and shadcn ui components
* `.env`: This file contains the Open Sea API key.
* `/store`: This  contains the global store for Redux Toolkit.
* `/features`: This folder contains various slice/functionalities of the project.
* `/utils`: This folder contains reusable functions.
* `/types`: This folder contains type definitions.
* `/data`: This folder contains static data definitions.
* `/context`: This folder contains the web3 Modal contexts.
* `/provider`: This folder contains files like the shadcn theme-provider.

