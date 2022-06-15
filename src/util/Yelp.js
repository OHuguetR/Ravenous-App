/* const apiKey =
  "gI9KzzbjrPzSIQMcSZ7doiDJE1S_KAMF151p3xcBijTdHJ2D0ZtyZ_djO69ssLFWvPGlYgVXi_qi6mOBmV6RTQc__u0H9QcLQtp3MhqnGDEpNf7PKMIOP0uKrhWqYnYx";

export default function Yelp() {
  async function searchs(term, location, sortBy) {
    try {
      const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
      const request = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      console.log(request);
      const jsonResponse = await request.json();
      console.log(jsonResponse);
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      } else {
        console.log("No hi ha dades");
      }
    } catch (error) {
      throw alert(error);
    }
  }
}
 */
