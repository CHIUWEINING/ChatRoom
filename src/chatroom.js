class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            current_group:'',
        }
    }
    add_new_group_open=()=>{
        if(this.props.user_name!=''){
            var ref_group=firebase.database().ref('prevent/user_group/'+this.props.user_name+'/group_list');
            var new_group=prompt("What's the new group name?");
            if(new_group!=null){
                var ref_user=firebase.database().ref('prevent/group_user/'+new_group);
                new_group=this.handleHTML(new_group);
                ref_group.push(new_group);
                ref_user.update({[this.props.user_name]:this.props.user_name});
                this.setState({
                    current_group:new_group,
                })
                this.click_a_group(new_group);
            }else{
                alert('cannot input a empty value!');
            }
        }else{
            alert('need to login first!');
        }
    }
    click_a_group=(group_name)=>{
        this.setState({
            current_group:group_name,
        })
        var ref_message=firebase.database().ref('prevent/group/'+group_name);
        var message_html=[];
        var post='';
        var message_place=document.getElementById('message_place');
        message_place.innerHTML='';
        ref_message.on('child_added',(kid)=>{
            var child=kid.val();
            if(this.props.user_name==child.user_name){
                post='<li style="list-style-type:none" class="me"><div class="col-5" id="col-5"></div><p2><sub><small>'+child.date+'</sub></small></p2><p3><em>    '+child.user_name+'    </em>:<br>    '+child.content+'<p3></li>';
            }else{
                post='<li style="list-style-type:none" class="others"><p2><sub><small>'+child.date+'</sub></small></p2><p3><em>    '+child.user_name+'    </em>:<br>    '+child.content+'<p3></li>';

            }
            message_html[message_html.length]=post;
            message_place.innerHTML=message_html.join('');
            document.getElementById('message_place').scrollTop = document.getElementById('message_place').scrollHeight;
        })
            
        
    }
    add_new_member_open=()=>{
        var new_member_name=prompt("what's the new member's name?");
        if(new_member_name!=null && this.props.user_name!=''){
            var ref_temp=firebase.database().ref('prevent/user_list/'+new_member_name);
            ref_temp.once('value').then((snapshot)=>{
                var exist=false;
                if(snapshot.val()==true)exist=true;
                if(exist && this.state.current_group!=''){
                    var ref_temp1=firebase.database().ref('prevent/user_group/'+new_member_name+'/group_list');
                    var ref_temp2=firebase.database().ref('prevent/group_user/'+this.state.current_group);
                    ref_temp2.update({[new_member_name]:new_member_name});
                    ref_temp1.push(this.state.current_group);
                    alert('newmember '+ new_member_name+' has joined group '+this.state.current_group);
                }else if(!exist){
                    alert("non-exist user");
                }else if(this.state.current_group==''){
                    alert('join a group first');
                }
            })
        }
        else{
            alert('cannot input a empty value!');
        }
    }
    
    handleHTML(str){
        var new_str=str.replace(/</g,'&lt');
        new_str=new_str.replace(/>/g,'&gt');
        return new_str;
    }
    handleChangemode=()=>{
        this.props.handleChangemode('sign_or_log');
    }
    render() {
        return (
        <div id='whole'>
            <div class="col-12" id='column'>
                <a id='info'>Home</a>
                <a id='info'>{this.props.user_name}</a>
                <a id="add_group_btn" onClick={this.add_new_group_open}>Create group</a>
                <a id="add_member_btn" onClick={this.add_new_member_open}>Invite</a>
                <div class='menu' id='info1'></div>
                <a id='info_group'>Current  Group:   {this.state.current_group}</a>
            </div>
            <div class='main'>
            <div class='row'>
            <div class='col-3'id='group_place'></div>
            <div id="message_place"></div>
            </div>
            <div class='row' id='input_place'>
            <div class='col-3' id='title'><i>Welcome Back!!   {this.props.user_name}</i></div>
            <input type="textarea" class='mymessage col-8' id="mymessage" placeholder="type something here!"></input>
            <button class="send col-1" id="send">send</button>
            </div>
            </div>
        </div>
        );
    }
    componentDidMount(){
        Notification.requestPermission().then(function(result) {
            console.log(result);
        });
        firebase.auth().onAuthStateChanged((user)=>{
            var menu=document.getElementById('info1');
            if(user){
                var ref_noti=firebase.database().ref('prevent/notification/'+this.props.user_name);
                var noti_list=[];
                ref_noti.once('child_added').then((snapshot)=>{
                    if(snapshot.val()!=null)noti_list=snapshot.val();
                    for(let i=0;i<noti_list.length;i++){
                        var noti= new Notification("From CHIU's Chatroom", noti_list[i]);
                        setTimeout(3000);
                    }
                    ref_noti.set({noti_list:[]});
                })
                menu.innerHTML='<a class="log_out_btn" id="log_out_btn">LogOut</a>';
                var lgbtn=document.getElementById('log_out_btn');
                lgbtn.addEventListener('click',()=>{
                    var ref_noti=firebase.database().ref('prevent/notification/'+this.props.user_name);
                    ref_noti.set({noti_list:[]});
                    firebase.auth().signOut().then(()=>{
                        alert('log out successfully!');
                        this.setState({
                            current_group:''
                        })
                        var temp='';
                        this.props.handleChangeuser(temp);
                        this.handleChangemode();
                    }).catch(()=>{
                        alert('sign out unsuccessfully!');
                    })
                })
            }
        })
        var btn_send=document.getElementById('send');
        var msg=document.getElementById('mymessage');
        btn_send.addEventListener('click',()=>{
            if(this.props.user_name!='' && msg.value!='' && this.state.current_group!='' ){
                var temp=new Date();
                temp=temp.toString();
                temp=temp.split('G');
                var date=temp[0];
                temp=date.split(' ');
                date=temp[1]+' '+temp[2]+' '+temp[4];
                var ref_message=firebase.database().ref('prevent/group/'+this.state.current_group);
                var ref_temp=firebase.database().ref('prevent/group_user/'+this.state.current_group);
                ref_temp.once('value').then((snapshot)=>{
                    snapshot.forEach((childshot)=>{
                        var goin=0;
                        var ref_noti=firebase.database().ref('prevent/notification/'+childshot.val());
                        var noti_list=[];
                        ref_noti.once('value').then((kid)=>{
                            kid.forEach((child)=>{
                                goin=1;
                                if(child.val()!=null){
                                    noti_list=child.val();
                                }
                                if(childshot.val()!=this.props.user_name){
                                    var info={
                                        body:'message from '+this.props.user_name+' in group '+this.state.current_group,
                                        icon:'./img/icon.jpg'
                                    }
                                    noti_list.push(info);
                                    ref_noti.set({noti_list:noti_list});
                                }
                            })
                            if(goin==0 && childshot.val()!=this.props.user_name){
                                var info={
                                    body:'message from '+this.props.user_name+' in group '+this.state.current_group,
                                    icon:'./img/icon.jpg'
                                }
                                noti_list.push(info);
                                ref_noti.set({noti_list:noti_list});
                            }
                        })
                    })
                })
                msg.value=this.handleHTML(msg.value);
                var data={
                    date:date,
                    content:msg.value,
                    user_name:this.props.user_name,
                }
                ref_message.push(data);
            }
            else if(this.props.user_name==''){
                alert('Need to log in first');
            }else if(this.state.current_group==''){
                alert('choose a group first');
            }
            msg.value='';
        })
        var group_html=[];
        var group_count1=0;
        var group_count2=0;
        var child_val=[];
        var post='';
        var ref_group=firebase.database().ref('prevent/user_group/'+this.props.user_name+'/group_list');
        ref_group.once('value').then((snapshot)=>{
            if(this.props.user_name!=''){
                var group_place_post=document.getElementById('group_place');
                ref_group=firebase.database().ref('prevent/user_group/'+this.props.user_name+'/group_list');
                ref_group.on('child_added',(child)=>{
                            group_count2+=1;
                            post='<li class="group" id="group'+String(group_count2)+'">'+child.val()+'</li>';
                            group_html[group_html.length]=post;
                            group_place_post.innerHTML=group_html.join('');
                            child_val.push(child.val());
                            for(let i=1;i<=group_count2;i++){
                                var temp=document.getElementById('group'+String(i));
                                temp.onclick=()=>{
                                    this.click_a_group(child_val[i-1]);
                                }
                            }
                        
                        
                })
            }
            
        }).catch((error)=>{
            alert(error.message);
        })
    }
}
export default Chatroom;