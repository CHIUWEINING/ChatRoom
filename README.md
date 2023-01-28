# Software Studio 2022 Spring Midterm Project

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

### How to use 
一開始會先進入登入頁面，登入頁面有三個按鈕可以按，第一，先將信箱密碼打入欄位，再按sign in即可創建帳號，也會有提示訊息，接下來再打已經創建的信箱
密碼，就會進入到聊天室頁面。或可以直接使用google 創帳號及登入。

進到聊天室頁面上面的navbar會顯示home,使用者名稱,創建群組,邀請人進群組以及登出等按鈕，左邊欄位是不同的群組名稱，點及不同群組
即可切換群組，最下面的欄位是訊息輸入欄位，打完訊息後點及send即可發送訊息。

邀請人進群組,發送訊息都必須得先加入某個群組才可執行，否則都會跳出錯誤訊息。

邀請人進群組的功能則要求被邀請人必須是已經存在的帳號。

google notification的部分會累積所有離線時收到的訊息通知，在登入後，會收到所有離線時同組的其他人發送的訊息通知。 若是在登入時收到訊息，則只有登入後第一則收到通知。

整個頁面可以左右變窄變寬，版面不會跑掉（RWD)

DATA BASE規則則設定為只有登入的是有效的帳號時才能去讀或寫database 的資料（包含創建帳號 發送訊息 創建群組 邀請他人進群組)

可自行創建私人聊天室，並邀請存在的帳號進入該聊天室。

使用react寫這次作業

可用google sign in

sending code 沒問題

CSS animation 登入頁面：標題旋轉,email password的label會有色彩變化  聊天室頁面:右上角current group旋轉, 左下角welcome back跳動




### Function description

    右上角即時顯示所在群組

    傳送訊息顯示時間
    
    切換聊天室自動到訊息最底部，scrollbar在最下層

### Firebase page link

    midterm-react2.firebaseapp.com

### Others (Optional)

    Anything you want to say to TAs.

<style>
table th{
    width: 100%;
}
</style>