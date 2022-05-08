import React from "react";
import Grid from "@material-ui/core/Grid";
import MainFeatured from "./MainFeatured";
import CardPreview from "./CardPreview";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";


export default function Featured() {
    return (
        <Container maxWidth="70%" justify-content="center" align-items="center">
            <div className="App">
                <div style={{width: '100%', align: 'center', padding: '10px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <MainFeatured/>
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <CardPreview url="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <CardPreview url="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={6} sm={4} md={3}>*/}
                        {/*    <CardPreview url="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={6} sm={4} md={3}>*/}
                        {/*    <CardPreview url="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={6} sm={4} md={3}>*/}
                        {/*    <CardPreview url="https://images.unsplash.com/photo-1555063200-219c0652df49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={6} sm={4} md={3}>*/}
                        {/*    <CardPreview url="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />*/}
                        {/*</Grid>*/}
                    </Grid>
                </div>
            </div>
        </Container>
    );
}