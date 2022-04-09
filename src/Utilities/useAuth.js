import React from 'react';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import qs from 'qs'
import {createAction} from './createAction';
import {sleep} from './sleep';

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {  
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );
  const auth = React.useMemo(
    () => ({
        login: async (userName, password) => {
          const query = { email: userName, password: password}

          const config = {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: `http://demoscl.xyz/schoolapi/user/${userName}`
          }
          
          const urlInfo = await axios(config)
          const baseUrl = urlInfo.data[0].url 
          const form = {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: baseUrl+`api/login?email=${userName}&password=${password}`
            };
          const {data} = await axios(form);
          // console.log(data)
          console.log(urlInfo.data[0].url)

          const info = data.data.userDetails
          // data.user.role_id
          if(data.data.user.role_id === 2){
            const user = {
              base_url: baseUrl,
              fullName: info.full_name,
              image: info.student_photo,
              email: info.email,
              studentId: data.data.user.id,
              rollNo: info.roll_no,
              classId: info.class_id,
              className: info.class_name,
              sectionName: info.section_name,
              guardianName: info.guardians_name,
              gurdianMobileNumber: info.guardians_mobile,
              schoolName: data.data.system_settings[0].school_name,
              token: data.data.accessToken,
              userRole: 'student'
  
            };
            console.log(user)
            await AsyncStorage.setItem('user', JSON.stringify(user));
            dispatch(createAction('SET_USER', user));
          }else{
            const user ={
              base_url: baseUrl,
              fullName: data.data.user.full_name,
              image: info.guardians_photo,

              email: data.data.user.email,
              studentId: data.data.childrens[0].id,
              rollNo: data.data.childrens[0].roll_no,
              classId:  data.data.childrens[0].class.id,
              className:  data.data.childrens[0].class.class_name,
              sectionName:  data.data.childrens[0].section.section_name,
              guardianName: info.guardians_name,
              gurdianMobileNumber: info.guardians_mobile,
              schoolName:  data.data.childrens[0].school.school_name,
              token: data.data.accessToken,
              userRole: 'guardian'


            }
            console.log(user)
            await AsyncStorage.setItem('user', JSON.stringify(user));
            dispatch(createAction('SET_USER', user));
          }
          

          
      },
        logout: async () => {
          await AsyncStorage.removeItem('user');
          dispatch(createAction('REMOVE_USER'));
      },

    }),
    [],
  );
  React.useEffect(() => {
    sleep(2000)
    .then(() => {
        AsyncStorage.getItem('user')
        .then(user => {
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    });
  }, []);
  return {auth, state};
}