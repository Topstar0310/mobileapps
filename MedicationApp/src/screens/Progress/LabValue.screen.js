import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Alert
} from 'react-native'

// import {
//   Button,
// } from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
import { Card, Avatar, List, Divider, TextInput, Portal, PaperProvider, Modal, RadioButton } from 'react-native-paper';

const LabValue = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const labList = [
        {name: 'Lipid values (mg/dL)'},
        {name: 'Lipid values (mmol/dL)'},
        {name: 'Platelet count'},
        {name: 'Urine albumin-creatinine ratio (uACR)'},
        {name: 'Cholesterol'},
        {name: 'Alanine aminotransferase (ALAT)'},
        {name: 'Albumin'},
        {name: 'Alkaline phosphatase (ALP)'},
        {name: 'Anti-factor Xa activity'},
        {name: 'Apolipoprotein B (Apo B)'},
        {name: 'Bilirubin'},
        {name: 'Bone density'},
    ]

    const popularList = [
        {name: 'Lipid values (mg/dL)'},
        {name: 'Lipid values (mmol/dL)'},
        {name: 'Platelet count'},
        {name: 'Urine albumin-creatinine ratio (uACR)'},
        {name: 'Cholesterol'},
    ]

    const [allShow, setAllShow] = useState(false)

    return (
        <PaperProvider>
          <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
          <SafeAreaView style={commonStyles.SafeAreaView}>
            <View style={[commonStyles.titleArea, {backgroundColor: theme.header_back_color}]}>
                <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name={'arrow-back-outline'} size={25} color={'white'} onPress={() => navigation.navigate('Progress')} />
                </View>
                <View style={{width: '70%', height: basics.allStyle.tabbar_height, justifyContent: 'center'}}>
                    <TextInput
                        mode='flat'
                        placeholder='Search'
                        placeholderTextColor={'white'}
                        cursorColor='white'
                        textColor='white'
                        selectionColor='white'
                        underlineStyle={{display: 'none'}}
                        style={{backgroundColor: theme.header_back_color, color: 'white'}}
                    />
                </View>
                <View style={{width: '10%', alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name={'search-outline'} size={20} color={'white'} onPress={() => Alert.alert("Search Button Click.")} />
                </View>
            </View>
            <ScrollView>
                <View style={{backgroundColor: 'white'}}>
                    <List.Section style={{backgroundColor: 'white'}}>
                        <List.Subheader style={{color: basics.allStyle.common_btn_color}}>Frequently recorded</List.Subheader>
                        {
                            popularList.map((item, i) => {
                                return(
                                    <List.Item key={i} title={item.name} style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('LabDetail', {title: item.name})}/>
                                )
                            })
                        }
                    </List.Section>
                    <Divider bold={true}/>
                    <List.Section style={{backgroundColor: 'white'}}>
                        <List.Subheader style={{color: basics.allStyle.common_btn_color}}>All lab values</List.Subheader>
                        {
                            !allShow ? 
                                <List.Item title='Search' style={{paddingTop: 10, paddingBottom: 10}} onPress={() => {setAllShow(true)}}/>
                            :
                                labList.map((item, i) => {
                                    return(
                                        <List.Item key={i} title={item.name} style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('LabDetail', {title: item.name})}/>
                                    )
                                })
                        }
                    </List.Section>
                </View>
            </ScrollView>
              
          </SafeAreaView>
        </PaperProvider>
    )
}


export default LabValue
