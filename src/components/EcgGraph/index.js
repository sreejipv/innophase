import * as React from 'react';
import { View, Text, Image , StyleSheet, TouchableHighlight} from 'react-native';
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

function EcgGraph({navigation,pagetitle}) {
  return (
    <>
            <View style={{width: 200, flex: 1}}>
            <LineChart
                data={{
                datasets: [
                    {
                    data: [
                       20,30,43,22,-20,20,20,30,43,-20,2020,30,43,-20,2020,30,43,-20,2020,30,43,-20,20
                    ]
                    }
                ]
                }}
                width={screenWidth-60}
                yAxisLabel=''
                height={220}
                chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                },
                propsForDots: {
                    r: "0",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
                
                </View>
    </>
  );
}

const styles = StyleSheet.create({
    bButton:{ 
        height: 30, 
        width: 20, 
        marginRight: 30
    },
    HeaderImage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 100
    },
    Header: {
        backgroundColor: '#1960A8',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 12
    }
  });

export default EcgGraph