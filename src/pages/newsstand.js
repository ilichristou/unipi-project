// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import {CssBaseline, Link, Typography} from "@material-ui/core";
// import Toolbar from "@mui/material/Toolbar";
// import Box from "@mui/material/Box";
// import NavigationBar from "../navBar/NavigationBar";
// import {useAuthState} from "react-firebase-hooks/auth";
// import {auth, db} from "../firebase";
// import {useEffect, useState} from "react";
// import {useHistory} from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import BarChart1 from "./charts/BarChart";
// import ThreeBarChart from "./charts/ThreeBarChart";
// import AreaChart from "./charts/BarChart";
// import Doughnut from "./charts/BarChart";
// import Container from "@material-ui/core/Container";
//
//
// export default function TitlebarBelowImageList() {
//
//     const [user, loading, error] = useAuthState(auth);
//     const [firstName, setFirstName] = useState("");
//
//     const history = useHistory();
//
//     const fetchUserName = async () => {
//         try {
//             const query = await db
//                 .collection("users")
//                 .where("uid", "==", user?.uid)
//                 .get();
//             const data = await query.docs[0].data();
//             firstName(data.name);
//         } catch (err) {
//             console.error(err);
//             alert("An error occured while fetching user data");
//         }
//     };
//
//     useEffect(() => {
//         if (loading) return;
//         if (!user) return history.replace("/");
//
//         fetchUserName();
//     }, [user, loading]);
//
//     return (
//         <Container maxWidth="70%" justify-content="center" align-items="center">
//             <div className="App">
//                 <CssBaseline/>
//                 <NavigationBar/>
//                 <Box component="main" sx={{flexGrow: 1, p: 3}}>
//                     <Toolbar/>
//                     <ImageList sm={{width: 1000, height: 750}}>
//                         {itemData.map((item) => (
//                             <ImageListItem key={item.img}>
//                                 <div
//                                     className='tc bg-light-gray hover-bg-light-silver dib br2 pa4 ma4 bw2 shadow-5?100x100'>
//                                     <img
//                                         src={`${item.img}?w=248&fit=crop&auto=format`}
//                                         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                                         alt={item.title}
//                                         loading="lazy"
//                                     />
//                                     <ImageListItemBar
//                                         title={item.title}
//                                         subtitle={<span>{item.text}</span>}
//                                         position="below"
//                                     />
//                                 </div>
//                             </ImageListItem>
//                         ))}
//                     </ImageList>
//                 </Box>
//             </div>
//         </Container>
//
//
//     );
// }
//
// const marginTop = {marginTop: 15}
//
// const itemData = [
//     {
//
//         img: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         title: '90 χρόνια φράγμα Μαραθώνα',
//         text: <Typography
//             component={Link}
//             href="https://fragma.hellenic-cosmos.gr/tour.html"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Εικονική περιήγηση Έκθεσης για τα 90 χρόνια του Φράγματος του Μαραθώνα
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         title: 'Συνεργασία με το Εθνικό Μετσόβιο Πολυτεχνείο',
//         text: <Typography
//             component={Link}
//             href="https://www.ntua.gr/el/"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Συνεργασία με το ΕΜΠ για τη δημιουργία νέως έξυπνων υδρομετρητών. Για πληροφορίες πατήστε εδώ.
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         title: 'Έκθεση Βιώσιμης Ανάπτυξης',
//         text: <Typography
//             component={Link}
//             href="https://www.eydap.gr/userfiles/Presentations/viosimi_anaptyxi_2020_final.pdf"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Πατήστε εδώ για να καταβέσετε την Έκθεση Βιώσιμης Ανάπτυξης 2021.
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
//         title: '10 χρόνια Aqua Republica Europea',
//         text: <Typography
//             component={Link}
//             href="https://www.eydap.gr/userfiles/47614413-661a-4fba-ba7c-a14f00cfa261/AquaPublicaEuropea.pdf"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Aqua Republica Europea - Μανιφέστο για το νερό. Για πληροφορίες πατήστε εδώ.
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         title: 'Ο Σταγονούλης',
//         text: <Typography
//             component={Link}
//             href="https://www.eydap.gr/userfiles/47614413-661a-4fba-ba7c-a14f00cfa261/BIBLIO%20STAGONOULHS_new_1_site.pdf"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Για το νέο τεύχος, πατήστε εδώ.
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
//         title: 'Περιβαλλοντικό πρόγραμμα "Το ταξίδι του Σταγονούλη"',
//         text: <Typography
//             component={Link}
//             href="https://www.eydap.gr/LearnAboutWater/enviromental-programs/SchoolVisit"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Για πληροφορίες, πατήστε εδώ.
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         title: 'Βράβευση Πληροφοριακών συστημάτων της Εταιρείας',
//         text: <Typography
//             component={Link}
//             href="eydap.gr/news/Awards/"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Για πληροφορίες, πατήστε εδώ.
//         </Typography>
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         title: 'Innovation Challenge σε συνεργασία με την ΕΕΣΥΠ',
//         text: <Typography
//             component={Link}
//             href="https://www.hcap.gr/en/pr-tech-competition-series-hcap-innovation-challenge/"
//             variant="subtitle3"
//             sx={{textDecoration: 'none'}}
//             style={marginTop}
//
//         >
//             Για πληροφορίες, πατήστε εδώ.
//         </Typography>
//     }
//
//
// ];
//
//

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function CustomImageList() {
    return (
        <ImageList
            sx={{
                width: 500,
                height: 450,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={1}
        >
            {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                    <ImageListItem key={item.img} cols={cols} rows={rows}>
                        <img
                            {...srcset(item.img, 250, 200, rows, cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            title={item.title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'white' }}
                                    aria-label={`star ${item.title}`}
                                >
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];

