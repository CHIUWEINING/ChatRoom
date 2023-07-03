# Software Studio 2022 Spring Midterm Project in NTHU

## Name: Chatroom


### Scoring

| **Basic components**                             | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Membership Mechanism                             | 15%       | Y         |
| Firebase page                                    | 5%        | Y         |
| Database read/write                              | 15%       | Y         |
| RWD                                              | 15%       | Y         |
| Chatroom                                         | 20%       | Y         |

| **Advanced tools**                               | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Using React                                      | 10%       | Y         |
| Third-Party Sign In                              | 1%        | Y         |
| Notification                                     | 5%        | Y         |
| CSS Animation                                    | 2%        | Y         |
| Security                                         | 2%        | Y         |

| **Other useful functions**                         | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Name of functions                                  | 1~10%     | N         |

---
## Features
* Authentication: Users can create an account using their email and password or sign in using their Google account.
* Login Page: The login page includes an animated title rotation and colorful labels for the email and password fields.
* Chat Room: Upon successful login, users are redirected to the chat room page. The top navigation bar displays options such as Home, the user's username, Create Group, Invite to Group, and Logout.
* Group Management: Users can switch between different chat groups by clicking on the respective group names in the left sidebar.
* Messaging: Users can send messages in the selected chat group by typing in the input field at the bottom and clicking the Send button. Messages include timestamps indicating when they were sent.
* Invite to Group: Users can invite other users to join a specific group. The invited user must have an existing account to be added to the group.
* Google Notifications: The application accumulates offline message notifications. When a user logs in, they receive notifications for all messages sent by other group members while they were offline. Only the first notification received after logging in is displayed.
* Database Security: Access to the database is restricted to valid user accounts. This ensures that only authenticated users can read or write data, including creating accounts, sending messages, creating groups, and inviting others to join groups.
* Private Chat Rooms: Users have the option to create private chat rooms and invite other users to join them.


### How to use 
* At the beginning, you will be directed to the login page. The login page will have three buttons to choose from. Firstly, you can enter your email and password in the fields and click "Sign In" to create an account. There will also be prompt messages guiding you through the process. Alternatively, you can use the "Sign in with Google" option to create and log into your account.

* Once you're logged in, you will be taken to the chat room page. The top navbar will display options such as "Home," your username, "Create Group," "Invite to Group," and "Logout" buttons. On the left side, you will see different group names, and clicking on a group will switch you to that specific group. At the bottom, there will be an input field to type your messages, and you can send them by clicking the "Send" button.

* To invite someone to a group or send messages, you must first join a specific group. Otherwise, an error message will be displayed.

* The "Invite to Group" feature requires the invited person to already have an existing account.

* Google notifications will accumulate all the offline message notifications received. When you log in, you will receive notifications for all the messages sent by other group members while you were offline. If you receive messages while logging in, only the first notification received after logging in will be displayed.

* The entire webpage will have a responsive design, allowing it to adapt to different screen sizes without losing its layout (Responsive Web Design).

* The database rules dictate that only valid accounts can read or write data in the database, including creating accounts, sending messages, creating groups, and inviting others to join groups.

* You can create private chat rooms and invite existing users to join them.

* This project is implemented using the React framework.

* Google Sign-In functionality will be used for authentication.

* There are no issues with sending code.

* CSS animation will be implemented with the following effects:

    * Login page: Title rotation, color variation in the email and password label
    * Chat room page: Rotation animation for the "Current Group" in the top-right corner, bouncing animation for the "Welcome Back" text in the bottom-left corner

* The current group will be displayed in real-time in the top-right corner.

* Messages will show the time they were sent.

* Switching chat rooms will automatically scroll to the bottom of the message history, with the scrollbar positioned at the bottom.

## Technique
* React
* HTML
* CSS
* Javascript


### Firebase page link

    https://midterm-react2.web.app/
