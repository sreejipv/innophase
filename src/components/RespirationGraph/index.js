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

function RespirationGraph({navigation,pagetitle}) {
  return (
    <>
            <View style={{width: 200, flex: 1}}>
            <LineChart
                data={{
                datasets: [
                    {
                    data: [
                       1,5,10,15,20,25,22,21,18,17,15,12,10,6,5,3,2,1
                    ]
                    }
                ]
                }}
                // width={} 
                width={screenWidth-60}
                // from react-native
                yAxisLabel=''
                height={220}
                chartConfig={{
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
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

export default RespirationGraph