export interface ResponseType {
  properties: {
    meta: {
      units: Record<string, string>;
    };
    timeseries: {
      time: string;
      data: { instant: { details: Record<string, number> } };
    }[];
  };
}

/**
 * Fetch forecast from met.no
 *
 * @param lat Latitude
 * @param lon Longitude
 * @return Either the JSON response or undefined.
 */
export async function fetchForecast(
  lat: number,
  long: number,
): Promise<ResponseType | undefined> {
  const queryParams = new URLSearchParams({
    lat: lat.toString(),
    lon: long.toString(),
  });
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/complete.json?${queryParams.toString()}`,
    {
      headers: {
        "User-Agent": "fredrik meyer",
      },
    },
  );

  try {
    return response.json();
  } catch (e) {
    console.error(e);
  }
}
