class Sign_or_log extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChangeuser=(username)=>{
        this.props.handleChangeuser(username);
    }
    create_alert=(type, message)=> {
        var alertarea = document.getElementById('alertarea');
        var str_html='';
        if (type == "success") {
            str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "</div>";
            alertarea.innerHTML = str_html;
        } else if (type == "error") {
            str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "</div>";
            alertarea.innerHTML = str_html;
        }
    }
    click_log=()=>{
        var email=document.getElementById('txtemail').value;
        var password=document.getElementById('txtpassword').value;
        firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
            var user=result.user;
            user=user.email;
            user=user.split("@");
            user=user[0];
            this.handleChangeuser(user);
            this.handleChangemode();
        }).catch((error)=>{
            this.create_alert('error',error.message);
        });
    }
    click_google_log=()=>{
        var provider=new firebase.auth.GoogleAuthProvider();
        console.log('sign in with pop up');
        firebase.auth().signInWithPopup(provider).then((result)=>{
            var ref_user_list=firebase.database().ref('/prevent/user_list');
            var user=result.user;
            user=user.email;
            user=user.split("@");
            user=user[0];
            ref_user_list.update({[user]:true});
            this.handleChangeuser(user);
            this.handleChangemode();
        }).catch((error)=>{
            this.create_alert('error',error.message);
        });
    }
    click_sign=()=>{
        var txtEmail=document.getElementById('txtemail');
        var txtPassword=document.getElementById('txtpassword');
        var email=document.getElementById('txtemail').value;
        var password=document.getElementById('txtpassword').value;
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            this.create_alert('success','sign up successfully');
            var ref_user_list=firebase.database().ref('/prevent/user_list');
            var user=result.user;
            user=user.email;
            user=user.split("@");
            user=user[0];
            ref_user_list.update({[user]:true});
            txtEmail.value='';
            txtPassword.value='';
        }).catch((error)=>{
            this.create_alert('error',error.message);
        });
    }
    handleChangemode=()=>{
        this.props.handleChangemode('chatroom');
    }
    render() {
        return (
            <div class='col-12'id='sign_or_log'>
                <div id='type'>
                <div id="alertarea"></div>
                <div class='col-12' id='head'><i>Welcome to the Chatroom!</i></div>
                <div id='row1' class='row'>
                <label for="email" class='col-5' id='email' ><i>enter your email:</i></label>
                <input type="email" class='txtemail col-2' id="txtemail" name="email" placeholder="type your email"></input>
                </div>
                <div id='row2' class='row'>
                <label for="password" class='col-5' id='password' ><i>enter your password:</i></label>
                <input type="password" class='txtpassword col-2' id="txtpassword" name="password" placeholder="type your password"></input>
                </div>
                <div id='row3' class='row'>
                <input type="button" class="btn col-2" id="sign_up" value="sign up" onClick={this.click_sign}></input>
                <input type="button" class="btn col-2" id="log_in" value="log in" onClick={this.click_log}></input>
                <input type="button" class="btn col-2" id="google_log" value="google log" onClick={this.click_google_log}></input>
                </div>
                </div>
            </div>
        )
    }
}
export default Sign_or_log;