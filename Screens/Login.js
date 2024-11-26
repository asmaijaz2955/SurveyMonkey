// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ant from 'react-native-vector-icons/AntDesign';
// import IP from '../ip';
// import CheckBox from '@react-native-community/checkbox';

// import { request, PERMISSIONS } from 'react-native-permissions';
// const Login = ({ navigation }) => {
//     const [user, onChangeText] = React.useState('');
//     const [pass, onChange] = React.useState('');
//     const navigating = () => {
//         navigation.navigate('SignUp')
//     };
//     const navigatinga = () => {
//         navigation.navigate('Main')
//     };

//     const [userStudent, setUserStudent] = useState({});
//     const [pdfPath, setPdfPath] = useState('')

//     async function loginAdmin() {
//         console.log(user);
//         console.log(pass);
//         try {
//             const requestOptions = {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 },

//             };
//             let url = `http://${IP}/biit_lms_api/api/Admin/Login?username=${user}&password=${pass}`
//             const response = await fetch(
//                 url,
//                 requestOptions,
//             );
//             const data = await response.json();
//             console.log(data);
//             if (data == "Admin") {
//                 navigation.navigate('DashboardAdmin');
//             }

//             else if (data.Student == "Student") {
//                 navigation.navigate('StdA', { data });
//                 // Navigate to student dashboard
//             } else if (data && data.Designation == "Assistant Professor") {
//                 navigation.navigate('TeachA', { data });
//                 // Navigate to teacher dashboard
//             }
//             else if (data && data.Designation == "Junior Lecturer") {
//                 navigation.navigate('JrLecturer', { data });
//                 // Navigate to teacher dashboard
//             }
//             else if (data == "DataCell") {
//                 navigation.navigate('DatacellDashBoard');
//                 // Navigate to teacher dashboard
//             }
//             else if (data.Grader == "Grader") {
//                 navigation.navigate('GraderDashBoard', { data });
//             }



//         } catch (error) {
//             console.log(error);
//         }
//     };


//     return (
//         <View style={styles.container}>

//             <Image style={styles.images} source={require('../pics/mm.png')} />
//             <View style={styles.inputview}>
//                 <TextInput style={styles.input} onChangeText={onChangeText} value={user} />
//                 <Icon name="user" size={30} color='#7e104f' style={styles.icon1} />
//             </View>
//             <View style={styles.inputview}>
//                 <TextInput style={styles.input} onChangeText={onChange} value={pass} />
//                 <Ant name="eye" size={30} color='#7e104f' style={styles.icon1} />
//             </View>

//             <Text style={styles.textfor}>Forget Password ?</Text>
//             <TouchableOpacity style={styles.button} ><Text style={styles.text} onPress={navigatinga}> Login</Text></TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={navigating}><Text style={styles.text}>SignUp</Text></TouchableOpacity>
//         </View >
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#FFFFFF"
//     },
//     biitlms: {
//         alignSelf: 'center',
//         fontSize: 45,
//         fontWeight: 'bold',
//         marginTop: 10,
//         color: '#076F65',
//     },
//     uniqueText: {
//         alignSelf: 'center',
//         fontSize: 45,
//         fontWeight: 'bold',
//         color: '#EF4836', // Change the color to your preference
//     },
//     images: {
//         alignSelf: 'center',
//         width: 200,
//         height: 200,
//     },
//     inputview: {
//         alignItems: 'center',
//         flexDirection: 'row',
//         borderWidth: 1,
//         width: 300,
//         marginTop: 10,
//         height: 50,
//         borderRadius: 20,
//         paddingHorizontal: 10,
//         fontSize: 16,
//         fontWeight: 'bold',
//         backgroundColor: '#FFFFFF',
//         borderColor: '#7e104f',
//         alignSelf: 'center'
//     },
//     input: {
//         marginTop: 10,
//         color: '#7e104f'
//     },
//     icon1: {
//         // marginLeft:170,
//         position: 'absolute',
//         right: 20
//     },
//     button: {
//         marginTop: 15,
//         backgroundColor: '#7e104f',
//         alignSelf: 'center',
//         borderRadius: 32,
//         width: 200,
//         height: 50,
//     },
//     text: {
//         alignSelf: 'center',
//         top: 6,
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: "#FFFFFF"
//     },
//     inputx: {
//         width: 100,
//         marginTop: -0,
//         height: 40,
//         left: 38,
//         fontSize: 14,
//         fontWeight: 'bold',
//         textAlign: 'center'


//     },
//     inputy: {
//         width: 100,
//         marginTop: -40,
//         height: 40,
//         left: 150,
//         fontSize: 14,
//         fontWeight: 'bold',


