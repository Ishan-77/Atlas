import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Pagination,
} from "@mui/material";
import Navbar from "../components/Navbar";

const CountriesPage = () => {
  const [countriesData, setCountriesData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const itemsperPage = 20;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      console.log("API CALL", result);

      if (result && result.length > 0) {
        setCountriesData(result);
      } else {
        console.error("No data found");
      }
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    } finally {
      setLoading(false);
    }
  };

  const startIndex = (page - 1) * itemsperPage;

  const handlePagechange = ( event:React.ChangeEvent, value: number) => {
    setPage(value);
  };
  return (
    <>
    <Navbar/>
    <Box sx={{ padding: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress size={60} />
        </Box>
      ) : (
        countriesData
          .slice(startIndex, startIndex + itemsperPage) // 0-9 => 10 next page 10 so 11th element
          .map((country) => (
            <Card key={country.cca3} sx={{ width: 250 }}>
              <CardMedia
                component="img"
                alt={country.name.common}
                height="140"
                image={country.flags?.svg}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Capital: {country.capital}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Currency:{" "}
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((c) => c.name)
                        .join(", ")
                    : "na"}
                </Typography>
              </CardContent>
            </Card>
          ))
      )}

        <Pagination
          count={Math.ceil(countriesData.length / itemsperPage)}
          page={page}
          onChange={handlePagechange}
          variant="outlined"
          color="primary"
        />
    </Box>
    </>
  );
};

export default CountriesPage;
