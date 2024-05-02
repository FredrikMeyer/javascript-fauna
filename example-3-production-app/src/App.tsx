import { Container, Typography } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { fetchForecast, ResponseType } from "./helper";

function featureToDataArray(
  data: ResponseType,
  feature: string,
): { time: Date; val: number }[] {
  const timeseries = data.properties.timeseries;

  return timeseries.map((e) => ({
    time: new Date(e.time),
    val: e.data.instant.details[feature],
  }));
}

function Graph({ data }: { data: { time: Date; val: number }[] }) {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="time"
        scale="time"
        tickFormatter={(v: Date) => v.toLocaleString()}
      />
      <YAxis />
      <Tooltip />
      <Line dataKey="val" />
    </LineChart>
  );
}

function App() {
  const latOslo = 59.911491;
  const longOslo = 10.757933;

  const [data, setData] = React.useState<{ val: number; time: Date }[]>([]);
  const [dimensions, setDimensions] = React.useState<string[]>([]);

  const [selectedDimension, setSelectedDimension] =
    React.useState("wind_speed");

  const [fetchedData, setFetchedData] = React.useState<
    ResponseType | undefined
  >(undefined);

  React.useEffect(() => {
    fetchForecast(latOslo, longOslo).then((r) => {
      if (r) {
        console.log(r);
        setFetchedData(r);
      }
    });
  }, []);

  React.useEffect(() => {
    if (fetchedData) {
      const keys = fetchedData.properties.meta.units;
      setDimensions(Object.keys(keys));
      const res = featureToDataArray(fetchedData, selectedDimension);
      setData(res);
    }
  }, [fetchedData, selectedDimension]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedDimension(event.target.value);
  };
  return (
    <Container maxWidth="sm">
      <header>
        <Typography variant="h1">Weather</Typography>
      </header>
      <main>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-dimension-label">Dimension</InputLabel>
            <Select
              labelId="select-dimension-label"
              id="select-dimension"
              value={selectedDimension}
              label="Dimension"
              onChange={handleChange}
            >
              {(dimensions ?? ["wind_speed"]).map((d) => (
                <MenuItem value={d} key={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Graph data={data} />
      </main>
    </Container>
  );
}

export default App;
