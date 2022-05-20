// // material-ui
// import { Grid, Typography } from '@mui/material';
//
// // project imports
// import MainCard from './demo-data/MainCard';
// import { gridSpacing } from './demo-data/constant';
// import SubCard from './demo-data/SubCard';
// import MuiTypography from '@mui/material/Typography';
//
// // ==============================|| SAMPLE PAGE ||============================== //
//
// const faq = () => (
//     <MainCard title="FAQ" sx={6}>
//         <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="1. Τι πρέπει να κάνω ώστε ο λογαριασμός της ΕΥΔΑΠ να έρχεται στο όνομά μου;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Έχετε 3 επιλογές:
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 1. Μπορείτε να διορθώσετε τα στοιχεία σας στην ενότητα «Διόρθωση Στοιχείων»
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 2. Να απευθυνθείτε στα ΚΕΠ με το απόκομμα του λογαριασμού υδροληψίας
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 3. Να απευθυνθείτε στα Περιφερειακά Κέντρα της ΕΥΔΑΠ
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Μετά τον έλεγχο και τη διασταύρωση των στοιχείων από τις Υπηρεσίες μας, οι επόμενοι λογαριασμοί ΕΥΔΑΠ θα
//                                 εκδίδονται πλέον στο όνομά σας και θα περιλαμβάνουν το ΑΦΜ σας.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="2. Πώς μπορώ να ελέγξω αν τα προσωπικά μου στοιχεία που γνωρίζει η ΕΥΔΑΠ είναι πλήρη και έγκυρα;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Στην ιστοσελίδα μας, στην ενότητα «Διόρθωση Στοιχείων», μπορείτε να εισάγετε τον Αριθμό Μητρώου ΕΥΔΑΠ και
//                                 τον Αριθμό Μετρητή της παροχής ακινήτου σας για να ελέγξετε αν τα στοιχεία σας είναι πλήρη και έγκυρα. Είναι
//                                 σκόπιμο να επαναλάβετε τον έλεγχο για κάθε παροχή ακινήτου που σας ανήκει ή αν είστε ένοικος.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="3. Ποιες κατηγορίες τιμολογίων έχουμε;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 1. Γενικό Τιμολόγιο - Οικιακή Χρήση (όπου περιλαμβάνεται και το τιμολόγιο των πολυτέκνων)
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 2. Βιομηχανικό - Επαγγελματικό
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 3. Δημόσιο - Κοινοτικό
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 4. Κοινόχρηστοι κρουνοί - φιλανθρωπικό - ΟΛΠ
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 5. Ενίσχυση δικτύων Δήμων και Κοινοτήτων
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 6. Εφοδιασμός πλοίων
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 7. Πυροσβεστικές εγκαταστάσεις ακινήτων
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 8. Αδιύλιστο νερό
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="4. Γιατί να εγγραφώ στην ιστοσελίδα της ΕΥΔΑΠ;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Με την εγγραφή σας στο e-EYDAP:
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 1. Αποκτάτε πρόσβαση στους λογαριασμούς όλων των παροχών σας, με μία μόνο εγγραφή
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 2. Ενημερώνεστε χωρίς χρέωση για την έκδοση λογαριασμού με email ή και sms
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 3. Ενημερώνεστε χωρίς χρέωση για μεγάλες καταναλώσεις των παροχών σας με email ή και sms
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 4. Ενημερώνεστε για τις καταναλώσεις των παροχών σας
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 5. Ενημερώνεστε για τις οφειλές σας και για ενδεχόμενες διακοπές υδροδότησης λόγω οφειλών
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 6. Έχετε πρόσβαση στους παλαιότερους λογαριασμούς σας, οποιαδήποτε στιγμή
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 7. Εκτυπώνετε ή αρχειοθετείτε ηλεκτρονικά τους λογαριασμούς σας
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="5. Ποιες είναι οι προϋποθέσεις για την εγγραφή μου και με ποιον τρόπο επικαιροποιώ τα στοιχεία μου;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Για να πραγματοποιήσετε την εγγραφή σας στην ιστοσελίδα μας, θα πρέπει να είστε ταυτοποιημένος πελάτης της
//                                 ΕΥΔΑΠ σαν ιδιοκτήτης ή ένοικος ακινήτου και να έχετε έγκυρο και ενεργό e-mail, δηλαδή να έχετε τα στοιχεία
//                                 τα στοιχεία σας στην ΕΥΔΑΠ (ονοματεπώνυμο / επωνυμία, διεύθυνση κατοικίας / έδρας, ΑΦΜ, τηλέφωνα e-mail),
//                                 για κάθε παροχή ακινήτου του οποίου είστε νόμιμος ένοικος ή ιδιοκτήτης και φροντίζετε για την φροντίζετε για
//                                 την επικαιροποίησή τους, εάν και εφόσον υπάρξει ανάγκη. Μπορείτε να ταυτοποιηθείτε στην Στοιχείων», να
//                                 απευθυνθείτε στα ΚΕΠ ή να απευθυνθείτε στα Περιφερειακά Κέντρα της ΕΥΔΑΠ.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="6. Τι τύπο υδρομετρητή χρησιμοποιεί η ΕΥΔΑΠ Α.Ε.;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Οι υδρομετρητές που έχουν τοποθετηθεί στο δίκτυο πριν το 1985, ενδέχεται να είναι ταχυμετρικοί απλής ριπής ή
//                                 και ογκομετρικοί. Οι υδρομετρητές που έχουν τοποθετηθεί στο δίκτυο της ΕΥΔΑΠ Α.Ε. από το 1985 και μετά,
//                                 είναι αποκλειστικά ταχυμετρικοί πολλαπλής ριπής. Η ΕΥΔΑΠ Α.Ε. ακολουθώντας τις εξελίξεις στη τεχνολογία των
//                                 μετρητών, σε συνδυασμό με προγραμματισμένες αντικαταστάσεις που σχεδιάζει, θα προβεί στο άμεσο μέλλον σε
//                                 τοποθέτηση νέας γενιάς υδρομετρητών, με ηλεκτρονικούς δείκτες και δυνατότητα ασύρματης καταμέτρησης,
//                                 παράλληλα με την εγκατάσταση των κλασικών ταχυμετρικών υδρομετρητών.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="7. Γίνεται έλεγχος καλής λειτουργίας στον υδρομετρητή πριν την τοποθέτησή του στην παροχή του καταναλωτή;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Οι υδρομετρητές που τοποθετεί η ΕΥΔΑΠ Α.Ε. στο δίκτυό της προέρχονται από προμήθεια μέσω διαγωνισμών από
//                                 εργοστάσια τα οποία πληρούν τις απαιτήσεις των Ευρωπαϊκών Οδηγιών και Προτύπων. Η Υπηρεσία Υδρομετρητών
//                                 ελέγχει το 10% της ποσότητας της εκάστοτε συνολικής προμήθειας. Σημειώνεται ότι, οι προμηθευτές είναι
//                                 υποχρεωμένοι να παραδώσουν βεβαίωση στην οποία ρητά αναφέρεται ότι όλοι οι υδρομετρητές που προμηθεύουν
//                                 ρυθμίστηκαν και δοκιμάστηκαν σύμφωνα με τα ισχύοντα διεθνή κανονιστικά πρότυπα.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="8. Είναι δυνατόν ο νέος υδρομετρητής να είναι ελαττωματικός;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Ο υδρομετρητής είναι όργανο που υπόκειται σε όλους τους απαραίτητους ελέγχους κατά την φάση κατασκευής του
//                                 όπως προβλέπονται από τα σχετικά πρότυπα. Παρόλα αυτά η ΕΥΔΑΠ Α.Ε. δίνει την δυνατότητα στον καταναλωτή στην
//                                 περίπτωση που αμφισβητεί τις καταγραφές του υδρομετρητή του, να αιτηθεί δοκιμής στο διαπιστευμένο εργαστήριο
//                                 που διαθέτει, παρουσία του. Στο εργαστήριο ελέγχεται εάν τα μετρολογικά χαρακτηριστικά του υδρομετρητή
//                                 πληρούν τις σχετικές προδιαγραφές. Για την διενέργεια της δοκιμής, η ΕΥΔΑΠ Α.Ε. προβαίνει σε αντικατάσταση
//                                 του υφιστάμενου υδρομετρητή με νέο, ο οποίος παραμένει ως μόνιμος στην παροχή του καταναλωτή. Όπως
//                                 προβλέπεται από το άρθρο 3 § 3.2.5 του Κανονισμού Λειτουργίας Δικτύου Ύδρευσης της ΕΥΔΑΠ Α.Ε. (ΦΕΚ
//                                 552/Β΄/25.03.2009) καθώς και από την υπ’ αριθμ. 17949/13.03.2013 Απόφαση του Δ.Σ. της ΕΥΔΑΠ Α.Ε., στην
//                                 περίπτωση που η δοκιμή αποδείξει ότι ο υδρομετρητής καταγράφει θετικά (σε βάρος του καταναλωτή),
//                                 ακολουθείται διαδικασία διόρθωσης των χρεώσεων που έχουν επιβληθεί, ενώ σε περίπτωση αρνητικής καταγραφής
//                                 (σε βάρος της ΕΥΔΑΠ Α.Ε.) ο καταναλωτής επιβαρύνεται μόνο με το κόστος της δοκιμής ο δε λογαριασμός του
//                                 μένει ως έχει (33,58€+ΦΠΑ24%=41,64€).
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="9. Μπορεί ένας υδρομετρητής να καταγράφει περισσότερες ποσότητες νερού από την πραγματική κατανάλωση του καταναλωτή;">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 Ο υδρομετρητής είναι ένα μηχανικό όργανο το οποίο σε σπάνιες περιπτώσεις μπορεί να εμφανίσει πλασματική
//                                 καταγραφή. Ο καταναλωτής δύναται σε κάθε περίπτωση να αιτηθεί δοκιμής του υδρομετρητή του στο διαπιστευμένο
//                                 εργαστήριο που διαθέτει η ΕΥΔΑΠ Α.Ε.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <SubCard title="10. Τι μπορώ να κάνω ως καταναλωτής αν παρατηρήσω αλλοιώσεις στην ποιότητα του νερου (αλμυρό ή γλυφό νερό, δύσοσμο, θολό);">
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 1. Για την περίπτωση αλμυρού ή γλυφού νερού: Πρώτα θα πρέπει να βεβαιωθείτε ότι υδρεύεστε από την ΕΥΔΑΠ και
//                                 στη συνέχεια να ειδοποιήσετε την ΕΥΔΑΠ στο τηλεφωνικό κέντρο Εξυπηρέτησης Πελατών 1022. Σε περίπτωση που
//                                 υδρεύονται από τον Δήμο, θα πρέπει να απευθυνθούν στην αρμόδια Δημοτική Υπηρεσία. Το νερό δεν πρέπει να
//                                 χρησιμοποιείται ως πόσιμο μέχρι να ειδοποιηθείτε για την καταλληλότητά του.
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 2. Για την περίπτωση δύσομου νερού: Αρχικά, ελέγχετε αν σε όλες τις βρύσες του διαμερίσματος το νερό είναι
//                                 το ίδιο δύσοσμο. Αν όχι, τότε πρέπει να ελεγχθεί σε ποια βρύση παρουσιάζεται η δυσοσμία και να κληθεί
//                                 υδραυλικός καθώς το πρόβλημα σχετίζεται με το εσωτερικό δίκτυο του ακινήτου. Αν ναι, και εφόσον υδροδοτείται
//                                 από την ΕΥΔΑΠ, τότε πρέπει αμέσως να ειδοποιηθεί η Εταιρία στο τηλεφωνικό κέντρο Εξυπηρέτησης Πελατών 1022.
//                                 Το νερό δεν πρέπει να χρησιμοποιείται ως πόσιμο μέχρι να ειδοποιηθείτε για την καταλληλότητά του.
//                             </MuiTypography>
//                         </Grid>
//                         <Grid item>
//                             <MuiTypography variant="body 1" gutterBottom>
//                                 3. Για την περίπτωση θολού νερού: Γεμίστε ένα ποτήρι με νερό, αφήστε το να ηρεμήσει 30 λεπτά της ώρας και
//                                 παρατηρήστε αν και πως διαυγάζεται. Αν η διαύγαση αρχίζει από τον πυθμένα, το νερό γίνει διαυγές και δεν
//                                 έχουν κατασταλάξει στερεά σωματίδια ή ιζήματα τότε η θολότητα οφείλεται σε αέρα παγιδευμένο στο δίκτυο και
//                                 δεν πρέπει να ανησυχούμε γιατί σε αυτήν την περίπτωση το νερό είναι πόσιμο. Αν η διαύγαση αρχίζει από την
//                                 επιφάνεια, το νερό παραμένει θολό ή έχουν κατασταλάξει ιζήματα, τότε το νερό πιθανώς δεν είναι πόσιμο και
//                                 πρέπει να ειδοποιήσουμε αμέσως την ΕΥΔΑΠ στο τηλεφωνικό κέντρο Εξυπηρέτησης Πελατών 1022.
//                             </MuiTypography>
//                         </Grid>
//                     </Grid>
//                 </SubCard>
//             </Grid>
//         </Grid>
//     </MainCard>
// );
//
// export default faq;


import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationBar from '../navBar/NavigationBar'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import useStyles from "../styles";
import Container from "@material-ui/core/Container";
import Paper from "@mui/material/Paper";


export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div>
            <NavigationBar/>
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={2} maxWidth="70%">
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>What should I do so that the bill comes in my name?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You have 3 options:
                                            <br/>
                                            1. You can correct your details in the "Data Correction" section
                                            <br/>
                                            2. Contact the KEP with the receipt of the water intake bill
                                            <br/>
                                            3. Contact the Regional Centers of Acquattica
                                            <br/>
                                            After the data cross-checking by our Services, the following bills will
                                            be now issued in your name and also will include your VAT number.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 3</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 4</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 5</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 6</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 7</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 8</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 9</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 10</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </div>
    );
}



