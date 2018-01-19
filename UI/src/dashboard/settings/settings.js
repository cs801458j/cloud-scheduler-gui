import React,{Component} from 'react'
import Style from './settings.scss'
import TimezoneContainer from './timezoneContainer'
import ResourceContainer from './resourceContainer'

export default class Settings extends Component {
    render() {
        return (
            <section>
                    <section className={Style.panel}>
                        <header>
                            <div>Settings</div>
                            <img src='img/ic_close.svg' onClick={()=>this.props.settingContainer.onClose()} />
                        </header>
                        <nav>
                            <div className={Style.menu}>
                                <div>
                                    <img src='img/ic_access_time_white.svg'/>
                                    <div className={Style.text}>Timezone</div>
                                </div>
                                <div>
                                    <img src='img/ic_access_time_white.svg'/>
                                    <div className={Style.text}>Resource</div>
                                </div>
                            </div>
                        </nav>
                        <div className={Style.content}>
                            <TimezoneContainer settingContainer={this.props.settingContainer} dashBoardContainer={this.props.dashBoardContainer} app={this.props.app}/>
                        </div>
                        //  수정중인 부
                        <div className{Style.content}>
                            <ResourceContainer settingContainer={this.props.settingContainer} dashBoardContainer={this.props.dashBoardContainer} app={this.props.app}/>
                        </div>
                    </section>
            </section>
        )
    }
}