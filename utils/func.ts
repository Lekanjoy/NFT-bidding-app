export function formatCountdown(timestampInSeconds: number) {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const remainingTime = timestampInSeconds - currentTime;

  if (remainingTime < 0) {
    return "00:00:00"; // The timestamp has already passed
  }

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function shortenAddress(address: string): string {
  const shortened = `${address.slice(0, 4)}.............${address.slice(-5)}`;
  return shortened;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

export function generateCountdown(endDate: string) {
  const now = new Date();
  const end = new Date(endDate);

  const timeDifference = end.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "Sale has ended.";
  };

  const hours = Math.floor(timeDifference / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);

  if (timeDifference <= 3600000) {
    return `Sale ends in ${hours} hours and ${minutes} minutes.`;
  } else {
    return `Sale ends on ${formatDate(endDate)}.`;
  }
}


// Generate Offer
// async function createOffer(listingData, paymentTokenAddress) {
//   const response = await fetch(`https://api.opensea.io/api/v2/create_item_offer`, {
//     method: 'POST',
//     headers: { 'X-API-Key': apiKey },
//     body: JSON.stringify({
//       asset: listingData.asset.asset_contract.address,
//       token_id: listingData.asset.token_id,
//       token_type: 'ERC721', // Assuming ERC721 NFT
//       payment_token_type: paymentTokenAddress,
//       offer_amount: listingData.current_price
//     })
//   });
//   const offerData = await response.json();
//   return offerData;
// };

// // Sign Offer Transaction
// async function signOfferTransaction(offerData) {
//   // Use your wallet's functionality to sign the transaction
//   const signedTransaction = await wallet.signTransaction(offerData.transaction);
//   return signedTransaction;
// };

// // Submit Offer
// async function submitOffer(offerId, signedTransaction) {
//   const response = await fetch(`https://api.opensea.io/api/v2/orders/${chainId}/${protocolId}/offers/${offerId}/accept`, {
//     method: 'POST',
//     headers: { 'X-API-Key': apiKey },
//     body: JSON.stringify({ transaction: signedTransaction })
//   });
//   const submissionData = await response.json();
//   console.log(submissionData);
// }
