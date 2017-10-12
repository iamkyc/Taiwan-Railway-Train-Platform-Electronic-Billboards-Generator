import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';

class Container extends React.Component{
	constructor(props){
		super(props);
		this.state={
			distination:'高雄',
			via:'山',
			trainType:'自強',
			departureTime:'１９：０６',
			platform:'２Ａ',
			memo:'* 準 點 *'
		}
	}

	changeData(){

	}

	render(){
		return(
			<div>
				<div>
					<h1 className="title">鐵路電子看板產生器</h1>
				</div>
				<div className="board-frame-tw">
					<div className="board-row first-row">
						<div className="board-subtitle"><span>開</span><span>往</span></div>
						<div id="Distination">
							<div className="english-subtitle">DISTINATION</div>
							<div className="screen sm-screen distination-screen">{this.state.distination}</div>
						</div>
						<div className="board-subtitle"><span>經</span><span>由</span></div>
						<div id="Via">
							<div className="english-subtitle">VIA</div>
							<div className="screen sm-screen via-screen">{this.state.via}</div>
						</div>
						<div className="r1-unit">線</div>
						<div id="TrainType">
							<div className="english-subtitle">TRAIN TYPE</div>
							<div className="screen sm-screen traintype-screen">{this.state.trainType}</div>
						</div>
						<div className="r1-unit">號</div>
					</div>
					<div className="board-row second-row">
						<div id="DepartureTime">
							<div className="english-subtitle">DEPARTURE TIME</div>
							<div className="screen departure-screen">{this.state.departureTime}</div>
						</div>
						<div className="r2-unit">第</div>
						<div id="Platform">
							<div className="english-subtitle">PLATFORM</div>
							<div className="screen platform-screen">{this.state.platform}</div>
						</div>
						<div className="r2-unit">月 台</div>
					</div>
					<div className="board-row third-row">
						<div className="screen row-screen">
							<marquee>{this.state.memo}</marquee>
						</div>
					</div>		
				</div>

				<div class="control">
					<form>
						<fieldset>
							<legend>控制區</legend>
							終點站：<input type="text" onChange={event=>this.setState({distination:event.target.value})}/><br/>
							經由：<input type="text" onChange={event=>this.setState({via:event.target.value})}/><br/>
							型號：<input type="text" onChange={event=>this.setState({trainType:event.target.value})}/><br/>
							到站時間：<input type="text" className="full-width-input" onChange={event=>this.setState({departureTime:event.target.value})}/>
							<span>使用全形文字(shift+空白鍵)</span><br/>
							月台：<input type="text" onChange={event=>this.setState({platform:event.target.value})}/>
							<span>使用全形文字(shift+空白鍵)</span><br/>
							<div className="memo-input">備註：<textarea type="text" onChange={event=>this.setState({memo:event.target.value})}/></div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
};


	

	

ReactDOM.render(
  	<Container />,
  document.getElementById('root')
);