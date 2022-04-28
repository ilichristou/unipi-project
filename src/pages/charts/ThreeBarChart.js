import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    Legend,
    BarSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Plugin, Template, TemplatePlaceholder } from '@devexpress/dx-react-core';
import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack, Animation } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { gaming as data } from '../demo-data/gaming';

const rootContainerId = 'widget-container';
const iconButton = 'exportIconButton';
const ANIMATIONS = Symbol('animation');
const filter = node => (node.id !== iconButton);

const exportToImage = async (chart, format, exportFunc) => {
    try {
        const dataUrl = await exportFunc(chart, { filter });
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.download = `chart.${format}`;
        link.href = dataUrl;
        link.click();
        link.remove();
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('oops, something went wrong!', err);
    }
};

const exportToJpeg = chart => exportToImage(chart, 'jpeg', domtoimage.toJpeg);

const exportToPng = chart => exportToImage(chart, 'png', domtoimage.toPng);

const exportToPdf = async (chart) => {
    const width = chart.offsetWidth;
    const height = chart.offsetHeight;
    try {
        const dataUrl = await domtoimage.toJpeg(chart, { filter });
        // @ts-ignore
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [width, height],
        });
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();
        doc.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        doc.save('chart');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('oops, something went wrong!', err);
    }
};

const print = async (chart) => {
    try {
        const dataUrl = await domtoimage.toJpeg(chart, { filter });
        let html = '<html><head><title></title></head>';
        html += '<body style="width: 100%; padding: 0; margin: 0;"';
        html += ' onload="window.focus(); window.print(); window.close()">';
        html += `<img src="${dataUrl}" /></body></html>`;

        const printWindow = window.open('', 'print');
        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('oops, something went wrong!', err);
    }
};

const options = [
    { key: 'Print', action: print, text: 'Print' },
    { key: 'JPEG', action: exportToJpeg, text: 'Save as JPEG' },
    { key: 'PNG', action: exportToPng, text: 'Save as PNG' },
    { key: 'PDF', action: exportToPdf, text: 'Save as PDF' },
];

const ITEM_HEIGHT = 48;
const paperProps = {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: 150,
    },
};

const addKeyframe = (name, def) => {
    if (typeof document === 'undefined') {
        return;
    }
    const head = document.getElementsByTagName('head')[0];
    let style = Array.from(head.getElementsByTagName('style'))
        .find(node => node.dataset[ANIMATIONS]);
    if (!style) {
        style = document.createElement('style');
        style.type = 'text/css';
        style.dataset[ANIMATIONS] = true;
        head.appendChild(style);
    }
    const content = style.textContent;
    if (!content.includes(name)) {
        style.textContent += `\n@keyframes ${name} ${def}\n`;
    }
};

const getLabelAnimationName = () => {
    const name = 'animation_label_opacity';
    addKeyframe(name, '{ 0% { opacity: 0; } 99% { opacity: 0; } 100% { opacity: 1; } }');
    return name;
};

const Export = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExport = ({ action }) => () => {
        const chart = document.querySelector(`#${rootContainerId}`);
        handleClose();
        action(chart);
    };

    const open = Boolean(anchorEl);
    return (
        <Plugin name="Export">
            <Template name="top">
                <TemplatePlaceholder />
                <IconButton
                    id={iconButton}
                    onClick={handleClick}
                    sx={{
                        width: 50,
                        height: 50,
                    }}
                    size="large"
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={paperProps}
                >
                    {options.map(option => (
                        <MenuItem key={option.key} onClick={handleExport(option)}>
                            {option.text}
                        </MenuItem>
                    ))}
                </Menu>
            </Template>
        </Plugin>
    );
};

const PREFIX = 'Export';

const classes = {
    label: `${PREFIX}-label`,
    title: `${PREFIX}-title`,
};

const StyledChartLabel = styled(Chart.Label)(() => ({
    [`&.${classes.label}`]: {
        fill: '#ffffff',
        fontSize: '10px',
        animation: `${getLabelAnimationName()} 1s`,
    },
}));

const BarWithLabel = ({ value, ...restProps }) => (
    <React.Fragment>
        <BarSeries.Point {...restProps} />
        <StyledChartLabel
            x={restProps.arg}
            y={(restProps.val + restProps.startVal) / 2}
            dominantBaseline="middle"
            textAnchor="middle"
            className={classes.label}
        >
            {`${value}%`}
        </StyledChartLabel>
    </React.Fragment>
);
const LegendRoot = props => (
    <Legend.Root
        {...props}
        sx={{
            display: 'flex',
            margin: 'auto',
            flexDirection: 'row',
        }}
    />
);

const LegendItemRoot = props => (
    <Legend.Item
        {...props}
        sx={{
            flexDirection: 'column',
            marginLeft: '-2px',
            marginRight: '-2px',
        }}
    />
);
const LegendLabelRoot = props => (
    <Legend.Label
        {...props}
        sx={{
            whiteSpace: 'nowrap',
        }}
    />
);
const Marker = (props) => {
    const { className, color } = props;
    return (
        <svg className={className} fill={color} width="16" height="16">
            <circle cx={8} cy={8} r={8} />
        </svg>
    );
};
const StyledTitleDiv = styled('div')(() => ({
    [`&.${classes.title}`]: {
        textAlign: 'center',
        width: '100%',
        marginBottom: '10px',
    },
}));
const TitleText = ({ text }) => {
    const [mainText, subText] = text.split('\n');
    return (
        <StyledTitleDiv className={classes.title}>
            <Typography component="h3" variant="h5">
                {mainText}
            </Typography>
            <Typography variant="subtitle1">{subText}</Typography>
        </StyledTitleDiv>
    );
};
export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;
        const paperStyle = {padding: 30, margin: "20px auto", align: "right"}

        return (
            <Paper id={rootContainerId} elevation={2} style={paperStyle}>
                <Chart
                    data={chartData}
                >
                    <Title
                        text={'Estimated global gaming software\n(revenue by platform, in 2018)'}
                        textComponent={TitleText}
                    />
                    <Legend
                        position="bottom"
                        rootComponent={LegendRoot}
                        itemComponent={LegendItemRoot}
                        labelComponent={LegendLabelRoot}
                        markerComponent={Marker}
                    />
                    <ArgumentScale factory={scaleBand} />
                    <ArgumentAxis />
                    <ValueAxis showLabels={false} />

                    <BarSeries
                        name="Mobile Games"
                        valueField="mobile"
                        argumentField="year"
                        pointComponent={BarWithLabel}
                    />
                    <BarSeries
                        name="PC Games"
                        valueField="pc"
                        argumentField="year"
                        pointComponent={BarWithLabel}
                    />
                    <BarSeries
                        name="Console Games"
                        valueField="console"
                        argumentField="year"
                        pointComponent={BarWithLabel}
                    />
                    <Stack />
                    <Animation />
                    <Export />
                </Chart>
            </Paper>
        );
    }
}
