export const fetchListings = data => (
    $.ajax({
      method: 'GET',
      url: 'api/listings',
      data
    })
  );
  
  export const fetchListing = id => (
    $.ajax({
      method: 'GET',
      url: `api/listings/${id}`
    })
  );
  
  export const createListing = listing => (
    $.ajax({
      method: 'POST',
      url: 'api/listings',
      data: { listing }
    })
  );