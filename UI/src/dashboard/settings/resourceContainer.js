import React,{Component} from 'react'

import TimeZoneName from '../../lib/timezones/timezones'
import axios from 'axios'
import {SET_TIMEZONE_ENDPOINT} from '../../config/endpoints'
import moment from 'moment-timezone'
import Resource from './resource'

export default class ResourceContainer extends Component {
    constructor(props){
        super(props);
        //  state 추가하는 부분
        this.state = {value: '', site_id:'', _name:'', description:'Virtual machines', contact:'', location:'', pragma_boot_path:'/opt/pragma_boot'
            , pragma_boot_version:'', python_path:'/opt/python/bin/python', temp_dir:'/var/run/pcc', username:'root', deployment_type:'Rocks KVM', site_hostname:''
            , latitude:'36.060839', longitude:'140.137303', total_cpu:'32', total_memory:'64'};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event){
        alert('Form was submitted, '+ this.state._name);
    }

    onCloseSettings(){
        this.props.settingContainer.onClose()
    }

    render() {
        return (
            <Resource resourceContainer={this}/>
    )
    }
}