import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useState } from "react";

export default function Forums(){
    

    return(<>
    <Grid container display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" marginTop="25px">
        <div>
            <Grid item>
             <CardActionArea>
                 <Card style={{ width: "200px" }}>
                  <CardContent>
                      <Typography variant="h5" textAlign="center">Eating Disorder</Typography>
                  </CardContent>
                 </Card>
             </CardActionArea>
            </Grid>
        </div>
        <div>
        <Grid item>
             <CardActionArea>
                 <Card style={{ width: "200px" }}>
                  <CardContent>
                      <Typography variant="h5" textAlign="center">Anxiety</Typography>
                  </CardContent>
                 </Card>
             </CardActionArea>
            </Grid>
        </div>
        <div>
        <Grid item>
             <CardActionArea>
                 <Card style={{ width: "200px" }}>
                  <CardContent>
                      <Typography variant="h5" textAlign="center">Depression</Typography>
                  </CardContent>
                 </Card>
             </CardActionArea>
            </Grid>
        </div>
    </Grid>
    </>);
}