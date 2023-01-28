
const firebaseConfig = {
    apiKey: "AIzaSyBGEXtlC14k5RmaNthrWWvJe_y-6l5GRPA",
    authDomain: "midterm-react2.firebaseapp.com",
    databaseURL: "https://midterm-react2-default-rtdb.firebaseio.com",
    projectId: "midterm-react2",
    storageBucket: "midterm-react2.appspot.com",
    messagingSenderId: "287294114488",
    appId: "1:287294114488:web:d3fa7367be0c16d839424d"
  };
firebase.initializeApp(firebaseConfig);
import Sign_or_log from './src/sign_or_log'
import Chatroom from './src/chatroom';
export class Root extends React.Component {
    constructor(props) {
        super(props);
      this.state={
        mode:'sign_or_log',
        user_name:''
      }
    }
    handleChangemode=(mode)=>{
      this.setState({
        mode:mode,
        user_name:this.state.user_name
      })
    }
    handleChangeuser=(username)=>{
      this.setState({
        mode:this.state.mode,
        user_name:username
      })
    }
    render() {
      if(this.state.mode=='sign_or_log'){
        return (
          <Sign_or_log
            handleChangemode={this.handleChangemode}
            handleChangeuser={this.handleChangeuser}
          />
        );
      }else if(this.state.mode=='chatroom'){
        return(
          <Chatroom
            handleChangemode={this.handleChangemode}
            user_name={this.state.user_name}
            handleChangeuser={this.handleChangeuser}
          />
        );
      }
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));