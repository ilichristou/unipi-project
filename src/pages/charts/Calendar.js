import * as React from 'react';
import {
    styled, darken, alpha, lighten,
} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import {ViewState, EditingState, CurrentTimeIndicator} from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
    Scheduler,
    MonthView,
    Appointments,
    Toolbar,
    DateNavigator,
    AppointmentTooltip,
    AppointmentForm,
    EditRecurrenceMenu,
    Resources,
    DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import WbSunny from '@mui/icons-material/WbSunny';
import FilterDrama from '@mui/icons-material/FilterDrama';
import Opacity from '@mui/icons-material/Opacity';
import ColorLens from '@mui/icons-material/ColorLens';
import {owners} from '../demo-data/tasks';
import {gridSpacing} from "../demo-data/constant";
import {Grid} from "@material-ui/core";

const PREFIX = 'Demo';

const classes = {
    cell: `${PREFIX}-cell`,
    content: `${PREFIX}-content`,
    text: `${PREFIX}-text`,
    sun: `${PREFIX}-sun`,
    cloud: `${PREFIX}-cloud`,
    rain: `${PREFIX}-rain`,
    sunBack: `${PREFIX}-sunBack`,
    cloudBack: `${PREFIX}-cloudBack`,
    rainBack: `${PREFIX}-rainBack`,
    opacity: `${PREFIX}-opacity`,
    appointment: `${PREFIX}-appointment`,
    apptContent: `${PREFIX}-apptContent`,
    flexibleSpace: `${PREFIX}-flexibleSpace`,
    flexContainer: `${PREFIX}-flexContainer`,
    tooltipContent: `${PREFIX}-tooltipContent`,
    tooltipText: `${PREFIX}-tooltipText`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
    circle: `${PREFIX}-circle`,
    textCenter: `${PREFIX}-textCenter`,
    dateAndTitle: `${PREFIX}-dateAndTitle`,
    titleContainer: `${PREFIX}-titleContainer`,
    container: `${PREFIX}-container`,
};

const getBorder = theme => (`1px solid ${
    theme.palette.mode === 'light'
        ? lighten(alpha(theme.palette.divider, 1), 0.88)
        : darken(alpha(theme.palette.divider, 1), 0.68)
}`);

const DayScaleCell = props => (
    <MonthView.DayScaleCell {...props} style={{textAlign: 'center', fontWeight: 'bold'}}/>
);

