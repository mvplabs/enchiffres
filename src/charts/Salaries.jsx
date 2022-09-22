import { ResponsiveBar } from '@nivo/bar'

export default function SalariesChart(props) {
    let { data } = props;

    return (
        <ResponsiveBar
            data={data}
            keys={[
                'salary',
            ]}
            indexBy="decile"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'category10' }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Déciles',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Salaire',
                legendPosition: 'middle',
                legendOffset: -40
            }}
        />
    );
}