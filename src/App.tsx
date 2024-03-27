import { ReactElement } from "react";
import Grid from "./components/Grid";
import Card from "./components/Card";

import data from "./data/data";
import { Data } from "./types";
import uuid from "react-uuid";

const App = (): ReactElement => {
  return (
    <main>
      <Grid>
        {data.map((element: Data, idx: number): ReactElement => {
            return <Card key={idx} {...element} rating={5} id={uuid()} />;
          }
        )}
      </Grid>
    </main>
  );
};

export default App;
