// import React from 'react';
// import {Grid, Link, Typography} from "@material-ui/core";
// import {gridSpacing} from "./demo-data/constant";
// import Card from "../components/Card";
// import Paper from "@mui/material/Paper";
// import Card1 from "../components/Card1";
// import ReactDOM from "react-dom";
// import {img} from '../components/news-img'
//
// const paperStyle = {padding: 30, margin: "20px auto", align: "right"}
//
// const newsstand = () => {
//     return (
//         <div>
//         <Grid container spacing={gridSpacing}>
//             <Grid item xs={6} sm={3}>
//                 <Card id={img[0].id} image={img[0].image} title={img[0].title} text={img[0].text}/>
//                 <Card id={img[1].id} image={img[1].image} title={img[1].title} text={img[1].text}/>
//             </Grid>
//         </Grid>
//         </div>
//     );
// }
//
// export default newsstand;
//
// // ReactDOM.render(
// //     <div>
// //         <Card id={img[0].id} image={img[0].image} title={img[0].title} text={img[0].text}/>
// //         <Card/>
// //     </div>
// //     , document.getElementById('root')
// // );

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Link, Typography} from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";


export default function TitlebarBelowImageList() {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <Toolbar/>
            <ImageList sm={{width: 1000, height: 750}}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <div className='tc bg-light-gray hover-bg-light-silver dib br2 pa4 ma4 bw2 shadow-5?100x100'>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>{item.text}</span>}
                                position="below"
                            />
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>

    );
}

const marginTop = {marginTop: 15}

const itemData = [
    {

        img: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: '90 χρόνια φράγμα Μαραθώνα',
        text: <Typography
            component={Link}
            href="https://fragma.hellenic-cosmos.gr/tour.html"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Εικονική περιήγηση Έκθεσης για τα 90 χρόνια του Φράγματος του Μαραθώνα
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Συνεργασία με το Εθνικό Μετσόβιο Πολυτεχνείο',
        text: <Typography
            component={Link}
            href="https://www.ntua.gr/el/"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Συνεργασία με το ΕΜΠ για τη δημιουργία νέως έξυπνων υδρομετρητών. Για πληροφορίες πατήστε εδώ.
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Έκθεση Βιώσιμης Ανάπτυξης',
        text: <Typography
            component={Link}
            href="https://www.eydap.gr/userfiles/Presentations/viosimi_anaptyxi_2020_final.pdf"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Πατήστε εδώ για να καταβέσετε την Έκθεση Βιώσιμης Ανάπτυξης 2021.
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        title: '10 χρόνια Aqua Republica Europea',
        text: <Typography
            component={Link}
            href="https://www.eydap.gr/userfiles/47614413-661a-4fba-ba7c-a14f00cfa261/AquaPublicaEuropea.pdf"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Aqua Republica Europea - Μανιφέστο για το νερό. Για πληροφορίες πατήστε εδώ.
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Ο Σταγονούλης',
        text: <Typography
            component={Link}
            href="https://www.eydap.gr/userfiles/47614413-661a-4fba-ba7c-a14f00cfa261/BIBLIO%20STAGONOULHS_new_1_site.pdf"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Για το νέο τεύχος, πατήστε εδώ.
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        title: 'Περιβαλλοντικό πρόγραμμα "Το ταξίδι του Σταγονούλη"',
        text: <Typography
            component={Link}
            href="https://www.eydap.gr/LearnAboutWater/enviromental-programs/SchoolVisit"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Για πληροφορίες, πατήστε εδώ.
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Βράβευση Πληροφοριακών συστημάτων της Εταιρείας',
        text: <Typography
            component={Link}
            href="eydap.gr/news/Awards/"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Για πληροφορίες, πατήστε εδώ.
        </Typography>
    },
    {
        img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Innovation Challenge σε συνεργασία με την ΕΕΣΥΠ',
        text: <Typography
            component={Link}
            href="https://www.hcap.gr/en/pr-tech-competition-series-hcap-innovation-challenge/"
            variant="subtitle3"
            sx={{textDecoration: 'none'}}
            style={marginTop}

        >
            Για πληροφορίες, πατήστε εδώ.
        </Typography>
    }


];