//     },
//     inputz: {
//         width: 100,
//         marginTop: -40,
//         height: 40,
//         left: 280,
//         fontSize: 14,
//         fontWeight: 'bold',


//     },
//     textfor: {
//         marginTop: 5,
//         marginLeft: 200,
//         color: '#7e104f'

//     }

// });
// export default Login;
//////////////////////////////////////////////////////////



///////////////corect one bar chart
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Login = ({ navigation }) => {
    const data = [
        {
            QuestionId: 3,
            Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Average', 'Good', 'Excellent']
        },
        {
            QuestionId: 4,
            Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Good', 'Excellent', 'Poor']
        },
        {
            QuestionId: 5,
            Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Poor', 'Poor', 'Good']
        },
    ];

    const responseCounts = {
        'Poor': 0,
        'Average': 0,
        'Good': 0,
        'Excellent': 0,
    };

    data.forEach((item) => {
        item.Responses.forEach((response) => {
            responseCounts[response]++;
        });
    });

    const responseValues = Object.values(responseCounts);

    return (
        <View style={styles.container}>
            <BarChart
                data={{
                    labels: ['Poor', 'Average', 'Good', 'Excellent'],
                    datasets: [
                        {
                            data: responseValues,
                        },
                    ],
                }}
                width={300}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});

export default Login;
////////////////////////////////

// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { PieChart } from 'react-native-chart-kit';

// const Login = ({ navigation }) => {
//     const data = [
//         {
//             QuestionId: 3,
//             Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Average', 'Good', 'Excellent']
//         },
//         {
//             QuestionId: 4,
//             Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Good', 'Excellent', 'Poor']
//         },
//         {
//             QuestionId: 5,
//             Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Poor', 'Poor', 'Good']
//         },
//     ];

//     const responseColors = {
//         'Poor': '#FF5733',
//         'Average': '#FFC300',
//         'Good': '#4CAF50',
//         'Excellent': '#3498DB',
//     };

//     const responseCounts = {
//         'Poor': 0,
//         'Average': 0,
//         'Good': 0,
//         'Excellent': 0,
//     };

//     data.forEach((item) => {
//         item.Responses.forEach((response) => {
//             responseCounts[response]++;
//         });
//     });

//     const pieData = Object.keys(responseCounts).map((response) => ({
//         name: response,
//         count: responseCounts[response],
//         color: responseColors[response],
//     }));

//     return (
//         <View style={styles.container}>
//             <PieChart
//                 data={pieData}
//                 width={300}
//                 height={200}
//                 chartConfig={{
//                     backgroundGradientFrom: '#fff',
//                     backgroundGradientTo: '#fff',
//                     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 }}
//                 accessor="count"
//                 backgroundColor="transparent"
//             />
//             <View style={styles.labelsContainer}>
//                 {pieData.map((slice, index) => (
//                     <Text key={index} style={[styles.label, { color: slice.color }]}>
//                         {slice.name}
//                     </Text>
//                 ))}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//     },
//     labelsContainer: {
//         flexDirection: 'row',
//         marginTop: 10,
//     },
//     label: {
//         fontSize: 12,
//         marginHorizontal: 5,
//     },
// });

// export default Login;
///////////////
// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// const Login = ({ navigation }) => {
//     const data = [
//         {
//             QuestionId: 3,
//             Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Average', 'Good', 'Excellent']
//         },
//         {
//             QuestionId: 4,
//             Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Good', 'Excellent', 'Poor']
//         },
//         {
//             QuestionId: 5,
//             Responses: ['Average', 'Poor', 'Excellent', 'Good', 'Poor', 'Poor', 'Good']
//         },
//     ];

//     const responseColors = {
//         'Poor': '#FF5733',
//         'Average': '#FFC300',
//         'Good': '#4CAF50',
//         'Excellent': '#3498DB',
//     };

//     const responseCounts = {
//         'Poor': 0,
//         'Average': 0,
//         'Good': 0,
//         'Excellent': 0,
//     };

//     data.forEach((item) => {
//         item.Responses.forEach((response) => {
//             responseCounts[response]++;
//         });
//     });

//     const lineData = Object.keys(responseCounts).map((response) => ({
//         label: response,
//         value: responseCounts[response],
//     }));

//     return (
//         <View style={styles.container}>
//             <LineChart
//                 data={{
//                     labels: lineData.map(item => item.label),
//                     datasets: [{
//                         data: lineData.map(item => item.value),
//                         color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                     }],
//                 }}
//                 width={300}
//                 height={200}
//                 chartConfig={{
//                     backgroundGradientFrom: '#fff',
//                     backgroundGradientTo: '#fff',
//                     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 }}
//                 bezier
//                 style={styles.chart}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//     },
//     chart: {
//         marginVertical: 8,
//         borderRadius: 16,
//     },
// });

// export default Login;
