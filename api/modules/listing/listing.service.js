import Listing from "./listing.model.js";

const createListingIntoDB = async (payload) => {
  const result = await Listing.create(payload);
  return result;
};

export const ListingServices = {
  createListingIntoDB,
};