const StyledOpacity = styled(Opacity)(() => ({
    [`&.${classes.rain}`]: {
        color: '#4FC3F7',
    },
}));
const StyledWbSunny = styled(WbSunny)(() => ({
    [`&.${classes.sun}`]: {
        color: '#FFEE58',
    },
}));
const StyledFilterDrama = styled(FilterDrama)(() => ({
    [`&.${classes.cloud}`]: {
        color: '#90A4AE',
    },
}));

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${classes.cell}`]: {
        color: '#78909C!important',
        position: 'relative',
        userSelect: 'none',
        verticalAlign: 'top',
        padding: 0,
        height: 100,
        borderLeft: getBorder(theme),
        '&:first-of-type': {
            borderLeft: 'none',
        },
        '&:last-child': {
            paddingRight: 0,
        },
        'tr:last-child &': {
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: 'white',
        },
        '&:focus': {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            outline: 0,
        },
    },
    [`&.${classes.sunBack}`]: {
        backgroundColor: '#FFFDE7',
    },
    [`&.${classes.cloudBack}`]: {
        backgroundColor: '#ECEFF1',
    },
    [`&.${classes.rainBack}`]: {
        backgroundColor: '#E1F5FE',
    },
    [`&.${classes.opacity}`]: {
        opacity: '0.5',
    },
}));
const StyledDivText = styled('div')(() => ({
    [`&.${classes.text}`]: {
        padding: '0.5em',
        textAlign: 'center',
    },
}));
const StyledDivContent = styled('div')(() => ({
    [`&.${classes.content}`]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
}));

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
    [`&.${classes.appointment}`]: {
        borderRadius: '10px',
        '&:hover': {
            opacity: 0.6,
        },
    },
}));

const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
    [`&.${classes.flexibleSpace}`]: {
        flex: 'none',
    },
    [`& .${classes.flexContainer}`]: {
        display: 'flex',
        alignItems: 'center',
    },
}));
const StyledAppointmentsAppointmentContent = styled(Appointments.AppointmentContent)(() => ({
    [`&.${classes.apptContent}`]: {
        '&>div>div': {
            whiteSpace: 'normal !important',
            lineHeight: 1.2,
        },
    },
}));

const appointments = [
    {
        id: 0,
        title: 'Καταμέτρηση ποσότητας νερού',
        startDate: new Date(2022, 6, 9, 12, 0),
        endDate: new Date(2022, 6, 9, 13, 0),
        ownerId: 1,
    },  {
        id: 1,
        title: 'Έκδοση νέου λογαριασμού',
        startDate: new Date(2022, 6, 6, 13, 0),
        endDate: new Date(2022, 6, 6, 14, 0),
        rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20220816',
        exDate: '20220713T100000Z,20220727T100000Z',
        ownerId: 2,
    }, {
        id: 6,
        title: 'Λήξη λογαριασμού',
        startDate: new Date(2022, 5, 28, 12, 0),
        endDate: new Date(2022, 5, 28, 12, 30),
        rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20220727',
        exDate: '202280705T090000Z,20220719T090000Z',
        ownerId: 3,
    }
];

const resources = [{
    fieldName: 'ownerId',
    title: 'Owners',
    instances: owners,
}];

const WeatherIcon = ({id}) => {
    switch (id) {
        case 0:
            return <StyledOpacity className={classes.rain} fontSize="large"/>;
        case 1:
            return <StyledWbSunny className={classes.sun} fontSize="large"/>;
        case 2:
            return <StyledFilterDrama className={classes.cloud} fontSize="large"/>;
        default:
            return null;
    }
};

const CellBase = React.memo(({
                                 startDate,
                                 formatDate,
                                 otherMonth,
                             }) => {
    const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
        ? {day: 'numeric', month: 'long'}
        : {day: 'numeric'};
    return (
        <StyledTableCell
            tabIndex={0}
            className={classNames({
                [classes.cell]: true,
                [classes.rainBack]: iconId === 0,
                [classes.sunBack]: iconId === 1,
                [classes.cloudBack]: iconId === 2,
                [classes.opacity]: otherMonth,
            })}
        >
            <StyledDivContent className={classes.content}>
                <WeatherIcon classes={classes} id={iconId}/>
            </StyledDivContent>
            <StyledDivText className={classes.text}>
                {formatDate(startDate, formatOptions)}
            </StyledDivText>
        </StyledTableCell>
    );
});

const TimeTableCell = (CellBase);

const Appointment = (({...restProps}) => (
    <StyledAppointmentsAppointment
        {...restProps}
        className={classes.appointment}
    />
));

const AppointmentContent = (({...restProps}) => (
    <StyledAppointmentsAppointmentContent {...restProps} className={classes.apptContent}/>
));

const FlexibleSpace = (({...restProps}) => (
    <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
        <div className={classes.flexContainer}>
        </div>
    </StyledToolbarFlexibleSpace>
));

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({added, changed, deleted}) {
        this.setState((state) => {
            let {data} = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, {id: startingAddedId, ...added}];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? {...appointment, ...changed[appointment.id]} : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return {data};
        });
    }

    render() {
        const {data} = this.state;
        const paperStyle = {padding: 30, margin: "20px auto", align: "right"}

        return (
            <Grid container spacing={gridSpacing}>
                <Grid item lg={6} xs={6} sm={6}>
                    <Paper elevation={20} style={paperStyle}>
                        <Scheduler
                            data={data}
                        >
                            <EditingState
                                onCommitChanges={this.commitChanges}
                            />
                            <ViewState
                                defaultCurrentDate='2022-02-23'
                            />

                            <MonthView
                                timeTableCellComponent={TimeTableCell}
                                dayScaleCellComponent={DayScaleCell}
                            />
                            <Appointments
                                appointmentComponent={Appointment}
                                appointmentContentComponent={AppointmentContent}
                            />
                            <Resources
                                data={resources}
                            />
                            <Toolbar
                                flexibleSpaceComponent={FlexibleSpace}
                            />
                            <DateNavigator/>
                            <EditRecurrenceMenu/>
                            <AppointmentTooltip
                                showCloseButton
                                showDeleteButton
                                showOpenButton
                            />
                            <AppointmentForm/>
                            <DragDropProvider/>
                        </Scheduler>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}